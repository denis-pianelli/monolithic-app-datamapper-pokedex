const dataMapper = require('../models/dataMapper');

const mainController = {
  async showHomePage(req, res) {
    const pokemonList = await dataMapper.getPokemonList();

    res.render('home', { pokemonList });
  },
};

module.exports = mainController;
