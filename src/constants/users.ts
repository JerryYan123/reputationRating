export interface User {
  id: number;
  name: string;
  address: string;
  change: number;
  totalReviews: number;
  totalLikes: number;
  rank: number;
}

export const USERS: User[] = [
  { id: 1, name: 'vitalik.eth', address: '0x2AE352E4f860D57f963D4dD444c10DAbf7Ec633C', change: 2, totalReviews: 51, totalLikes: 28, rank: 1 },
  { id: 2, name: 'nick.eth', address: '0xaA2e67aa98aAb46AEa34a965eC0E6CA18C374Db3', change: 2, totalReviews: 43, totalLikes: 26, rank: 2 },
  { id: 3, name: 'ricmoo.eth', address: '0x3e4307f9825dc486c2A972D0DB08B5B0cB3E65B3', change: -1, totalReviews: 46, totalLikes: 24, rank: 3 },
  { id: 4, name: 'brantly.eth', address: '0xeA98A37CE62F2342A3eB0AD9eDD9181c383d8958', change: -3, totalReviews: 42, totalLikes: 21, rank: 4 },
  { id: 5, name: 'virgil.eth', address: '0x492841B5F091143C5ade9A4fA48802325Af169b6', change: 3, totalReviews: 38, totalLikes: 19, rank: 5 },
  { id: 6, name: 'alisha.eth', address: '0xeeccaE28Ff40E51a82d286BDFEd6B33F7A2d2f33', change: 2, totalReviews: 35, totalLikes: 16, rank: 6 },
];