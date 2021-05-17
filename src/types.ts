export type SitemapItem = {
  id: number;
  name: string;
  link: string;
};

export type reviewData = {
  title: string;
  description: string;
  rating: number;
  reviewer: string;
  // eslint-disable-next-line camelcase
  review_on: number;
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

export type ReviewCardProps = {
  id?: number;
  author?: string;
  authorAvatar?: string;
  countReview?: number;
  date?: string;
  stars?: number;
  text?: string;
  property?: string;
  photos?: string[];
};

export interface ReviewsList {
  reviews: ReviewCardProps[];
}
