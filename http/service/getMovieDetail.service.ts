import Enum from "@/constants/enum";
import getService from "../getService";
import { GetMovieDetailData, GetMovieDetailReq } from "../dts/getMovie.dto";

function getMovieDetail(requestProps: GetMovieDetailReq) {
  return getService<GetMovieDetailData>(Enum.Api.GetMovieDetail(requestProps.id));
}

export default getMovieDetail;
