export interface HouseData {
  id: string;
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
