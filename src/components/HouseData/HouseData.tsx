// export interface Card {
//   image: string;
// }

export interface HouseData {
  title: string;
  place: string;
  typeHouse: string;
  houseRepairs: string;
  floor: string;
  totalArea: string;
  livingSpace: string;
  kitchenArea: string;
  view: string;
  balconyOrLoggia: string;
  images: string[];
}

export type NilHouseData = HouseData | null;

// export type NilHouseData = Card | null;
