import React from 'react';
import EventList from '../components/events/eventList';
import { featuredEvents } from '../DUMMY_DATA.JS';

const HomePage = () => {
  const featured = featuredEvents();
  return (
    <div>
      <EventList events={featured} />;
    </div>
  );
};

export default HomePage;
