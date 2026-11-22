export const categories = {
  hospital: 'Hospitals',
  emergency: 'Emergency care',
  pharmacy: 'Pharmacies',
  school: 'Schools',
  supermarket: 'Supermarkets',
  park: 'Parks',
  bus: 'Bus stops',
  metro: 'Metro stations',
  restaurant: 'Restaurants',
  gym: 'Gyms',
};
export type Category = keyof typeof categories;
