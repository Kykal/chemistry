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

module.exports = { Element };