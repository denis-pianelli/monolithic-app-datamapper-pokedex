const dataMapper = require('../models/dataMapper');

const searchController = {
  async showSearchResult(req, res) {
		const searchString = req.query.name;

    const pokemonList = await dataMapper.getSearchResult(searchString);

    res.render('home', { pokemonList });
  },
};

module.exports = searchController;
