// export interface Card {
//   image: string;
// }

export interface CardData {
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

export type NilCard = CardData | null;

// export type NilCard = Card | null;
