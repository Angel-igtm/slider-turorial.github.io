
let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');
let images = document.querySelectorAll('#gallery .photos img');
let i = 0;
console.log(images);
btn_prev.onclick = function (){
    images[i].className = '';
    i--
    if(i <= 0) {
        i = images.length - 1
        // alert('It\'s first')
        // return 
    }
    images[i].className = 'showed';
    // console.log(i)
}
btn_next.onclick = function (){
    images[i].className = '';
    i++
    if(i >= images.length) {
        i = 0
        // alert('That\'s All')
        // return
    }
    images[i].className = 'showed';
    console.log(i)
}
