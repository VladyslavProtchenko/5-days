const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

//____________________________variables_____________________________
//____________________________drag card_____________________________

for( const placeholder of placeholders){
    placeholder.addEventListener('dragover',dragover);
    placeholder.addEventListener('drop',dragdrop);
    placeholder.addEventListener('dragenter',dragenter);
    placeholder.addEventListener('dragleave',dragleave);
}



function dragstart(event){
        setTimeout(()=> event.target.classList.add('hide'),0)
        
}

function dragend(event){
    event.target.className="item";
}
//___________________________placeholders__________________________

function dragover(event){
    event.preventDefault();
}

function dragdrop(event){
    event.target.append(item);
}



function dragenter(event){
    
    if(event.target.classList.contains('for-start')){
        start.classList.add('active');
    }
    if(event.target.classList.contains('for-progress')){
        progress.classList.add('active');
    }
    if(event.target.classList.contains('for-done')){
        done.classList.add('active');
    }

}
function dragleave(event){

    if(event.target.classList.contains('for-start')){
        start.classList.remove('active');
    }
    if(event.target.classList.contains('for-progress')){
        progress.classList.remove('active');
    }
    if(event.target.classList.contains('for-done')){
        done.classList.remove('active');
    }
}
//__________________________active shadows____________________________

const start = document.querySelector('.start');
const progress = document.querySelector('.progress');
const done = document.querySelector('.done');


