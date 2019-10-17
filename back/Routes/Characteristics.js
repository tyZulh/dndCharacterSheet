const express = require('express')
const fs = require('fs')

const router = express.Router()

const path = '/home/tyzulh/Project/Sites/dndCharcterSheet/dnd-character-sheet/back/Routes/characterSheet.json'

router.get('/', (req, res, err) => {
  fs.readFile(path, (err, data) => {
    if(err){
      throw err
    }
    let characterSheet = JSON.parse(data)
    res.status(200).send(characterSheet)
  })
})

router.get('/:name', (req, res, err) => {
  const char = req.params.name

  fs.readFile(path, (err, data) => {
    if(err){
      throw err 
    } 
    let characterSheet = JSON.parse(data)
    
    characterSheet.characteristics.map(item => {
      if(item.name === char) {
        res.send(item)
      }
    })
  })
})

router.post('/:name', (req, res, err) => {
  const char = req.params.name
  charac = req.body
  charac.totalValue = Number(charac.initialValue) + Number(charac.alterationBonus) + Number(charac.variousBonus) - Number(charac.variousMalus)
  charac.modificator  = Math.floor(( charac.totalValue - 10 ) / 2)
  console.log(charac);
  
  fs.readFile(path, (err, data) => {
    if(err){
      throw err 
    } 
    let characterSheet = JSON.parse(data)
    const characteristics = characterSheet.characteristics.find(item => {
      if (item.name === char) {   
        return item
      }
    })
    const index = characterSheet.characteristics.indexOf(characteristics)
    characterSheet.characteristics[index] = charac
    const characteristicsToSend = JSON.stringify(characterSheet, null, 2);
    fs.writeFile(path, characteristicsToSend, (err) => {
      if(err) {
        throw err
      } else {
        res.status(200).send(JSON.parse(characteristicsToSend))
      }
    })
  }) 
})

router.get('/modifier/:name',  (req, res, err) => {
  const char = req.params.name

  fs.readFile(path, (err, data) => {
    if(err){
      throw err 
    }
    let characterSheet = JSON.parse(data)  
    characterSheet.characteristics.map(item => {
      if(item.name === char) {
        res.status(200).json(item.modificator)
      }
    })
  })
})

module.exports = router