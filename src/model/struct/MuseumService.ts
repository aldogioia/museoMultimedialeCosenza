export class MuseumService {
  image: string;
  title: string;
  description: string;
  altText: string;

  constructor(image: string, title: string, description: string, altText: string) {
    this.altText = altText;
    this.image = image;
    this.title = title;
    this.description = description
  }
}
