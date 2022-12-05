const board = document.querySelector('#board')
const SQ_NUM = 500;
const color = ['#ff0000','#0062ff','#00ffaa','#ff0095','#7b00ff','#fff06c','black','green','blue','#ffaa6d','#ff6a00','#fffb00','#50ff06'];

for (i=0; i<SQ_NUM; i++) {
    const sq = document.createElement('div');
    sq.classList.add('square');

    sq.addEventListener('mouseover',()=>{
        setColor(sq)
    })

    sq.addEventListener('mouseleave',()=>{
        removeColor(sq)
    })

    board.append(sq);
};

function setColor(el) {
    const c = setRandomColor();
    el.style.backgroundColor = c;
    el.style.boxShadow = `0 0 2px ${c}, 0 0 5px ${c}`;
}
function removeColor(el) {
    el.style.backgroundColor = "#1d1d1d"
    el.style.boxShadow = ` 0 0 5px #000`;

}

function setRandomColor(){
    const randomColor = Math.floor(Math.random()* color.length);
    return color[randomColor];
}

//____________________надо сделать часы!!!!_____________________