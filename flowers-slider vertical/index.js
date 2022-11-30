const up = document.querySelector('.up-button');
const down = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

const i = mainSlide.querySelectorAll('div').length

let activeSlide = 0;

sidebar.style.top = `-${(i-1)*100}vh`
//_________________________mouse_________________________________
up.addEventListener('click',()=>{
    swap(down);
});
down.addEventListener('click',()=>{
    swap(up);
});
//_________________________keyboard______________________________

document.addEventListener('keydown',(event)=>{

    if(event.code == 'ArrowDown') {

        swap(up);
        down.classList.add('active');

    } else if (event.code == 'ArrowUp') {
        
        swap(down);
        up.classList.add('active');

    };
});

document.addEventListener('keyup',(event)=>{
    if(event.code == 'ArrowDown') {down.classList.remove('active')
    } else if (event.code == 'ArrowUp') {up.classList.remove('active')};
});


function swap(swap){
    if(swap === up) {
        activeSlide++;
        if(activeSlide >= i){
            activeSlide = i-1;
        }
    } else if(swap === down) {
        activeSlide--
        if(activeSlide<=0){
            activeSlide = 0;
        }
    }
    const height = container.clientHeight;


    mainSlide.style.transform=`translateY(-${activeSlide*height}px)`;
    sidebar.style.transform=`translateY(${activeSlide*height}px)`;
}