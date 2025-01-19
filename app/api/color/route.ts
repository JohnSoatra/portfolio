import { NextRequest } from "next/server";
import { Vibrant } from "node-vibrant/node";
import { Palette } from "@vibrant/color";
import { axiosNormal } from "@/context/axios";
import Enum from "@/constants/enum";


export async function GET(_request: NextRequest) {
  const url = _request.nextUrl.searchParams.get('url')!;
  let data: Palette | undefined;

  try {
    const response = await axiosNormal.get(url, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data);
    data = await Vibrant.from(imageBuffer).getPalette();
  } catch (ex) {
    console.log(Enum.Error.GetColor(url));
    data = undefined;
  }

  return Response.json(data || {});
}
