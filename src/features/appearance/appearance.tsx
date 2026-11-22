'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Appearance = 'system' | 'light' | 'dark';
const AppearanceContext = createContext<{ appearance: Appearance; setAppearance(value: Appearance): void }>({
  appearance: 'system', setAppearance() {},
});

export function AppearanceProvider({ children }: { children: ReactNode }) {
  const [appearance, setAppearance] = useState<Appearance>('system');
  const [systemDark, setSystemDark] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setSystemDark(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  const resolved = appearance === 'system' ? systemDark ? 'dark' : 'light' : appearance;
  useEffect(() => {
    document.documentElement.dataset.theme = resolved;
  }, [resolved]);
  return <AppearanceContext.Provider value={{ appearance, setAppearance }}>{children}</AppearanceContext.Provider>;
}

export function useAppearance() {
  return useContext(AppearanceContext);
}

export function AppearanceControl() {
  const { appearance, setAppearance } = useAppearance();
  return <label className="appearance-control"><span>Appearance</span>
    <select aria-label="Appearance" value={appearance} onChange={event => setAppearance(event.target.value as Appearance)}>
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </label>;
}
