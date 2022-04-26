export const NEXT_PAGE = 'USERS/NEXT_PAGE';
export const PREV_PAGE = 'USERS/PREV_PAGE';

export const goPrev = () => ({
  type: PREV_PAGE,
});

export const goNext = () => ({
  type: NEXT_PAGE,
});
