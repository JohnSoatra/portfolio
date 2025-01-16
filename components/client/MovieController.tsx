'use client';
import useData from "@/hook/useData";
import { Movie } from "@/http/dts/type";
import getMovieDetail from "@/http/service/getMovieDetail.service";
import { useEffect, useMemo } from "react";
import movies from '@/assets/movie.json';
import { randomNumber } from "@/utils/number";

const MovieIds = (movies as string[]).map(each => each.split('-')[0]);

export default function MovieController() {
  const [movie, setMovie] = useData<Movie | undefined>(undefined);
  const loadingMovie = useMemo(() => movie === undefined, [movie]);

  useEffect(() => {
    getMovieDetail({
      id: MovieIds[randomNumber(0, MovieIds.length - 1)]
    })
      .then(res => {
        setMovie(() => res.data);
      });
  }, []);

  console.log('loading = ', loadingMovie);

  return (
    <div className={loadingMovie ? '' : 'animate-fade-in'}>
      {
        loadingMovie ? null :
          <div>
            movie = {movie!.title}
          </div>
      }
    </div>


  );
}
