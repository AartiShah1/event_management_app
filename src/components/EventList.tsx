import { Typography, Box } from '@mui/material';
import EventCard from './EventCard';
import type { EventType } from '../types';
import { isPast } from 'date-fns';

type Props = {
  events: EventType[];
  onEdit: (event: EventType) => void;
  onDelete: (id: string) => void;
};

const EventList = ({ events, onEdit, onDelete }: Props) => {
  const upcomingEvents = events.filter(event => !isPast(new Date(event.date)));
  const pastEvents = events.filter(event => isPast(new Date(event.date)));

  return (
    <Box sx={{ p: 0, mt: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}>
        Upcoming Events
      </Typography>

      {upcomingEvents.length === 0 ? (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          No upcoming events.
        </Typography>
      ) : (
        upcomingEvents.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onEdit={() => onEdit(event)}
            onDelete={() => onDelete(event.id)}
          />
        ))
      )}

      <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.secondary', mt: 4, mb: 2 }}>
        Past Events
      </Typography>

      {pastEvents.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No past events.
        </Typography>
      ) : (
        pastEvents.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onEdit={() => onEdit(event)}
            onDelete={() => onDelete(event.id)}
          />
        ))
      )}
    </Box>
  );
};

export default EventList;
