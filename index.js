const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const { notFound, handleError } = require('./middlewares/errorHandlers');
const router = require('./app/router');

app.set('view engine', 'ejs');
app.set('views', './app/views/');


app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(notFound);
app.use(handleError);

app.set('PORT', process.env.PORT || 3000);
app.set('URL', process.env.BASE_URL || 'http://localhost');

app.listen(app.get('PORT'), () => {
	console.log(`Listening on ${app.get('URL')}:${app.get('PORT')}`);
});