const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message : "GET ALL"})
})

router.post('/', (req, res) => {
    res.json({ message : "POST ONE"})
})

router.get('/:id', (req, res) => {
    res.json({ message : "GET ONE"})
})

router.delete('/:id', (req, res) => {
    res.json({ message : "DELETE ONE"})
})

router.patch('/:id', (req, res) => {
    res.json({ message : "UPDATE ONE"})
})

module.exports = router