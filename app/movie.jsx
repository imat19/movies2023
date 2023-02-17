import Link from "next/link";
import Image from "next/image";

export default function Movie({ title,id, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (
    <div className="text-center">
      <h4 className="fw-bold">{title}</h4>
      <h5>{release_date}</h5>
      <Link href={`/${id}`}>
       <Image className="img-fluid" src={imagePath + poster_path} 
       width={300} 
       height={500} 
       alt ={title}
       />
      </Link>
    </div>
    
  )
}