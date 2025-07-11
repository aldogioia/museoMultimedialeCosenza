export class ExhibitionDto {
  image: string;
  name: string;
  description: string;
  month: string;
  startDate?: Date;
  endDate?: Date;
  time?: string;
  location: string;

  constructor(image: string, name: string, description: string, month: string, location: string, startDate?: Date, endDate?: Date, time?: string) {
    this.image = image;
    this.name = name;
    this.description = description;
    this.month = month;
    this.startDate = startDate;
    this.endDate = endDate;
    this.time = time || '';
    this.location = location || '';
  }
}
