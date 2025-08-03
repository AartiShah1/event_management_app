import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { EventType } from '../types';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  onSubmit: (event: EventType) => void;
  existingEvents: EventType[];
  editEvent: EventType | null;
  cancelEdit: () => void;
};

type FormData = {
  id?: string;
  title: string;
  date: string;
  venue: string;
  description?: string;
};

const EventForm = ({ onSubmit, existingEvents, editEvent, cancelEdit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      id: '',
      title: '',
      date: '',
      venue: '',
      description: '',
    },
  });

useEffect(() => {
  if (editEvent) {
    reset({
      id: editEvent.id,
      title: editEvent.title,
      date: editEvent.date,
      venue: editEvent.venue,
      description: editEvent.description || '',
    });
  } else {
    reset({
      id: '',
      title: '',
      date: '',
      venue: '',
      description: '',
    });
  }
}, [editEvent, reset]);


  const onFormSubmit = (data: FormData) => {
    // Check for duplicate event (same date and venue)
    const conflict = existingEvents.find(
      (event) =>
        event.id !== data.id &&
        event.date === data.date &&
        event.venue.trim().toLowerCase() === data.venue.trim().toLowerCase()
    );

    if (conflict) {
      alert('Another event is already scheduled at this venue on this date.');
      return;
    }

    const eventToSubmit: EventType = {
      id: data.id || uuidv4(),
      title: data.title.trim(),
      date: data.date,
      venue: data.venue.trim(),
      description: data.description?.trim() || '',
    };

    onSubmit(eventToSubmit);
    reset();
  };

  return (
   <form
  onSubmit={handleSubmit(onFormSubmit)}
  className="bg-white p-6 rounded-2xl shadow-lg space-y-6 transition-all duration-300 hover:shadow-xl"
>

      <h2 className="text-xl font-semibold text-purple-800">
        {editEvent ? 'Update Event' : 'Create New Event'}
      </h2>

      {/* Title */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          {...register('title', {
            required: 'Event title is required',
            minLength: { value: 3, message: 'Title must be at least 3 characters' },
          })}
          type="text"
          placeholder="Enter event title"
          className={`w-full px-4 py-2 border rounded-md transition focus:outline-none focus:ring-2 focus:ring-purple-300 ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      {/* Date */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Date <span className="text-red-500">*</span>
        </label>
        <input
          {...register('date', { required: 'Event date is required' })}
          type="date"
          className={`w-full px-4 py-2 border rounded-md transition focus:outline-none focus:ring-2 focus:ring-purple-300 ${
            errors.date ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
      </div>

      {/* Venue */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Venue <span className="text-red-500">*</span>
        </label>
        <input
          {...register('venue', {
            required: 'Venue is required',
            minLength: { value: 3, message: 'Venue must be at least 3 characters' },
          })}
          type="text"
          placeholder="Enter venue"
          className={`w-full px-4 py-2 border rounded-md transition focus:outline-none focus:ring-2 focus:ring-purple-300 ${
            errors.venue ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.venue && <p className="text-red-500 text-sm mt-1">{errors.venue.message}</p>}
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">Description</label>
        <textarea
          {...register('description')}
          rows={3}
          placeholder="Add event description (optional)"
          className="w-full px-4 py-2 border border-gray-300 rounded-md transition focus:outline-none focus:ring-2 focus:ring-purple-200"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-purple-800 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition"
        >
          {editEvent ? 'Update Event' : 'Create Event'}
        </button>
        {editEvent && (
          <button
            type="button"
            onClick={() => {
              cancelEdit();
              reset();
            }}
            className="bg-gray-400 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default EventForm;
