const express = require('express');
const app = express();
const PORT = 8080;
// app.use applies middleware, json middleware parses json before every callback
app.use( express.json() )
// get - read, post - create, put - update, delete - ...
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

// uri endpoint is '/tshirt'
// request - incoming data, response - outgoing data, send back to client
// callback function as 2nd argument
// when user visits endpoint, handler runs function
app.get('/tshirt', (req, res) => {
    res.status(200).send({ // 200 status everything okay, 400 user error, 500, server error
        tshirt: 'striped',
        size: 'large'
    })
})
// dynamic param is id
// get id from url, value is available from req.params object
app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) { // if no logo in body send error message
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({ // if logo is found return 
        tshirt: `striped with you ${logo} and ID of ${id}`,
    })
})