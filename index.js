// Please type in adress "http://localhost:3000/"+3 digit country ISO code

var express = require('express')
var fs= require('fs');
var app = express();

app.set('view engine','pug');
app.set('views','./my-views')




app.get('/:id',function(request,response){
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
  response.status(404).send('uh oh! page not found!')
})

app.listen(3000,function(){
  console.log('app is listening on port 3000');
})
