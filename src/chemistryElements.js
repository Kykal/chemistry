import { element } from "./chemistryConstructor";

const hydrogen = new element( 'gas', 1.0080, '1s1', '+1, -1', 2.2, 13.598, 0.754, 13.81, 20.28, 0.00008988, 1766 );
const helium = new element( 'noble gas', 4.00260, '1s2', 0, null, 140, 24.587, null, 0.95, 4.22, 0.0001785, 1868 )

const elements = [
   hydrogen,
   helium
];

module.exports = { elements };