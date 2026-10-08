

//generate random color
const randomColor = function(){

    const hex = "0123456789ABCDEF";

    let color = "#";
    for(let i=0 ;i<6 ; i++)
    {
        color += hex[Math.floor(Math.random() * 16 )]
    }
    return color;
}

//console.log(Math.floor(Math.random() * 16 ));
//console.log(randomColor());

let intervalId;
const startChangingColor = function(){

    //checking intervalId is not null is better practise
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000);
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }

};

const stopChangingColor = function(){

    clearInterval(intervalId);
    intervalId = null; //It is better practise
};
document.querySelector("#start").addEventListener('click',startChangingColor);

document.querySelector("#stop").addEventListener('click',stopChangingColor);