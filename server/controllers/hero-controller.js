import { findHero } from "../services/hero-service.js";
import { heroes } from "../mocks/hero-mock.js";

let HEROES = heroes;

export const getHeroes = async (req, res) => {
  let name = req.query.name;
  let data = HEROES;

  if (name) {
    data = await data.filter((h) => h.name.includes(name));
  }

  res.json({ success: true, data: data });
};

export const getHero = async (req, res) => {
  let hero = await HEROES.find((h) => {
    return h.id == req.params.id;
  });

  if (hero) {
    res.json({ success: true, data: hero });
  } else {
    res.status(404).json({ success: false, message: "Hero not found" });
  }
};

export const updateHero = async (req, res) => {
  const hero = await HEROES.find((h) => {
    return h.id == req.params.id;
  });
  let { name } = req.body;

  if (hero) {
    hero.name = name;

    res.json({
      success: true,
      message: "Hero updated",
      data: hero,
    });
  } else {
    res.status(404).json({ success: false, message: "Hero not found" });
  }
};

export const deleteHero = (req, res) => {
  if (findHero(HEROES, req.params.id)) {
    HEROES = HEROES.filter((hero) => hero.id != req.params.id);

    return res.json({ success: true, message: "Hero deleted" });
  }
  return res.status(404).json({ success: false, message: "Hero not found" });
};

export const storeHero = async (req, res) => {
  let { name } = req.body;

  let newHero = {
    id: 21,
    name: name,
  };

  HEROES.push(newHero);

  res.json({
    success: true,
    message: "Hero created",
    data: newHero,
  });
  // res.status(404).json({ success: false, message: "Hero not found" });
};
