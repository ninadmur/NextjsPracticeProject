export const getData = async () => {
  const res = await fetch('http://localhost:4000/events');
  const data = await res.json();
  return data;
};

export const featuredEvents = async () => {
  const featured = await getData();
  return featured.filter((event) => event.isFeatured);
};

export const singleEvent = async (id) => {
  const events = await getData();
  return events.find((event) => event.id === id);
};

// export async function getFilteredEvents(dateFilter) {
//   const { year, month } = dateFilter;
//   const events = await getData();

//   let filteredEvents = events.filter((event) => {
//     const eventDate = new Date(event.date);
//     return (
//       eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
//     );
//   });

//   return filteredEvents;
// }

// export const allEvents = async () => {
//   const events = await getData();
//   return events;
// };
