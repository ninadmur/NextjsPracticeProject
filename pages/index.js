import React from 'react';
import EventList from '../components/events/eventList';
import { featuredEvents } from '../functions';

const HomePage = ({ featured }) => {
  if (!featured) {
    return <div>No events</div>;
  }
  return (
    <div>
      <EventList events={featured} />;
    </div>
  );
};

export const getStaticProps = async () => {
  const featured = await featuredEvents();
  return {
    props: {
      featured,
    },
  };
};

export default HomePage;
