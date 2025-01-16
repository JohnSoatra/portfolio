import { Movie } from "./type";

export interface GetMovieDetailData extends Movie { }
export interface GetMovieDetailReq {
  id: string
}
