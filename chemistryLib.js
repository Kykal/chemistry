class element {
   constructor(atomic_number, name, protons, neutrons, electrons, atomic_mass, electronegativity, density, melting_point, boiling_point,  ){
      this.atomic_number = atomic_number;
      this.name = name;
      this.protons = protons;
      this.neutrons = neutrons;
      this.electrons = electrons;
      this.atomic_mass = atomic_mass;
      this.electronegativity = electronegativity;
      this.density = density;
      this.melting_point = melting_point;
      this.boiling_point = boiling_point;
   }
};

module.exports.element = element