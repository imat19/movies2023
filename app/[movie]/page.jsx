import Image from "next/image";
export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revalidate :60}}
  )
  const res = await data.json()
  return (
    <div className="container-lg">
      <div className="row">
        <h2>{res.title}</h2>
        <p>{res.release_date}</p>
        <p>Runetime:{res.runtime}minutes</p>
        <p> <span className="badge bg-info">{res.status}</span></p>
        <Image className="img-fluid" src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
        />
        <p>{res.overview}</p>
      </div>
    </div>
  )
}