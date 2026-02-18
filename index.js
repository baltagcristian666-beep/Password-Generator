const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let outputsOne = document.querySelector("#outputs-one");
let outputsTwo = document.getElementById("outputs-two");
let maxChar = document.getElementById("numar-charactere");
let symCheck = document.getElementById("sym-check");
let numCheck = document.getElementById("num-check");
let filt = document.getElementsByName("filtru");

let regex = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/;


function getValue(){
    let n = parseInt(maxChar.value, 10);
    if (n<1 || isNaN(n))
    return 0;
    else
    return n;
}

function getFilter(){
    let filtList = [];
    for(let i=0; i<filt.length; i++){
        filtList.push(filt[i].checked);
    }
    return filtList;
}

function filter(){
    let specialChars = regex;
     let fl = getFilter();
    //let char = structuredClone(characters);
    if (fl[0] === true && fl[1] === true){
        return characters;
    }
    let char = [...characters];
    //console.log("eu0"+char);
   
    console.log(fl);
    if (fl[0] === true && fl[1] === false){
        for(let i=char.length-1; i>=0; i--){
            if(isNaN(char[i])===false){
                char.splice(i,1);
            }
        }
        // console.log("eu1"+char);
        return char;

    }else if (fl[0] === false && fl[1] === true){
        for(let i=char.length-1; i>=0; i--){
            if(specialChars.test(char[i])){
                char.splice(i,1);
                
            }
        }

        // console.log("eu2"+char);
        return char;

    }else if (fl[0] === false && fl[1] === false){
         for(let i=char.length-1; i>=0; i--){
            if(isNaN(char[i])===false || specialChars.test(char[i])){
                char.splice(i,1);
            }
        }
        //console.log("eu3"+char);
        return char;

    }
    
}

// function getChars(fil){
//    // let charList = filter();
//     let n = Math.floor(Math.random()*fil.length);
//     //console.log(charList[n]);
//     return fil[n];
// }

function generateString(len, fil){
    let s = "";
    for(let i=0; i<len; i++){
        let n = Math.floor(Math.random()*fil.length);
        s+=fil[n];
    }
    return s;
    }
    


function render(){
    let n =getValue();
    
    //console.count("render click");
    if(n===0){
        alert("Try with a number bigger then 0!");
    }else{
        let charList = filter();
        outputsOne.textContent=generateString(n, charList);
        outputsTwo.textContent=generateString(n, charList);
    }
}

function copyPass(p){
    let tag = document.querySelector(p).textContent;
    navigator.clipboard.writeText(tag)
    .then(() => console.log('Text copied'))
    .catch(err => console.error('Failed to copy:', err))
    //alert("Copied the password: " + m);

}




