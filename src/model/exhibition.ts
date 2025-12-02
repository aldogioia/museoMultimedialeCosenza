export class Exhibition {
  titles: string[];
  subtitle: string | null;
  year: number;
  opening: string | null;
  closing: string | null;
  duration: string;
  period: string;
  description: string;
  imageUrl: string;
  reservationLink: string | null;

  constructor(
    titles: string[],
    subtitle: string | null,
    year: number,
    opening: string | null,
    closing: string | null,
    duration: string,
    period: string,
    description: string,
    imageUrl: string,
    reservationLink: string | null,
  ) {
    this.titles = titles;
    this.subtitle = subtitle;
    this.year = year;
    this.opening = opening;
    this.closing = closing;
    this.duration = duration;
    this.period = period;
    this.description = description;
    this.imageUrl = imageUrl;
    this.reservationLink = reservationLink;
  }
}
