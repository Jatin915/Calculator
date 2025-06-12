let display=document.querySelector("input");

function clearValue(){
    display.value='';
}

function appendValue(val){
    display.value += val;
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
    display.value="Syntax Error";
    }
}