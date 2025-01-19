import Variables from "@/constants/variable"
import { cleanPath, joinPath } from "./path"

function tbmlImageUrl(path: string) {
  return process.env.NEXT_PUBLIC_TMDB_FILE_BASE_URL + joinPath(Variables.ImageWidth.Backdrop, path);
}

export {
  tbmlImageUrl
}
