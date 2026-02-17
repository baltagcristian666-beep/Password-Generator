const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let outputsOne = document.querySelector("#outputs-one");
let outputsTwo = document.getElementById("outputs-two");
let maxChar = document.getElementById("numar-charactere");




function getValue(){
    let n = parseInt(maxChar.value, 10);
    if (n<1 || isNaN(n))
    return 0;
    else
    return n;
}

function getChars(){
    let n = Math.floor(Math.random()*characters.length);
    return characters[n];
}

function generateString(len){
    let s = "";
    for(let i=0; i<len; i++){
        s+=getChars();
    }
    return s;
    }
    


function render(){
    let n =getValue();
    if(n===0){
        return "Try with a number bigger then 0!";
    }else{
        outputsOne.textContent=generateString(n);
        outputsTwo.textContent=generateString(n);
    }
}

function copyPass(p){
    let tag = document.querySelector(p).textContent;
    navigator.clipboard.writeText(tag)
    .then(() => console.log('Text copied'))
    .catch(err => console.error('Failed to copy:', err))
    //alert("Copied the password: " + m);

}




