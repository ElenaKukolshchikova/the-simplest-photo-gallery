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

btn.onclick = function(){
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Светлее';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Темнее';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}