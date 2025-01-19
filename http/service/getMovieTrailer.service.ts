import Enum from "@/constants/enum";
import getService from "../getService";
import { GetMovieTrailerData, GetMovieTrailerReq } from "../dts/getMovieTrailer.dto";

function getMovieTrailer(requestProps: GetMovieTrailerReq) {
  return getService<GetMovieTrailerData>(Enum.Api.GetMovieTrailer(requestProps.id));
}

export default getMovieTrailer;
