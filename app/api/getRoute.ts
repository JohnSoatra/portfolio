import { axiosTmdb } from "@/context/axios";

function getRoute(endPoint: string) {
  return axiosTmdb.get(endPoint, {
    params: {
      api_key: process.env.TMDB_API_KEY
    }
  });
}

export default getRoute;
