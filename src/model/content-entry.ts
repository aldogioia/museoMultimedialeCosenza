export type ContentStatus = 'current' | 'upcoming' | 'past';
export type ContentKind = 'exhibition' | 'event';

export interface EventSession {
  date: string;
  times: string;
  sortDate: number;
}

export interface ContentEntry {
  id: string;
  kind: ContentKind;
  titles: string[];
  subtitle: string | null;
  startPeriod: string;
  firstEditionYear: number | null;
  eventSessions: EventSession[];
  description: string;
  trailerLink: string | null;
  imageUrl: string;
  nameLink: string;
  reservationLink: string | null;
  status: ContentStatus;
  featured: boolean;
  sortDate: number;
}

export interface OpeningHour {
  exhibitionId: string;
  exhibitionTitle: string;
  day: string;
  hours: string;
  note: string;
  order: number;
}

export interface SheetState<T> {
  data: T;
  loading: boolean;
  error: boolean;
}
