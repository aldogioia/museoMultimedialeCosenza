export class PastExhibitionDto {
  image: string;
  title: string;
  date: Date;
  important: boolean;

  constructor(image: string, title: string, date: Date, important: boolean = false) {
    this.image = image;
    this.title = title;
    this.date = date
    this.important = important;
  }
}
