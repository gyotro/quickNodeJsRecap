const express = require('express')
const { dataTest } = require("./data")

// creating express object
const app = express()

// Routing
app.get( '/', ( req, res ) => {
    res.send( 'Servidor Arrancado!' )
} )

// con :name capturamos directamente la parte del URL despues de /cities/ y la colocamos en la variable name (el nombre podía ser cualquiera) 
// se pueden utilizar mas parametros de busqueda /:nameCity/:country 
app.get( '/api/cities/:nameCity', ( req, res ) => {
    const nameCity = req.params.nameCity
    const resultados = dataTest.cities.filter( (city) => city.name === nameCity )

    if(resultados.length == 0) {
        res.status(404).send(JSON.stringify({"message":'No city found!!'}))
    }

    res.status(200).send(JSON.stringify(resultados))

} )

app.get( '/api/cities', ( req, res ) => {
    res.send( dataTest.cities )
} )


app.get( '/api/emp', ( req, res ) => {
    res.send( dataTest.employee )
} )

const PUERTO = process.env.port || 3000

app.listen(PUERTO, () => {
    console.log(`Incomping Request on port ${PUERTO}`)
} )
