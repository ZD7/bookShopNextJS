export interface IBook {
    id: string
    imageUrl: string
    authors: string[]
    title: string
    averageRating: number
    ratingCount: number
    description: string
  }

export interface IBookInCart extends IBook {
  quantity?: number;
  price?: string;
}