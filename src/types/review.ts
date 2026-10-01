export interface ReviewItem {
  id: string;
  author: string;
  couple?: string;
  date?: string;
  title: string;
  text: string;
  stars: number;
  highlight?: string;
  source: string;
}
