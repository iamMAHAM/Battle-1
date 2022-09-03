// window.addEventListener('scroll', function() {
//     let  = document.querySelector('.partie1');
//     console.log("hgefcffhfhfh");
//     let windowPosition = window.pageYOffset > 130 ;
//     block.classList.toggle('partie1-active', windowPosition);            
// })






const block = document.querySelector('.partie1');

window.addEventListener('scroll', () => {
    console.log("azerty");
    if (window.scrollY >= 50) {
        block.classList.add('partie1-active');
    } else {
        block.classList.remove('partie1-active');
    }
})