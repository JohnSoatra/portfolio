const Enum = {
    ApiRoute: {
        GetMovieDetail: (id: number) => `/3/movie/${id}`,
        GetMovieTrailer: (id: number) => `/3/movie/${id}/videos`
    },
    Api: {
        GetMovieDetail: (id: number) => `/movie/${id}`,
        GetMovieTrailer: (id: number) => `/movie/${id}/videos`
    },
    Error: {
        GetMovieDetail: (id: number) => `fail to get movie detail with id: ${id}`,
        GetMovieTrailer: (id: number) => `fail to get movie trailer with id: ${id}`
    }
}

export default Enum;
