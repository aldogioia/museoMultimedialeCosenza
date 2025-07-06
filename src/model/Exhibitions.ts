
class Exhibitions {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;

  constructor(id: string, imageUrl: string, name: string, description: string, startDate: Date, endDate: Date, location: string) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
  }
}
