let myImage = document.getElementById('mainImage');
let myImage2 = document.getElementById('mainImage2');
let myImage3 = document.getElementById('mainImage3');
var arr = ["assets/images/bau.jpg","assets/images/ca.jpg","assets/images/cua.jpg","assets/images/ga.jpg","assets/images/nai.jpg","assets/images/tom.jpg"];
let change = document.getElementById('generate');

let changeImage;

function generateImages() {
    changeImage = setInterval(randomImage, 100)
}

function randomImage() {
    let randomMath = Math.floor(Math.random() * arr.length);
    let randomMath2 = Math.floor(Math.random() * arr.length);
    let randomMath3 = Math.floor(Math.random() * arr.length);
    myImage.setAttribute("src", arr[randomMath]);
    myImage2.setAttribute("src", arr[randomMath2]);
    myImage3.setAttribute("src", arr[randomMath3])
}

function stopGenerateImages() {
    clearInterval(changeImage);
}

change.addEventListener('mousedown', generateImages);
change.addEventListener('mouseup', stopGenerateImages);