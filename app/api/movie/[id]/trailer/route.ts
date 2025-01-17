import { NextRequest } from "next/server";
import Enum from "@/constants/enum";
import getRoute from "@/app/api/getRoute";

export async function GET(_request: NextRequest, { params }: { params: { id: number } }) {
  const { id } = params;
  let data;

  try {
    data = await getRoute(Enum.ApiRoute.GetMovieTrailer(id));
    data = data.data;
  } catch (error) {
    throw new Error(Enum.Error.GetMovieTrailer(id));
  }

  return Response.json(data || {});
}
