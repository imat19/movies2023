import Movie from "./movie"

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()
  return (
    <main>
      <div className="container">
        <div className="row g-4">
          {res.results.map((movie) => (
            <div className="col-lg-3 col-md-6 col-12">
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
