import type { Metadata } from 'next';
import './styles.css';
import '../features/rental-assistant/rental.css';
import { AppearanceProvider } from '../features/appearance/appearance';

export const metadata: Metadata = {
  title: 'Neighborhood Explorer',
  description: 'Find a rental through conversation. Explore real catalog listings, compare homes and check your office commute on an interactive map.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><AppearanceProvider>{children}</AppearanceProvider></body></html>;
}
