const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// pug
// app.set('view engine', 'pug');
// app.set('views', 'views');

// hbs
// app.engine('hbs', expressHbs())
// app.set('view engine', 'hbs');
// app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
