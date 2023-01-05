import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export const HomePage = ({data}: any) => (
  <div className="home_body">
    {data?.map((ev: any) => (
      <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
        <div className="image">
          <Image width={600} height={400} alt={ev.title} src={ev.image}/>
        </div>
        <div className="content">
          <h2> {ev.title} </h2>
          <p> {ev.description} </p>
        </div>
      </Link>
    ))}
  </div>
);
