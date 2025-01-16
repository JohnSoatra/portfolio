import { axiosClient } from "@/context/axios";
import { prefixApi } from "@/utils/api";

function getService<T>(endPoint: string) {
  return axiosClient.get<T>(prefixApi(endPoint));
}

export default getService;
