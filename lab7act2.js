function Start(){
    myVar=setTimeout(myFunction,3000);}   //it returns a unique ID for the timer created by setTimeout() method. This ID can be used to stop the timer using clearTimeout() method.

    function Stop(){
        clearTimeout(myVar);   //stop execution of fuction before it even starts
    }

function myFunction(){
    document.getElementById("demo").innerHTML="Hello World!";
}       