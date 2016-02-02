var express    =    require('express');
var app        =    express();

app.use(express.static(__dirname + '/ui')); 
//app.use(express.static(__dirname + '/teste'));                 // set the static files location /public/img will be /img for users

var server     =    app.listen(3000,function(){
    console.log("We have started our server on port 3000  emberjs!");
});
// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendfile('./ui/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});