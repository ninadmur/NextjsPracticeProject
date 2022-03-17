import React from 'react';
import { useRouter } from 'next/router';
import { Fragment } from 'react/cjs/react.production.min';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { getData, singleEvent } from '../../functions';

const EventDetails = ({ event }) => {
  if (!event) {
    return <div>No content</div>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const eid = params.eventId;
  // console.log(id);
  const event = singleEvent(eid);
  console.log(event);

  return {
    props: {
      event,
    },
  };
};
export const getStaticPaths = async () => {
  const events = await getData();
  const paths = events.map((e) => ({ params: { eventId: e.id } }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default EventDetails;
