const request = require('request');

const imageUrl = () => {

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
            return images
        }
    });    
}



module.exports = imageUrl;
