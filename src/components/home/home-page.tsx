import Image from 'next/image'
import Link from "next/link";
import imageLoader from "../../../imageLoader";

export const HomePage = ({data}: any) => (
  <div className="home_body">
    {data?.map((ev: any) => (
      <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
        <div className="image">
          <Image loader={imageLoader} unoptimized={true} width={600} height={400} alt={ev.title} src={ev.image}/>
        </div>
        <div className="content">
          <h2> {ev.title} </h2>
          <p> {ev.description} </p>
        </div>
      </Link>
    ))}
  </div>
);
