export const pokemonType = (data) => {
  const typeName = [];
  data.forEach((element) => {
    element.type.forEach((singleType) => {
      !typeName.includes(singleType.type.name) && //si typeName no incluye singleType, lo añadimmos
        typeName.push(singleType.type.name);
    });
  });

  return typeName;
};
