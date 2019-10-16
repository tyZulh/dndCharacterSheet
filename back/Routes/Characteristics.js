const express = require('express')
const fs = require('fs')

const router = express.Router()

const path = '/home/tyzulh/Project/Sites/dndCharcterSheet/dnd-character-sheet/back/Routes/characterSheet.json'

router.get('/', (req, res) => {
  res.status(200).send('Stay a while and listen, boy.')
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
        console.log(item);
        
        res.send(item)
      }
    })
  })
})

router.post('/:name', (req, res, err) => {
  const char = req.params.name
  charac = req.body
  console.log(charac);
  
  fs.readFile(path, (err, data) => {
    console.log('data', charac);
    
    if(err){
      throw err 
    } 
    let characterSheet = JSON.parse(data)
    console.log('characterSheet', characterSheet);
    

    const characteristics = characterSheet.characteristics.find(item => {
      console.log('char', char);
      
      if (item.name === char) {
        console.log('item', item);
        
        return item
      }
    })
    console.log('characteristics', characteristics);
    
    
    
    const index = characterSheet.characteristics.indexOf(characteristics)
    console.log(index);
    

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

module.exports = router