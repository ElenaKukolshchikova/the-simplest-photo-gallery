const basicImage = document.querySelector('.rus-ht');
const imagesBar = document.querySelector('.img_bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for(let i = 1; i <= 10; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/ht-${i}.jpg`);
    imagesBar.appendChild(newImage);

    newImage.onclick = function(e) {
        basicImage.src = e.target.src
    }
}