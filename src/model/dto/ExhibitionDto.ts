export class ExhibitionDto {
  image: string;
  video: string;
  name: string;
  description: string;
  month: string;
  startDate?: Date;
  endDate?: Date;
  time?: string;

  constructor(image: string, name: string, description: string, month?: string, startDate?: Date, endDate?: Date, time?: string, video?: string) {
    this.image = image;
    this.video = video || '';
    this.name = name;
    this.description = description;
    this.month = month || '';
    this.startDate = startDate;
    this.endDate = endDate;
    this.time = time || '';
  }
}
