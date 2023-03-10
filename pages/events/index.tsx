import AllEvents from "../../src/components/events/AllEvents";


export const EventsPage = ({data}: any) => (
  <AllEvents data={data}/>
);

export const getStaticProps = async () => {
  const {events_categories} = await import('../../data/data.json')
  return {
    props: {
      data: events_categories
    }
  }
};

export default EventsPage
