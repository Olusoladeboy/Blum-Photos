const express = require('express');
const app = express();
const path = require('path')
const request = require('request')
const ejs = require('ejs')
const imageUrl = require('./utils/images')

const publicDirectory = path.join(__dirname, './public')
const viewsDirectory = path.join(__dirname, './views')

app.set('view engine', 'ejs')
app.set('views', viewsDirectory)
app.use(express.static(publicDirectory))

// const images = imageUrl();


app.get('', (req, res) => {
    // if(images){
    //     res.render('index', {photo: images})
    // }
    const url = 'https://api.unsplash.com/photos/?client_id=efc707f996005bc6f2ff3244d8543094d8a32fbe472ebdb7fd23a4f7359add6c';

    request({url, json:true}, (error, { body } = {}) => {
        if (error){
            console.log(error.code)
            console.log('Please, Connect to the internet')
        } else {
            // console.log(response.body)
            const images = body;
            // images.forEach((data) => {
            //     return data.urls.raw
            // })
            res.render('index', {photo: images})
        }
    });
})



app.get('/images', (req, res) => {
    res.send(
        [
            {
                username: 'Olusola10000',
                link: 'localhost:2000/images'
            }
        ]
    )
})



// Server SetUp
app.listen(2000, (error) => {
    if(error){
        console.log(error)
    } else {
        console.log('Server has started on port 2000')
    }
})