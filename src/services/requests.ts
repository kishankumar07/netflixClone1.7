export const API_KEY = '13d6e48cfb3ac871688d54ae9aaf7ba4'


export const endPoints = {
    popularMovies:`/movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
    trendingMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    topRatedMovies: `/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
    upcomingMovies:`/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`,
    tvShows:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`
}
