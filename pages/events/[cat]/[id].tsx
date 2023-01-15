import SingleEvent from "../../../src/components/events/SingleEvent";

export const EventPage = ({data}: any) => {
  return <SingleEvent data={data}/>
}

export const getStaticProps = async (context: any) => {
  const {allEvents} = await import('../../../data/data.json')
  const contextId = context.params.id;
  const eventData = allEvents.find(ev => ev.id === contextId)
  return {
    props: {data: eventData}
  }
}

export const getStaticPaths = async () => {
  const {allEvents} = await import('../../../data/data.json')
  const allPaths = allEvents.map((ev) => {
    return {params: {cat: ev.city, id: ev.id}}
  })
  return {
    paths: allPaths,
    fallback: false
  }
}

export default EventPage