export const findHero = (heroes, id) => {
  return !!heroes.find((h) => {
    return h.id == id;
  });
};
