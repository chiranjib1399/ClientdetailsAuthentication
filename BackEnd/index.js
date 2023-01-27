const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const clientdetailsRoutes = require('./routes/clientdetails');

const errorController = require('./controllers/error');
const marketingpaertnerRoutes = require('./routes/marketingpartners')
const clientbillingRoutes = require('./routes/clientbilling');
const Marketingpartner = require('./models/marketingpaertner');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req,res, next)=>{
res.setHeader('Access-Control-Allow-Origin' , '*');
res.setHeader('Access-Control-Allow-Methods' ,'GET,POST,PUT,DELETE');
res.setHeader('Access-Control-Allow-Headers' ,'Content-Type , Authorization');
if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
next();
});

app.use('/auth', authRoutes);
app.use('/clientdetails', clientdetailsRoutes);
app.use('/marketingpartner',marketingpaertnerRoutes);
app.use('/clientbill',clientbillingRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`Listening on port ${ports}`));