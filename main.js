const express = require('express');
const fs = require('fs');
const axios = require('axios');
const dotenv = require('dotenv').config()
const pensador = require("pensador");
const Jimp = require('jimp');

const app = express();

app.listen(process.env.PORTA);

app.get('/test', (req, res) => {

    const download_image = (url, image_path) =>
    axios({
        url,
        responseType: 'stream',
    }).then(
        response =>
        new Promise((resolve, reject) => {
            response.data
            .pipe(fs.createWriteStream(image_path))
            .on('finish', () => resolve())
            .on('error', e => reject(e));
        }),
    );

    ;(async () => {
        try // 001-baixarImage
        {
            let example_image_1 = await download_image('https://picsum.photos/1200/675/?blur=2', 'to_post.jpg');
            //res.sendFile('to_post.jpg', {root: __dirname});
            
            try // 002-baixarTexto
            {
                var frase
                pensador.getFromMotivacionais().then(result => {
                    frase+=result;
                    //res.send(result);
                });
                res.send(frase)
            }
            catch(err) {res.send("erro 002-baixarTexto"); console.log("erro 002-baixarTexto")}
        }
        catch(err) {res.send("erro 001-baixarImage"); console.log("erro 001-baixarImage")}
    })()
});