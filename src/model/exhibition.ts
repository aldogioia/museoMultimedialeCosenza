import { ContentEntry } from './content-entry';

export interface Exhibition extends ContentEntry {
  timeSlots?: string[];
  notes?: string[];
}
