const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let outputsOne = document.querySelector("#outputs-one");
let outputsTwo = document.getElementById("outputs-two");
let maxChar = document.getElementById("numar-charactere");




function getValue(){
    
    //maxChar = document.getElementById("numar-charactere").value ;
    let n = parseInt(maxChar.value);
    console.log(n);
    if (n<1 || isNaN(n))
    return 0;
    else
    return n;
}

function getChars(){
    let n = Math.floor(Math.random()*characters.length);
    return characters[n];
}

function generateString(){
    let s = "";
    if(getValue()===0){
        return "Try with a number bigger then 0!";
    }else{
        for(let i=0; i<getValue(); i++){
        s+=getChars();
    }
    return s;
    }
    
}

function render(){
    
        outputsOne.textContent=generateString();
        outputsTwo.textContent=generateString();
}




// function copyPass(password) {
  

//   // Select the text field
//   password.select();
  
//    // Copy the text inside the text field
//   navigator.clipboard.writeText(password.value);

//   // Alert the copied text
//   alert("Copied the text: " + password.value);
// }


