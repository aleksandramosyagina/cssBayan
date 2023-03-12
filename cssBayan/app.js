const btn = document.getElementById("first_block");
const x_element = document.getElementById('x_element');
const plus_element = document.getElementById('plus_element');

btn.onclick = function() {
    let element = document.getElementById("first_image");
    element.classList.toggle("main__image_hidden");
    x_element.classList.toggle("main__image_x");
    plus_element.classList.toggle("main__image_plus_hidden");
}

let btn2 = document.getElementsByClassName('main__block');
console.dir(btn2);
let images2 = document.querySelectorAll('.main__image_hidden');
console.dir(images2);
for (let i = 0; i < btn2.length; i++) {
    let elem = btn2[i+1];
    console.log(elem);
    elem.addEventListener("click", function() {
        images2[i].classList.toggle('main__image_hidden');
    })
}