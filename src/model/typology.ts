import {IconSvgObject} from '@hugeicons/angular';

export class Typology {
  icon: IconSvgObject;
  title: string;
  description: string;
  services: string[];
  imageUrl?: string;

  constructor(icon: IconSvgObject, title: string, description: string, services: string[], imageUrl?: string) {
    this.icon = icon;
    this.title = title;
    this.description = description;
    this.services = services;
    this.imageUrl = imageUrl;
  }
}
