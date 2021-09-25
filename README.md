[<img align="right" alt="Node.JS" width="32px" src="https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png" />][NodeJS_Site]

[NodeJS_Site]: https://nodejs.org/en/about/

# What is this?
A library that contains all data from all elements in the periodic table.

# Units
- Atomic mass [unified atomic mass unit (`u`)]
- Atomic radius [picometre (`pm`)]
- Ionization energy & electron affinity [electronVolts (`eV`)]
- Density [grams per cubic centimeter (`g/cm3`) ]

# What info does it contain?
Every and each chemical element will have the next data:
```SSH
{
   name,
   symbol,
   atomic_number,
   standard_number,
   standard_state,
   atomic_mass,
   electron_configuration,
   oxidation_states,
   electronegativity: {
      pauling_scale,
      ,
      allen_scale
   },
   atomic_radius: {
      van_der_waals,
      empirical,
      ,
      covalent
   },
   ionization_energy,
   electron_affinity,
   melting_point: {
      kelvin,
      celsius,
      fahrenheit
   },
   boiling_point: {
      kelvin,
      celsius,
      fahrenheit
   },
   density,
   discovered: {
      by,
      year
   },
   period,
   group: {
      block,
      group_A,
      group_B,
      classification
   }
}
```

# References
All this information was gathered thanks to:
- National Center for Biotechnology Information (2021). PubChem Periodic Table of Elements. Retrieved August 16, 2021 from https://pubchem18.ncbi.nlm.nih.gov/periodic-table/.