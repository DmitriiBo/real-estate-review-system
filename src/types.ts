/* eslint-disable camelcase */
export type SitemapItem = {
  id: number;
  name: string;
  link: string;
};

export type reviewData = {
  pk: number;
  title: string;
  description: string;
  rating: number;
  reviewer: string;
  // eslint-disable-next-line camelcase
  review_on: string;
};

export type reviewsGetData = {
  // eslint-disable-next-line camelcase
  items_count: number;
  next: null;
  previous: null;
  // eslint-disable-next-line camelcase
  page_number: number;
  results: reviewData[];
};

export interface ReviewsList {
  reviews: reviewData[];
}

export interface HouseData {
  pk: number;
  name: string;
  address: string;
  city: string;
  building_type: string;
  overall_floors: number;
  floor: number;
  decoration: boolean;
  overall_square: number;
  living_square: number;
  kitchen_square: number;
  view: string;
  balcony: boolean;
  images?: string[];
}

export type NilHouseData = {
  properties: HouseData[];
};
