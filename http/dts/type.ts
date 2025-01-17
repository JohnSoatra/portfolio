export interface Movie {
  "adult": boolean;
  "backdrop_path": string;
  "belongs_to_collection": null;
  "budget": number;
  "genres": {
    id: number;
    name: string
  }[];
  "homepage": string;
  "id": number;
  "imdb_id": string;
  "origin_country": string[];
  "original_language": string;
  "original_title": string;
  "overview": string;
  "popularity": number;
  "poster_path": string;
  "production_companies": {
    "id": number;
    "logo_path": string | null;
    "name": string;
    "origin_country": string
  }[];
  "production_countries": {
    "iso_3166_1": string;
    "name": string;
  }[];
  "release_date": string;
  "revenue": number;
  "runtime": number;
  "spoken_languages": {
    "english_name": string;
    "iso_639_1": string;
    "name": string;
  }[];
  "status": string;
  "tagline": string;
  "title": string;
  "video": false;
  "vote_average": number;
  "vote_count": number;
}

export interface Trailer {
  "id": number;
  "results": {
    "iso_639_1": string;
    "iso_3166_1": string;
    "name": string;
    "key": string;
    "published_at": string;
    "site": string;
    "size": number;
    "type": string;
    "official": boolean;
    "id": string;
  }[]
}