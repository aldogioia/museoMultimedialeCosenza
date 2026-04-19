export interface Exhibition {
  id?: string;
  titles: string[];
  subtitle?: string | null;
  year: number;
  opening?: string | null;
  closing?: string | null;
  duration: string;
  period: string;
  description: string;
  trailerLink?: string | null;
  imageUrl: string;
  nameLink?: string | null;
  reservationLink?: string | null;
  status: 'current' | 'upcoming' | 'past';
  timeSlots?: string[];
  notes?: string[];
}
