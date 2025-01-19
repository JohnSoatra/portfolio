'use client';
import useData from "@/hook/useData";
import { Movie, Trailer } from "@/http/dts/type";
import getMovieDetail from "@/http/service/getMovieDetail.service";
import { useEffect, useMemo, useRef, useState } from "react";
import Movies from '@/assets/movie.json';
import { randomNumber } from "@/utils/number";
import getMovieTrailer from "@/http/service/getMovieTrailer.service";
import Image from "next/image";
import { tbmlImageUrl } from "@/utils/url";
import getColor from "@/http/service/getColor";
import { getBackgroundColor } from "@/utils/color";
import { rgbString } from "@/utils/util";
import ReactPlayer from "react-player";

export default function MovieController() {
  const [movie, setMovie] = useData<Movie | undefined>(undefined);
  const [trailer, setTrailer] = useData<Trailer | undefined>(undefined);
  const loadingMovie = useMemo(() => movie === undefined, [movie]);
  const refDiv = useRef<HTMLDivElement>(null);
  const [backdropColor, setBackdropColor] = useData<string | undefined>(undefined);
  const backdropUrl = useMemo(() => movie && tbmlImageUrl(movie.backdrop_path), [movie]);
  const posterUrl = useMemo(() => movie && tbmlImageUrl(movie.poster_path), [movie]);
  const readyToShow = useMemo(() => loadingMovie === false && backdropUrl !== undefined && posterUrl !== undefined, [loadingMovie, backdropUrl, posterUrl]);
  const [playing, setPlying] = useData(false);
  const [muted, setMuted] = useData(false);

  useEffect(() => {
    if (backdropUrl) {
      getColor({ url: backdropUrl })
        .then(res => {
          if (res.data.LightVibrant) {
            setBackdropColor(() => rgbString(res.data.LightVibrant!.rgb));
          }
        });
    }
  }, [backdropUrl]);

  useEffect(() => {
    const movieId = Movies[randomNumber(0, Movies.length - 1)].id;
    getMovieDetail({
      id: movieId
    }).then(res => {
      setMovie(() => res.data);
    });
    getMovieTrailer({
      id: movieId
    }).then(res => {
      setTrailer(() => res.data);
    });
  }, []);

  return (
    <div className="w-full min-h-screen relative snap-start">
      <div className={loadingMovie ? '' : 'animate-fade-in'}>
        {
          readyToShow && trailer &&
          <>
            <ReactPlayer
              url={`https://youtu.be/${trailer.results[0].key}`}
              width={'100%'}
              height={'100vh'}
              playing={playing}
              muted={muted}
              onPlay={() => {
                setPlying(() => true);
                setMuted(() => false);
              }}
              onPause={() => setPlying(() => false)}

            />
            {playing === false && <button
              className="absolute inset-0"
              onClick={() => {
                setPlying(() => true);
              }}>
              <Image
                src={backdropUrl!}
                alt="movie"
                fill={true}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </button>}
            {/* width={100} height={100} quality={100} */}
            {/* <img src={backdropUrl!} alt="sdf" /> */}
          </>
        }
      </div>
    </div>
  );
}
