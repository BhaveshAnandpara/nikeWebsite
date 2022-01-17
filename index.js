const element = document.querySelector(".hor-scroll");
const slider = document.querySelector(".slider");

let height = window.innerHeight;

function scrollToCTA(){

    window.scrollTo(0, height);

}


element.addEventListener('wheel', (event) => {
  event.preventDefault();
  
  element.scrollBy({
    left: event.deltaY < 0 ? -100 : 100,
});
    if( element.scrollLeft === 0 ){

        window.scrollTo(0, 1100);

    }


});
