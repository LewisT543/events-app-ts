import Image from "next/image";
import SingleEvent from "../../../src/components/events/single-event";

export async function getStaticProps(context: any) {
  const {allEvents} = await import('../../../data/data.json')
  const contextId = context.params.id;
  const eventData = allEvents.find(ev => ev.id === contextId)
  return {
    props: {data: eventData}
  }
}

export async function getStaticPaths() {
  const {allEvents} = await import('../../../data/data.json')
  const allPaths = allEvents.map((ev) => {
    return {params: {cat: ev.city, id: ev.id}}
  })
  return {
    paths: allPaths,
    fallback: false
  }
}

export const EventPage = ({data}: any) => {
  <SingleEvent data={data}/>
}

export default EventPage;