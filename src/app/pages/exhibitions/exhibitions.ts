import {Component} from '@angular/core';
import {ExhibitionDto} from '../../../model/dto/ExhibitionDto';

@Component({
  selector: 'app-exhibitions',
  standalone: false,
  templateUrl: './exhibitions.html',
  styleUrl: './exhibitions.css',
  host: { 'class' : 'main' }
})

export class Exhibitions {
  exhibitions: ExhibitionDto[] = [
    new ExhibitionDto(
      'images/klimt_copertina.jpeg',
      'Klimt: l\'incanto dorato',
      "Un viaggio sensoriale nell’universo dorato di Gustav Klimt: un’esperienza immersiva che trasporta il visitatore nel cuore dell’arte del maestro austriaco, tra luci, colori, musiche e suggestioni visive che danno nuova vita ai suoi capolavori più iconici. Un percorso esistenziale nell'anima tormanetata di un artista che sente su di sè forte la presenza del dolore, della morte, della malinconia che veste della luce aurea dei fasti della società Viennese dei primi del Novecento. La mostra multimediale apre allo spettatore il mondo di Klimt, attraverso le pulsanti immagini visionarie e coinvolgenti ed un ritmo incessante che colpisce il cuore e l'anima.",
      undefined,
      new Date("2025-09-26"),
      new Date("2026-03-31"),
      "Dal lunedì al venerdì dalle 09:00 alle 19:00.",
      'videos/Preview_Mostra.mp4'
    ),
    new ExhibitionDto(
      'images/pinocchio.jpg',
      'Il Natale di Pinocchio',
      "Un’inedita rivisitazione della celebre favola di Pinocchio, dove il confine tra realtà e immaginazione si dissolve. La mostra unisce scenografie fisiche, installazioni interattive e ambientazioni multimediali per accompagnare grandi e piccoli in un percorso emozionante attraverso il racconto senza tempo del burattino più famoso del mondo.",
      "Dicembre",
      new Date("2019-12-01"),
      new Date("2020-01-06"),
      "Dal lunedì al venerdì dalle 10:00 alle 20:00.\nSabato e domenica 10:00 alle 23:00."
    ),
    new ExhibitionDto(
      'images/atlanthis.jpg',
      'Atlanthis: La città sommersa',
      "Un viaggio emozionale nel cuore del mistero di Atlantide: tra suggestioni multimediali e installazioni fisiche, la leggenda della città sommersa prende vita, coinvolgendo il pubblico in un’esperienza immersiva che fonde mito, scienza e immaginazione.",
      "Giugno",
      new Date("2019-06-01"),
      new Date("2019-07-01"),
      "Dal lunedì al venerdì dalle 10:00 alle 20:00.\nSabato e domenica 10:00 alle 23:00."
    ),
    new ExhibitionDto(
      'images/leonardo.jpg',
      'Leonardo Da Vinci',
      "Un racconto coinvolgente che celebra la straordinaria vita e le geniali invenzioni di Leonardo da Vinci. Un percorso di apprendimento innovativo nel mondo del genio toscano, arricchito da proiezioni, modelli e ambientazioni interattive, che restituisce la grandezza di uno dei più grandi innovatori della storia.",
      "Marzo",
      new Date("2019-03-01"),
      new Date("2019-04-01"),
      "Dal lunedì al venerdì dalle 10:00 alle 20:00.\nSabato e domenica 10:00 alle 23:00."
    ),
    new ExhibitionDto(
      'images/natale.jpg',
      'La magia del Natale',
      "Un’esperienza immersiva nel cuore del Natale, dove luci, suoni, immagini e atmosfere fiabesche si fondono per evocare la magia delle festività. Un viaggio multisensoriale tra emozioni, ricordi e tradizioni che incanta visitatori di ogni età.",
      "Dicembre",
      new Date("2018-12-01"),
      new Date("2019-01-06"),
      "Dal lunedì al venerdì dalle 10:00 alle 20:00.\nSabato e domenica 10:00 alle 23:00."
    ),
    new ExhibitionDto(
      'images/vangogh.jpg',
      'Van Gogh alive',
      "Un’esplorazione immersiva nei capolavori di Vincent van Gogh: un’esperienza multisensoriale che accompagna il visitatore nei paesaggi dell’anima dell’artista olandese, attraverso proiezioni, musiche e scenografie coinvolgenti che rivelano la forza emotiva del suo linguaggio pittorico.",
      "Settembre",
      new Date("2018-09-01"),
      new Date("2018-11-01"),
      "Dal lunedì al venerdì dalle 10:00 alle 20:00.\nSabato e domenica 10:00 alle 23:00."
    ),
    new ExhibitionDto(
      'images/sira.jpg',
      'Nome in codice Sira: missione Alarico',
      "Un’avventura interattiva che mescola archeologia, storia e tecnologia, per raccontare il mistero della Menorah e la figura enigmatica di Alarico. Un viaggio spaziale e narrativo tra passato e presente, alla scoperta di uno dei simboli più affascinanti e leggendari dell’antichità.",
      "Giugno",
      new Date("2018-06-01"),
      new Date("2018-08-31"),
      "Dal lunedì al venerdì dalle 10:00 alle 20:00.\nSabato e domenica 10:00 alle 23:00."
    ),
  ];
}
