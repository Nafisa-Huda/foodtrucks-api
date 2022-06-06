const express = require('express') //requires express module
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const foodtrucks = {
    'mississippi': {
        'cuisine': 'AMERICAN',
        'name': 'One Guy Steak and Chicken'
    },
    'north Carolina': {
        'cuisine': 'AMERICAN (NEW)',
        'name': 'Papi Queso'
    },
    'vermont': {
        'cuisine': 'AMERICAN (TRADITIONAL)',
        'name': 'Beansies Bus'
    },
    'south carolina': {
        'cuisine': 'ASIAN FUSION',
        'name': 'Dashi'
    },
    'delaware': {
        'cuisine': 'BARBEQUE',
        'name': 'Russell\’s Quality Food'
    },
    'west virginia': {
        'cuisine': 'BARBEQUE',
        'name': 'Dem 2 Brothers And A Grill'
    },
    'alabama': {
        'cuisine': 'BURGERS',
        'name': 'Peppered Pig'
    },
    'arkansas': {
        'cuisine': 'MEXICAN',
        'name': 'cypress knee food in little rock' 
    },
    'kansas': {
        'cuisine': 'BURGERS',
        'name': 'The Flying Stove'
    },
    'new jersey': {
        'cuisine': 'BURGERS',
        'name': 'No Forks Given'
    },
    'washington': {
        'cuisine': 'BURGERS',
        'name': 'Burger Seoul'
    },
    'montana': {
        'cuisine': 'CAJUN/CREOLE',
        'name': 'Cajun Phatty\’s'
    },
    'rhode island': {
        'cuisine': 'CARIBBEAN/SPANISH',
        'name': 'Sazon Bandit'
    },
    'arizona': {
        'cuisine': 'CHICKEN SOUP',
        'name': 'Crazi\’s Hot Chicken'
    },
    'oregon': {
        'cuisine': 'CHINESE CREPES',
        'name': 'Bing Mi Food Truck'
    },
    'oklahoma': {
        'cuisine': 'COMFORT FOOD',
        'name': 'Waffle That'
    },
    'pennsylvania': {
        'cuisine': 'FALAFEL',
        'name': 'Octopus Falafel Truck'
    },
    'wyoming': {
        'cuisine': 'FILIPINO',
        'name': 'Nipa Hut'
    },
    'maryland': {
        'cuisine': 'HALAL',
        'name': 'Mediterranean Halal Food Cart'
    },
    'maine': {
        'cuisine': 'KOREAN',
        'name': 'Tacos Del Seoul'
    },
    'alaska': {
        'cuisine': 'LATIN AMERICAN',
        'name': 'Mochileros Street Food'
    },
    'colorado': {
        'cuisine': 'MEXICAN',
        'name': 'Tacos Navarro'
    },
    'connecticut': {
        'cuisine': 'MEXICAN',
        'name': 'Los Garcia Mexican Fusion'
    },
    'iowa': {
        'cuisine': 'MEXICAN',
        'name': 'Tacos Degollado'
    },
    'louisiana': {
        'cuisine': 'MEXICAN',
        'name': 'Rollin Fatties'
    },
    'michigan': {
        'cuisine': 'MEXICAN',
        'name': 'El Oasis'
    },    
    'minnesota': {
        'cuisine': 'MEXICAN',
        'name': 'Taqueria EI Sueno'
    },
    'nevada': {
        'cuisine': 'MEXICAN',
        'name': 'Daddy\’s Tacos NV'
    },
    'new york': {
        'cuisine': 'MEXICAN',
        'name': 'Neno\’s Gourmet Mexican Street Food'
    },
    'north dakota': {
        'cuisine': 'MEXICAN',
        'name': 'Taco Bros Food'
    },
    'ohio': {
        'cuisine': 'MEXICAN',
        'name': 'Tacos Locos'
    },
    'tennessee': {
        'cuisine': 'MEXICAN',
        'name': 'Taqueria Jalisco - ANIA'
    },
    'utah': {
        'cuisine': 'MEXICAN',
        'name': 'Taqueria El Rey De Oros'
    },
    'kentucky': {
        'cuisine': 'PIZZA',
        'name': 'Rolling Oven'
    },
    'missouri': {
        'cuisine': 'SANDWICHES',
        'name': 'Pigwich'
    },
    'illinois': {
        'cuisine': 'SEAFOOD',
        'name': 'The Happy Lobsterich'
    },
    'south dakota': {
        'cuisine': 'SOUTHERN',
        'name': 'Swamp Daddy\’s Cajun Kitchen'
    },
    'california': {
        'cuisine': 'TACOS',
        'name': 'Los California Tacos'
    },
    'florida': {
        'cuisine': 'TACOS',
        'name': 'Tacos Las Californias'
    },
    'hawaii': {
        'cuisine': 'TACOS',
        'name': 'La Birria Food Truck'
    },
    'idaho': {
        'cuisine': 'TACOS',
        'name': 'The Funky Taco'
    },
    'indiana': {
        'cuisine': 'TACOS',
        'name': 'The Famous Taco'
    },
    'new hampshire': {
        'cuisine': 'TACOS',
        'name': 'B\’s Tacos'
    },
    'new mexico': {
        'cuisine': 'TACOS',
        'name': 'Birrieria Y Tacos Alex Tijuana Style'
    },
    'texas': {
        'cuisine': 'TACOS',
        'name': 'The Famous Taco'
    },
    'georgia': {
        'cuisine': 'TEX-MEX',
        'name': 'Tex\’s Tacos'
    },
    'wisconsin': {
        'cuisine': 'THAI',
        'name': 'Fresh Cool Drinks'
    },
    'unknown' : {
        'poem': 'unknown',
        'author': "unknown"
    }

}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/css/style.css', (req,res)=>{
    res.sendFile(__dirname + '/css/style.css')
  })
  
  app.get('/js/main.js', (req,res)=>{
    res.sendFile(__dirname + '/js/main.js')
  })
  
  app.get('/foodtrucks', (req,res)=>{
    res.json(foodtrucks)
  })

app.get('/api/:state', (req, res)=>{
    const state = req.params.state.toLowerCase()
  
    if(foodtrucks[state]) { //if state(property name) is a property of the foodtrucks object, respond with that properties object (the one you passsed into the brackets).
        res.json(foodtrucks[state])
    } else {
        res.json(foodtrucks['unknown'])
    } //if whats passed in doesn't exist respond unknown
}) //name is just a parameter. The API will respond with whatever name is typed in if it is in the list of foodtrucks.

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
}) //if heroku doesn't use our hardcoded port they use there own port 
