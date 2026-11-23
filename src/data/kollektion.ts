import keyif from '../assets/images/kerze-n1-keyif.jpg';
import sefa from '../assets/images/kerze-n2-sefa.jpg';
import goenuel from '../assets/images/kerze-n3-goenuel.jpg';

/**
 * Die erste Kollektion.
 * Duftnoten bearbeiten: einfach das Feld `duftnoten` ändern.
 * Leer lassen ('') → auf der Seite erscheint „Duftnoten folgen“.
 * Neues Foto: Bild in src/assets/images ablegen und oben den Import anpassen.
 */
export const kollektion = [
  {
    nummer: 'N°1',
    name: 'Keyif',
    bedeutung: 'Genuss, das bewusste Wohlfühlen im Moment',
    zeile: 'Heute nichts müssen.',
    stimmung: 'Der Moment, den du dir gönnst: warm, würzig, golden.',
    duftnoten: 'Amber · Safran · Tonka · Zedernholz',
    glas: 'Bernsteinglas',
    topping: 'Safranfäden',
    farbe: '#A95530',
    ton: '#EAD7C4',
    bild: keyif,
    alt: 'Duftkerze N°1 Keyif im Bernsteinglas mit terrakottafarbenem Bogen-Etikett und Safranfäden auf dem Wachs',
  },
  {
    nummer: 'N°2',
    name: 'Sefa',
    bedeutung: 'Freude, Behaglichkeit, herzliches Willkommen',
    zeile: 'Leise glücklich.',
    stimmung: 'Leicht wie ein Frühlingsmorgen im Garten.',
    duftnoten: 'Pfingstrose · Bergamotte · weißer Moschus',
    glas: 'Milchglas',
    topping: 'getrocknete Rosenblätter',
    farbe: '#A35A4E',
    ton: '#EFDCD5',
    bild: sefa,
    alt: 'Duftkerze N°2 Sefa im Milchglas mit roséfarbenem Bogen-Etikett und getrockneten Rosenblättern',
  },
  {
    nummer: 'N°3',
    name: 'Gönül',
    bedeutung: 'Herz und Seele',
    zeile: 'Wo das Herz zuhause ist.',
    stimmung: 'Dunkel, samtig, ganz bei dir.',
    duftnoten: 'Oud · Damaszener Rose · Vanille · Leder',
    glas: 'Mattschwarzes Glas',
    topping: 'Rosenknospen & Goldflocken',
    farbe: '#1F2A3C',
    ton: '#DCD6CF',
    bild: goenuel,
    alt: 'Duftkerze N°3 Gönül im mattschwarzen Glas mit nachtblauem Etikett, Goldschrift, Rosenknospen und Goldflocken',
  },
];
