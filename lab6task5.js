
let num=Math.floor(Math.random()*10+1);

function checkGuess(){
    let guess=parseInt(document.querySelector("#guess").value);
    if(guess===num){
        alert("Congratulations! Correct Guess");

}
else {
    alert("Wrong Guess!"+" The number was "+ num);


}
}