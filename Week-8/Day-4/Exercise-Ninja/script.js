const gifContainer = document.querySelector('.gifs-container')
const UserInputForGif = document.querySelector('#user-search-result')
// console.log(UserInputForGif.value);

xhr = new XMLHttpRequest()

function createGif() {
    
    let UserInputForGifValue = UserInputForGif.value

    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?&q=${UserInputForGifValue}&rating=g&api_key=2Ub97pyuzJC53mHFJ8ckxVS1FtGwYbMw&limit=25`)
    
    xhr.responseType = 'json'

    xhr.send()

    xhr.onload = function(){
        gifContainer.innerHTML = ''
        
        let objectLength = xhr.response.data.length
        for (let index = 0; index < objectLength ; index++) {
            
            let objectResponseImage = xhr.response.data[index].images.original
            
            let gifImage = document.createElement('img')
            gifImage.src = objectResponseImage.url
            gifImage.classList.add('gif')

            gifContainer.append(gifImage)


        }
        
    }


}

// createGif()