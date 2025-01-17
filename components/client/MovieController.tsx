'use client';
import useData from "@/hook/useData";
import { Movie } from "@/http/dts/type";
import getMovieDetail from "@/http/service/getMovieDetail.service";
import { useEffect, useMemo } from "react";
import Movies from '@/assets/movie.json';
import { randomNumber } from "@/utils/number";

export default function MovieController() {
  const [movie, setMovie] = useData<Movie | undefined>(undefined);
  const loadingMovie = useMemo(() => movie === undefined, [movie]);

  useEffect(() => {
    getMovieDetail({
      id: Movies[randomNumber(0, Movies.length - 1)].id
    })
      .then(res => {
        setMovie(() => res.data);
      });
  }, []);

  return (
    <div className="w-screen min-h-screen bg-red-300">
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
