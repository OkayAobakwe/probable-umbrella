export interface ThumbProps {
  original_title: string;
  image: string;
  id: number;
  overview?: string;
  genres?: [{
    id: number, name: string
  }];
  release_date?: string;
  tagline?: string;
  vote_average: number
}