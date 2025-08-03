import { Container, Typography, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import type { EventType } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const EventPage = () => {
  const [events, setEvents] = useLocalStorage<EventType[]>('events', []);
  const [editEvent, setEditEvent] = useState<EventType | null>(null);
  const [showAlert, setShowAlert] = useState(true);

  const handleAddOrUpdate = (event: EventType) => {
    setEvents(prev => {
      const exists = prev.some(e => e.id === event.id);
      return exists
        ? prev.map(e => (e.id === event.id ? event : e))
        : [...prev, event];
    });
    setEditEvent(null); // exit edit mode after update
  };

  const handleDelete = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  return (
    <Container maxWidth="sm">
<Typography
  variant="h4"
  align="center"
  gutterBottom
  mt={3}
  fontWeight="bold"
  className="text-purple-800"
>
  Event Management
</Typography>


{/* <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
  Organize, track, and manage your events seamlessly
</Typography> */}


      {/* Show alert if no events and alert is not dismissed */}
      {events.length === 0 && showAlert && (
        <Alert
          severity="info"
          sx={{ mb: 3 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setShowAlert(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          No events found yet. Please create your first event to get started.
        </Alert>
      )}

      {/* Add this id for scrolling */}
      <div id="event-form">
        <EventForm
          onSubmit={handleAddOrUpdate}
          existingEvents={events}
          editEvent={editEvent}
          cancelEdit={() => setEditEvent(null)}
        />
      </div>

      <div id="event-cards">
        <EventList
          events={events}
          onEdit={setEditEvent}
          onDelete={handleDelete}
        />
      </div>
    </Container>
  );
};

export default EventPage;
