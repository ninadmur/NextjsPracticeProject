import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import EventList from '../../components/events/eventList';
import EventsSearch from '../../components/events/eventSearch';
import { useRouter } from 'next/router';
import { allEvents } from '../../functions';

const Events = ({ events }) => {
  // const events = allEvents();
  const router = useRouter();

  const filteredEvents = (year, month) => {
    const path = `events/${year}/${month}`;
    router.replace(path);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={filteredEvents} />
      <EventList events={events} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const events = allEvents();
  const res = await fetch('http://localhost:4000/events');
  const data = await res.json();
  return {
    props: {
      events: data,
    },
  };
};
export default Events;
