import Enum from "@/constants/enum";
import getService from "../getService";
import { GetMovieDetailData, GetMovieDetailReq } from "../dts/getMovieDetail.dto";

function getMovieTrailer(requestProps: GetMovieDetailReq) {
  return getService<GetMovieDetailData>(Enum.Api.GetMovieDetail(requestProps.id));
}

export default getMovieTrailer;
