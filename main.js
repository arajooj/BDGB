const express = require('express');
const dotenv = require('dotenv').config()

const app = express();

app.listen(process.env.PORTA);

app.get('/get_user_info/:name', (req, res) => {
    ;(async () => {
        try // testa se não...
        {
            
        }
        catch(err) { // pega o erro e trata
            
        }
    })()
});