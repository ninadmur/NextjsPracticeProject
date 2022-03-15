import EventItem from './eventItem';
import classes from './eventList.module.css';

function EventList({ events }) {
  return (
    <ul className={classes.list}>
      {events.map(event => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
