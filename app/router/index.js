const router = require('express').Router();
const mainController = require('../controllers/mainController.js');
const pokedexController = require('../controllers/pokedexController.js');
const searchController = require('../controllers/searchController.js');
const checkId = require('../../middlewares/checkId.js')
const { catchErrors } = require('../../middlewares/errorHandlers');

router.get('/', catchErrors(mainController.showHomePage));
router.get('/detail/:id', checkId, catchErrors(pokedexController.showDetailPage))
router.get('/search/:searchElement', catchErrors(searchController.showSearchResult))

module.exports = router;