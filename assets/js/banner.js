
var timer = setInterval(slide,1);

const images = document.getElementsByClassName("image");

for(i=0; i<images.length; i++){
    images[i].addEventListener("mouseover", stop);
}

for(i=0; i<images.length; i++){
    images[i].addEventListener("mouseout", start);
}


var pos=0;
var k=0;


function slide(){
    pos=pos-1;
    images[k].style.left=pos + "px";
    images[k+1].style.left=pos+500 +"px"
    if(pos<=-500){
        pos=0;
        k=k+1;
        images[k].style.left="500px";
    }

    if(k>=images.length-1){
        k=0;
        pos=0;         

    }  
  
}

function stop(){
    clearInterval(timer);
}

function start(){
    timer = setInterval(slide,1);

}

