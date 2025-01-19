import Enum from "@/constants/enum";
import getService from "../getService";
import { GetColorData, GetColorReq } from "../dts/getColor";

function getColor(requestProps: GetColorReq) {
  return getService<GetColorData>(Enum.Api.GetColor(requestProps.url));
}

export default getColor;
