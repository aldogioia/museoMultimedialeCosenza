import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {Exhibition} from '../../model/exhibition';

@Injectable({ providedIn: 'root' })
export class DataService {

  private allData = new BehaviorSubject<Exhibition[]>([
    // --- CURRENT ---
    {
      titles: ["MESOZOICO"],
      subtitle: "Il respiro dei dinosauri",
      year: 2026,
      opening: "Aprile 2026",
      closing: "Settembre 2026",
      duration: "30 - 45 minuti",
      period: "Da Apr 2026",
      description: "Il Respiro dei Dinosauri arriva a Cosenza! Proiezioni a 360° e audio 3D ti immergono nel Mesozoico, riportando in vita i dinosauri. Un’esperienza educativa e spettacolare per tutta la famiglia. Preparati all'estinzione della noia!",
      trailerLink: "videos/Trailer.mov",
      imageUrl: "images/dinosauri.jpeg",
      nameLink: "Acquista biglietti",
      reservationLink: "https://www.diyticket.it/events/Arte/30018/mesozoico-il-respiro-dei-dinosauri-aprile-2026",
      status: 'current',
      timeSlots: [
        "Da Lun a Sab dalle 09:00 alle 12:00",
        "Domenica dalle 10:00 alle 12:00",
        "Tutti i giorni dalle 15:00 alle 19:00"
      ],
      notes: [
        "Gli orari restano validi anche nei giorni festivi",
        "Arrivare con un anticipo di almeno 15 minuti",
        "La mattina dal Lunedì al Venerdì è riservata per gruppi e scuole"
      ]
    },
    // --- UPCOMING ---

    // --- PAST ---
    {
      titles: ["Klimt"],
      subtitle: "L'incanto dorato",
      year: 2025,
      opening: "",
      closing: "",
      duration: "",
      period: "Set 2025 - Mar 2026",
      description: "Mostra multimediale immersiva dedicata a Gustav Klimt, che esplora la sua arte e il suo mondo interiore attraverso immagini, musica e suggestioni visive.",
      trailerLink: null,
      imageUrl: "https://museo-multimediale-cosenza.s3.eu-north-1.amazonaws.com/AD-mostra.jpeg",
      nameLink: null,
      reservationLink: null,
      status: 'past',
    },
    {
      titles: ["Christmas", "World Tour"],
      subtitle: "Il sogno di Renzo",
      year: 2025,
      opening: "",
      closing: "",
      duration: "",
      period: "Dic 2025 - Gen 2026",
      description: "Un viaggio magico attraverso le tradizioni natalizie di Cosenza e del Mondo, tramite proiezioni e atmosfere incantate per tutta la famiglia.",
      trailerLink: null,
      imageUrl: "images/christmas_world_tour.jpeg",
      nameLink: null,
      reservationLink: null,
      status: 'past'
    },
    {
      titles: ["Atlanthis"],
      subtitle: "La città sommersa",
      year: 2019,
      opening: "",
      closing: "",
      duration: "",
      period: "Giu - Set 2019",
      description: "Un viaggio emozionante nel mistero di Atlantide: tra installazioni multimediali e fisiche, la leggenda prende vita, coinvolgendo il pubblico in un’esperienza immersiva.",
      trailerLink: null,
      imageUrl: "images/atlanthis.jpg",
      nameLink: null,
      reservationLink: null,
      status: 'past'
    },
    {
      titles: ["Leonardo Da Vinci"],
      subtitle: null,
      year: 2019,
      opening: null,
      closing: null,
      duration: "",
      period: "Gen - Apr 2019",
      description: "Celebrazione della vita e delle invenzioni di Leonardo da Vinci attraverso un percorso di apprendimento innovativo con proiezioni e ambientazioni interattive.",
      trailerLink: null,
      imageUrl: "images/leonardo.jpg",
      nameLink: null,
      reservationLink: null,
      status: 'past'
    },
    {
      titles: ["Van Gogh Alive"],
      subtitle: "The experience",
      year: 2018,
      opening: null,
      closing: null,
      duration: "",
      period: "Set - Nov 2018",
      description: "Un’esperienza immersiva nei capolavori di Van Gogh: proiezioni, musiche e scenografie coinvolgenti rivelano la forza emotiva del suo linguaggio pittorico.",
      trailerLink: null,
      imageUrl: "images/vangogh.jpg",
      nameLink: null,
      reservationLink: null,
      status: 'past'
    },
    {
      titles: ["Nome in codice Sira"],
      subtitle: "Missione Alarico",
      year: 2018,
      opening: null,
      closing: null,
      duration: "",
      period: "Giu - Ago 2018",
      description: "Un viaggio spaziale e narrativo tra passato e presente che unisce archeologia, storia e tecnologia per svelare il mistero della Menorah e la figura di Alarico.",
      trailerLink: null,
      imageUrl: "images/sira.jpg",
      nameLink: null,
      reservationLink: null,
      status: 'past'
    }
  ]);

  constructor() {}

  getExhibitionsByStatus(status: 'current' | 'upcoming' | 'past'): Observable<Exhibition[]> {
    return this.allData.asObservable().pipe(
      map(data => data.filter(e => e.status === status))
    );
  }

  getTicketableExhibitions(): Observable<Exhibition[]> {
    return this.allData.asObservable().pipe(
      map(data => data.filter(e => e.timeSlots && e.timeSlots.length > 0))
    );
  }

  getAllExhibitions(): Observable<Exhibition[]> {
    return this.allData.asObservable();
  }
}
