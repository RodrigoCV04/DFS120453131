const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passportLocal = require('passport-local').Strategy;

const app = express();



app.use(express.urlencoded ({extended: true}));
app.use(cookieParser('Secreto'));

app.use(session({
    secret: 'Secreto',
    resave: true, //cada peticón que haga no debe modificarse
    saveUninitialized: true,
}));

//INICIALIZAR

app.use(passport.initialize());
//en caso de las sesiones
app.use(passport.session());

//AUTENTICAR

passport.use(
    new passportLocal(function(username, password, done){
        console.log(username);
        console.log(password);

        if(username === 'Rodrigo' && password === '12345'){
            console.log("contraseña correcta");

            return done(null,{id:'Rodrigo'});
        }
        else{
            done(null, false);
        }
    }));

    //SERIALIZAR

 passport.serializeUser(function(user, done){
        done(null,user.id);
 });

 passport.deserializeUser(function(user, done){
    done(null,{id:'Rodrigo'});
 });

//RUTAS
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("login.ejs"); 
});

    

 //VALIDAR CREDENCIALES
 app.get('/Login', function(req, res){
     res.render('login.ejs');
 });

    

 app.post('/Login',passport.authenticate('local',{
    successRedirect: '/Bienvenido',
     failureRedirect: '/Login',
 }));

    app.l

    app.get('/Bienvenido', function(req, res){
        res.render('bienvenida.ejs');
    });
    
    app.get("/resta", function(req, res){
        res.render("resta.ejs");
        });

    


  
 app.get('/Login', passport.authenticate('local',{
     successRedirect: '/Bienvenido',
     failureRedirect: '/Login',
 }));



app.listen(3000, ()=> console.log("Server started"));
 