var express = require('express');
var router = express.Router();
const pool = require('../db/dbConfig');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/contactList',(request, response) => {

  pool
  .query('SELECT sfid, name FROM salesforce.Contact')
  .then((contactQueryResult) => {
  console.log('contactQueryResult : '+JSON.stringify(contactQueryResult.rows));
  response.send(contactQueryResult.rows);
  })
  .catch((contactQueryError)=>{
  response.send(contactQueryError);
  })
  
  });


  router.post('/',(request, response) => {
      let body = request.body;
      console.log('body '+JSON.stringify(body));
    
    
  })


  router.get('/loginGet',(request, response) => {
    response.render('login.ejs');
  })


  router.post('/loginPost',(request, response) => {
    let body = request.body;
    console.log('Your Response body is :    '+JSON.stringify(body));

    response.send('Hello  '+body.name);
  })

  
module.exports = router;
