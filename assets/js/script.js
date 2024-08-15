console.log('hello');
const watchButton = document.querySelector('.js-btn');
console.log(watchButton);
watchButton.addEventListener('click', () =>{
    window.location.href = "./home.html";
})