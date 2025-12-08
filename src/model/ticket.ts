export class Ticket {
  title: string;
  subtitle: string | null;
  description: string;
  times: string[];
  exceptions: string[];
  ticketsUrl: string | null;

  constructor(title: string, subtitle: string | null, description: string, times: string[], exceptions: string[], ticketsUrl: string | null) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.times = times;
    this.exceptions = exceptions;
    this.ticketsUrl = ticketsUrl;
  }
}
