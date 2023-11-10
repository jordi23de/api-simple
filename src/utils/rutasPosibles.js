const { Router } = require('express')

const routerhome = Router()

routerhome.get('/', async (req, res) => {
    res.sendFile(`${__dirname}/home.html`);
})

module.exports = routerhome;