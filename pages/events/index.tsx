import AllEvents from "../../src/components/events/all-events";

export async function getStaticProps() {
  const {events_categories} = await import('../../data/data.json')
  return {
    props: {
      data: events_categories
    }
  }
}

export default function EventsPage({data}: any) {
  return (
    <AllEvents data={data}/>
  )
}

