(function () {
  'use strict';

  function mount(options) {
    if (!(options.container instanceof HTMLElement) || typeof options.getSession !== 'function') {
      throw new Error('Provide a container element and a server-backed getSession function.');
    }
    const source = new URL(options.src);
    if (!['http:', 'https:'].includes(source.protocol) || !/^[a-f0-9]{24}$/.test(options.propertyId)) {
      throw new Error('Provide an explorer URL and a valid property ID.');
    }
    const frame = document.createElement('iframe');
    frame.title = 'Neighborhood Explorer';
    frame.style.cssText = 'border:0;width:100%;height:100%;display:block';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    let destroyed = false;
    let generation = 0;
    let renewed = false;

    function failure() {
      options.container.dispatchEvent(new CustomEvent('neighborhood:error', {
        detail: { message: 'Unable to authorize this property. Refresh the portal context.' },
      }));
    }

    async function refresh() {
      const version = ++generation;
      try {
        const token = await options.getSession();
        if (destroyed || version !== generation) return;
        if (typeof token !== 'string' || token.length === 0 || token.length > 4096) throw new Error('Invalid session');
        frame.contentWindow.postMessage({
          type: 'neighborhood:init', token: token, propertyId: options.propertyId,
        }, source.origin);
      } catch {
        if (!destroyed && version === generation) failure();
      }
    }

    function receive(event) {
      if (event.origin !== source.origin || event.source !== frame.contentWindow) return;
      if (event.data?.type === 'neighborhood:ready') {
        void refresh();
      } else if (event.data?.type === 'neighborhood:context-ready') {
        renewed = false;
      } else if (event.data?.type === 'neighborhood:session-required') {
        if (renewed) { failure(); return; }
        renewed = true;
        void refresh();
      }
    }

    window.addEventListener('message', receive);
    frame.src = source.href;
    options.container.append(frame);
    return {
      refresh: function () { renewed = false; return refresh(); },
      destroy: function () {
        destroyed = true;
        generation += 1;
        window.removeEventListener('message', receive);
        frame.remove();
      },
    };
  }

  window.NeighborhoodExplorer = { mount: mount };
}());
