import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import type { EventType } from '../types';
import { isPast, format } from 'date-fns';
import { Calendar, MapPin, FileText, Tag } from 'lucide-react';

type Props = {
  event: EventType;
  onEdit: () => void;
  onDelete: () => void;
};

const EventCard = ({ event, onEdit, onDelete }: Props) => {
  const past = isPast(new Date(event.date));
  const formattedDate = format(new Date(event.date), 'MMM dd, yyyy'); // Date only

  const iconColor = past ? '#d32f2f' : '#1976d2'; // red or blue

  return (
    <Card
      sx={{
        mb: 2,
        mt: 2,
        borderLeft: 6,
        borderColor: past ? 'error.main' : 'primary.main',
        bgcolor: past ? '#fbe9e7' : '#e3f2fd',
        boxShadow: 1,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.03)',
        },
        cursor: 'pointer',
      }}
      elevation={0}
    >
      
      <CardContent>
      
        {/* Title */}
        <Stack direction="row" alignItems="center" spacing={1} mb={1}>
          <Tag color={iconColor} size={18} />
          <Typography variant="h6" noWrap>
            {event.title}
          </Typography>
        </Stack>

        {/* Date */}
        <Stack direction="row" alignItems="center" spacing={1} mb={1} color="text.secondary">
          <Calendar color={iconColor} size={16} />
          <Typography variant="body2">{formattedDate}</Typography>
        </Stack>

        {/* Venue */}
        <Stack direction="row" alignItems="center" spacing={1} mb={1} color="text.secondary">
          <MapPin color={iconColor} size={16} />
          <Typography variant="body2" noWrap>
            {event.venue}
          </Typography>
        </Stack>

        {/* Description */}
        {event.description && (
          <Stack direction="row" alignItems="center" spacing={1} color="text.secondary" sx={{ mt: 1 }}>
            <FileText color={iconColor} size={16} />
            <Typography
              variant="body2"
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {event.description}
            </Typography>
          </Stack>
        )}

        {/* Buttons */}
        <Stack direction="row" spacing={2} mt={2}>
          <Button onClick={onEdit} variant="outlined" size="small">
            Edit
          </Button>
          <Button onClick={onDelete} variant="outlined" color="error" size="small">
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EventCard;
