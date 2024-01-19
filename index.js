const express = require('express')
const dataTest = require("./data")

// creating express object
const app = express()

// creating router object
// los router se pueden crear en otros ficheros js separados y luego se importan en el file que crea el app 
const routerCities = express.Router()

// adding middleware to the router
routerCities.use(express.json())

// ligamos el router con el path
app.use('/api/cities', routerCities)

// Routing
app.get('/', (req, res) => {
  res.send('Servidor Arrancado!')
})

// con :name capturamos directamente la parte del URL despues de /cities/ y la colocamos en la variable name (el nombre podía ser cualquiera) 
// se pueden utilizar mas parametros de busqueda /:nameCity/:country 
// para tomar los query parameters la sintaxis es: req.query.<nombre_parametro>
routerCities.get('/:nameCity', (req, res) => {
  const nameCity = req.params.nameCity
  const resultados = dataTest.cities.filter((city) => city.name === nameCity)

  if (resultados.length == 0) {
    return res.status(404).send(JSON.stringify({ "message": 'No city found!!' }))
  }

  return res.status(200).send(JSON.stringify(resultados))

})

routerCities.get('/', (req, res) => {
  res.send(dataTest.cities)
})

routerCities.post('/', (req, res) => {
  let newCity = req.body
  dataTest.cities.push(newCity)
  return res.send(JSON.stringify(dataTest.cities))
})

routerCities.put('/:id', (req, res) => {
  const cityId = req.params.id
  let { name, country, population } = req.body
  const index = dataTest.cities.findIndex(city => city.id == cityId)
  if (index < 0) {
    return res.status(404).end()
  }
  let oldCity = dataTest.cities[index]
/*   dataTest.cities[index].name = name || oldCity.name
  dataTest.cities[index].country = country || oldCity.country
  dataTest.cities[index].population = population || oldCity.population */

  // la misma operacion la podemos pbtener con esta linea de codigo
  Object.assign(oldCity, req.body)

  //return res.send(JSON.stringify(dataTest.cities[index]))
  // con json() es como si hicieramos send(JSOIN.stringfy(...))
  return res.json(oldCity)
})

routerCities.delete('/:id', (req, res) => {
  const cityId = req.params.id
  const index = dataTest.cities.findIndex(city => city.id == cityId)
  if (index < 0) {
    // con .end() se envia una respuesta vacia
    return res.status(404).end()
  }
  dataTest.cities.splice(index)
  return res.status(200).end()
})


app.get('/api/emp', (req, res) => {
  res.send(dataTest.employee)
})

const PUERTO = process.env.port || 3000

app.listen(PUERTO, () => {
  console.log(`Incomping Request on port ${PUERTO}`)
})
