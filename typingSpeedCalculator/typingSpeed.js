let inputText = document.getElementById("inputText");
let wordsCountE = document.getElementById("wordsCount");
let wpmE = document.getElementById("wpm");
let uniqueCharactersCountE = document.getElementById("uniqueCharactersCount");
let charactersCountE = document.getElementById("charactersCount");


let seconds = 0;
let words;

inputText.addEventListener("focus",()=>{
    let t = setInterval(() => {
        seconds += 1
        words = inputText.value.split(" ");
        words = words.filter((e)=>e!=="")
        let characters = inputText.value.split("");
        characters = characters.filter((e)=>e!==" ");
        let unqcharacters = new Set(characters);
        
        charactersCountE.textContent =  characters.length; 
        wordsCountE.textContent = words.length;
        
        uniqueCharactersCountE.textContent = unqcharacters.size;
    
    },10);
    let x = setInterval(()=>{
        let wpm = Math.round(words.length * 6000 /seconds);
        wpmE.textContent = wpm;
    },1000);
});


