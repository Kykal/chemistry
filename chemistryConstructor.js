class element {
   constructor( state, atomic_mass, electron_configuration, oxidation_states, electronegativity, atomic_radius, ionization_energy, electron_affinity, melting_point, boiling_point, density, year_discovered ){
   
      this.state = state;
      this.atomic_mass = atomic_mass;
      this.electron_configuration = electron_configuration;
      this.oxidation_states = oxidation_states;
      this.electronegativity = electronegativity;
      this.atomic_radius = atomic_radius;
      this.ionization_energy = ionization_energy;
      this.electron_affinity = electron_affinity;
      this.melting_point = melting_point;
      this.boiling_point = boiling_point;
      this.density = density;
      this.year_discovered = year_discovered;
   
   }
};

module.exports.element = element