import { NextRequest } from "next/server";
import getRoute from "../../getRoute";
import Enum from "@/constants/enum";

export async function GET(_request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  let data;

  try {
    data = await getRoute(Enum.ApiRoute.GetMovieDetail(id));
    data = data.data;
  } catch (error) {
    throw new Error(Enum.Error.GetMovieDetail(id));
  }

  return Response.json(data || {});
}
