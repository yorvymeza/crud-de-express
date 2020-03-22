const express= require('express');
const path= require('path');
const app=express();


const routes= require('./routes/index'); 
// setting

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleares

app.use('/',(req, res, next)=>{
      console.log(`${req.url}-${req.method}`);
      next();
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(routes);

// static file

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'),()=>{
	  console.log('Server on port',app.get('port'));
})