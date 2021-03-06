import { reviewData } from '../types';

export const mockReviews: reviewData[] = [
  {
    pk: 15645646541,
    title: 'Review1',
    reviewer: 'Alex Yurkov',
    rating: 5,
    description:
      'Отличная площадка для проведения воркшопов. Арендовал 250м2 с марта 2020 по декабрь. Современные планировки, надежные инженерные системы, профессиональная    управляющая компания. Всё устроило.',
    review_on: 'ул.Ленина, 21, кв 25',
  },
  {
    pk: 15645646542,
    reviewer: 'Den Malfoy',
    title: 'Review2',
    review_on: 'ул.Сталина, 39, кв 9',
    rating: 4.5,
    description: '',
  },
  {
    pk: 15645646543,
    reviewer: 'Tashy Oakly',
    title: 'Review3',
    review_on: 'ул.Стахановская, 54 лит 4',
    rating: 2,
    description:
      'Про инженерные системы из предыдущего отзыва - не согласен, лично у нас были скачки напряжения и приходилось часто перезапускать кассу, теряя клиентов. То энергии не хватало и свет в помещении был неяркий, даже после замены ламп.',
  },
];
