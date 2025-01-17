'use client';
import useData from "@/hook/useData";
import { Movie, Trailer } from "@/http/dts/type";
import getMovieDetail from "@/http/service/getMovieDetail.service";
import { useEffect, useMemo, useRef } from "react";
import Movies from '@/assets/movie.json';
import { randomNumber } from "@/utils/number";
import getMovieTrailer from "@/http/service/getMovieTrailer.service";
import { getBackgroundColor } from "@/utils/color";

export default function MovieController() {
  const [movie, setMovie] = useData<Movie | undefined>(undefined);
  const [tailer, setTailer] = useData<Trailer | undefined>(undefined);
  const loadingMovie = useMemo(() => movie === undefined, [movie]);
  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMovie(() => ({
      "adult": false,
      "backdrop_path": "/1ZSWFzAP4AZuFCigZZoib2RdcUO.jpg",
      "original_language": "es",
      "overview": "Barcelona, Spain. Adrián Doria, a young and successful businessman accused of murder, meets one night with Virginia Goodman, an expert interrogation lawyer, in order to devise a defense strategy.",
      "poster_path": "/fptnZJbLzKUHeNlYrAynbyoL5YJ.jpg",
      "title": "The Invisible Guest",
      "video": false,
    }) as Movie);

    // getMovieTrailer({ id: 411088 });
    getBackgroundColor('/imgs/invisible.jpg').then(res => {
      if (refDiv.current) {
        refDiv.current.style.backgroundColor = res;
      }
    })
  }, []);

  return (
    <div className="relative w-screen min-h-screen" ref={refDiv}>
      <div className="w-full h-full bg-blue-300 top-0 left-0"></div>
      <div className={loadingMovie ? '' : 'animate-fade-in'}>
        {
          loadingMovie ? null :
            <div>
              movie = {movie!.title}
            </div>
        }
      </div>
    </div>
  );
}
