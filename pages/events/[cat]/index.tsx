import Image from "next/image";
import Link from "next/link";
import CatEvent from "../../../src/components/events/cat-event";

// This is used for SERVER SIDE GENERATION - it will create a static page for each permutation
export async function getStaticProps(context: any) {
  const {allEvents} = await import('../../../data/data.json')
  const id = context?.params.cat
  const data = allEvents.filter((ev: any) => ev.city === id)
  return {
    props: {
      data: data,
      pageName: id
    }
  }
}

export async function getStaticPaths() {
  const {events_categories} = await import('../../../data/data.json')
  const allPaths = events_categories.map((ev: any) => {
    return {params: {cat: ev.id.toString()}}
  })
  return {
    paths: allPaths,
    fallback: false
  }
}


export default function EventsCatPage({data, pageName}: any) {
  return (
    <CatEvent data={data} pageName={pageName}/>
  )
}

