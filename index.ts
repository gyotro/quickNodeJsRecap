// npx tsc --init --> para crear el tsconfig
// npm run-script build 
// em el package json colocado este codigo en scripts "build": "tsc"
import express from "express";
import app  from "./app";
import './database'

// const port:number = 3000
app.listen( app.get( 'port' ), () => { console.log(`Listening on port ${app.get( 'port' )}`) } )
