//Constructor
class Element {
   constructor( name, symbol, atomic_number, standard_state, atomic_mass, electron_configuration, oxidation_states, allen_scale, pauling_scale, van_der_waals, empirical, covalent, ionization_energy, electron_affinity, mk, mc, mf, bk, bc, bf, density, year_discovered, discovered_by, chemical_group_block, chemical_groupA, chemical_groupB, classification, period ){
      this.name = name;
      this.symbol = symbol;
      this.atomic_number = atomic_number;
      this.standard_state = standard_state;
      this.atomic_mass = atomic_mass;
      this.electron_configuration = electron_configuration;
      this.oxidation_states = oxidation_states;
      this.electronegativity = {
         pauling_scale: pauling_scale,
         allen_scale: allen_scale
      };
      this.atomic_radius = {
         van_der_waals: van_der_waals,
         empirical: empirical,
         covalent: covalent
      };
      this.ionization_energy = ionization_energy;
      this.electron_affinity = electron_affinity;
      this.melting_point = {
         kelvin: mk,
         celsius: mc,
         fahrenheit: mf
      };
      this.boiling_point = {
         kelvin: bk,
         celsius: bc,
         fahrenheit: bf
      };
      this.density = density;
      this.discovered = {
         by: discovered_by,
         year: year_discovered
      };
      this.period = period;
      this.group = {
         block: chemical_group_block,
         group_A: chemical_groupA,
         group_B: chemical_groupB,
         classification: classification
      };
   }
};

//Chemical elements
const hydrogen = new Element( 'Hydrogen', 'H', 1, 'Gas', 1.0080, '1s1', '+1, -1', 2.3, 2.2, 120, 25, '31(5)', 13.598, 0.754, 13.81,-259.34,-434.81, 20.28, -252.87, -423.17, 0.00008988, 1766, 'Henry Cavendish', 'Non-metal', 1, 'IA', 'Non-metal' , 1 );
const helium = new Element( 'Helium', 'He', 2, 'Gas', 4.00260, '1s2', '0', 4.16, null, 140, null, 28, 24.587, 0, 0.95, -272.2, -458, 4.22, -268.93, -452.07, 0.0001785, 1868, 'Pierre-Jules-Cesar Janssen', 'Noble Gas', 18, 'VIIIA', 'Non-metal', 1  );

//All elements in array according to its atomic number
const elements = [
   null,
   hydrogen,
   helium
]

module.exports = {
   elements,
   hydrogen,
   helium,
}