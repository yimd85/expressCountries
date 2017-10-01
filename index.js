// Please type in adress "http://localhost:3000/country"+3 digit country ISO code (needs to be in CAPS)

var express = require('express')
var fs= require('fs');
var app = express();

app.set('view engine','pug');
app.set('views','./my-views')




app.get('/country/:id',function(request,response){
  fs.readFile('./countries.json','utf-8',function(err,jsonFile){
    if(err){
      throw error;
    }
    var data = JSON.parse(jsonFile);
    var userId=request.params.id;
    var dataWTF = data[userId];
    response.render('list',data[userId])

  })
})

app.get('*',function(request,response){
  response.status(404).send('Please type in adress "localhost:3000/country/"+3 digit country ISO code (needs to be in CAPS)')
})

app.listen(3000,function(){
  console.log('app is listening on port 3000');
})
