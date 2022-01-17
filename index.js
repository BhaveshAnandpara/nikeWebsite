const element = document.querySelector(".hor-scroll");
const slider = document.querySelector(".slider");

const section = document.getElementsByTagName("section")
const shoe = document.querySelector("#hero-shoe")

let height = window.innerHeight;

if(window.innerWidth < 480){
    
    shoeSize()
    
}

else{

    element.addEventListener('wheel', (event) => {
        event.preventDefault();
        
        element.scrollBy({
            left: event.deltaY < 0 ? -100 : 100,
        });
        if( element.scrollLeft === 0 ){
            
            window.scrollTo(0, 1100);
            
        }
        
        
    });

}

function scrollToCTA(){

    window.scrollTo(0, height);

}

function shoeSize(){
    
    shoe.style.transform = "scale(0.3) rotate(-22.93deg)"
    
}
