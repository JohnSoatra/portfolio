const Enum = {
    ApiRoute: {
        GetMovieDetail: (id: string) => `/3/movie/${id}?namesdfsdf=232`
    },
    Api: {
        GetMovieDetail: (id: string) => `/movie/${id}`
    },
    Error: {
        GetMovieDetail: (id: string) => `fail to get movie detail with id: ${id}`
    }
}

export default Enum;
