const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { response } = require('express')


const app = express()

//Define paths fo Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: ' Esteban Gonzalez'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Esteban Gonzalez'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        content: 'Submit your questions here',
        name: 'Esteban Gonzalez'
    })
})

app.get('/weather',(req, res) => {
    res.send({
        location: 'bahamas',
        weather: 'tropical sunny'
    })
})


// app.com
//app.com/help
//app.com/about

app.get('/help/*',(req, res) =>{
    res.render('404',
    {
        title: '404',
        name: 'Esteban Gonzalez',
        errorMessage: 'Help article not found',

    })
})

app.get('*',(req, res) =>{
    res.render('404',
    {
        title: '404',
        name: 'Esteban Gonzalez',
        errorMessage: 'Page not found',

    })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})
