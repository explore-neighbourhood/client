import { categories, type Category } from '../../neighborhood/categories';
import type { MapNeighborhood } from '../../neighborhood/neighborhood-explorer';

export const facilityMarkers: Record<Category, { glyph: string; color: string }> = {
  hospital: { glyph: 'H', color: '#a53a45' },
  emergency: { glyph: 'E?', color: '#984800' },
  pharmacy: { glyph: '+', color: '#176856' },
  school: { glyph: 'S', color: '#70429a' },
  supermarket: { glyph: 'G', color: '#806000' },
  park: { glyph: 'P', color: '#35702f' },
  bus: { glyph: 'B', color: '#2554a4' },
  metro: { glyph: 'M', color: '#5146a5' },
  restaurant: { glyph: 'R', color: '#934719' },
  gym: { glyph: 'F', color: '#755144' },
};

export function MapLegend({ neighborhood }: { neighborhood: MapNeighborhood }) {
  const category = neighborhood.category;
  return (
    <div className="map-legend" aria-label="Map legend">
      <span><i className="legend-home" aria-hidden="true" />Homes</span>
      <span><i className="legend-selected" aria-hidden="true" />Selected home</span>
      {category && neighborhood.places.length > 0 && <span>
        <i className="legend-facility" style={{ background: facilityMarkers[category].color }} aria-hidden="true">{facilityMarkers[category].glyph}</i>
        {category === 'emergency' ? 'Emergency unverified' : categories[category]}
      </span>}
      {neighborhood.route.length > 0 && <span><i className="legend-route" aria-hidden="true" />Route</span>}
    </div>
  );
}
