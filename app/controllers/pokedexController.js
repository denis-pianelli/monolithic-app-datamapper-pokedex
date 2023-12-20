const dataMapper = require('../models/dataMapper');

const pokedexController = {
  async showDetailPage(req, res) {
    const pokemonId = res.id;

    const pokemon = await dataMapper.getOnePokemon(pokemonId);

    if (!pokemon) {
      res.render('404');
    }
    res.render('detail', { pokemon });
  },
};

module.exports = pokedexController;
