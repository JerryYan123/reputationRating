export interface User {
  id: number;
  name: string;
  change: number;
  totalReviews: number;
  totalLikes: number;
  rank: number;
}

export const USERS: User[] = [
  { id: 1, name: 'vitalik.eth', change: 2, totalReviews: 501, totalLikes: 2891, rank: 1 },
  { id: 2, name: 'nick.eth', change: 2, totalReviews: 483, totalLikes: 2654, rank: 2 },
  { id: 3, name: 'ricmoo.eth', change: -1, totalReviews: 456, totalLikes: 2433, rank: 3 },
  { id: 4, name: 'brantly.eth', change: -3, totalReviews: 412, totalLikes: 2156, rank: 4 },
  { id: 5, name: 'virgil.eth', change: 3, totalReviews: 398, totalLikes: 1987, rank: 5 },
  { id: 6, name: 'alisha.eth', change: 2, totalReviews: 365, totalLikes: 1654, rank: 6 },
];