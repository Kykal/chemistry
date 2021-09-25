import { Element } from "./src/chemistryConstructor";

const hydrogen = new Element( 'Hydrogen', 'H', 1, 'Gas', 1.0080, '1s1', '+1, -1', 2.3, 2.2, 120, 25, '31(5)', 13.598, 0.754, 13.81,-259.34,-434.81, 20.28, -252.87, -423.17, 0.00008988, 1766, 'Henry Cavendish', 'Non-metal', 1, 'IA', 'Non-metal' , 1 );
const helium = new Element( 'Helium', 'He', 2, 'Gas', 4.00260, '1s2', '0', 4.16, null, 140, null, 28, 24.587, 0, 0.95, -272.2, -458, 4.22, -268.93, -452.07, 0.0001785, 1868, 'Pierre-Jules-Cesar Janssen', 'Noble Gas', 18, 'VIIIA', 'Non-metal', 1  );


module.exports = {
   hydrogen,
   helium
}