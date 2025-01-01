function new1() {
   document.getElementById("new").innerHTML= "Bye 2024!!!!"
}
function old() {
    document.getElementById("new").innerHTML= "Welcome 2025!!!!"
 }
 let font= document.getElementById("font")
 let size= document.getElementById("size")
 let Italic= document.getElementById("Italic")
 let Bold= document.getElementById("Bold")
 let Underline= document.getElementById("Underline")
 let text1= document.getElementById("text1")

 font.onchange= function (){
    text1.style.fontFamily= font.value
 }
 size.onchange= function(){
    text1.style.fontSize= size.value

 }
 Italic.onchange= function(){
    if (Italic.checked){
        text1.style.fontStyle= "italic"
    }else{
        text1.style.fontStyle= "normal"
    }
 }
 Bold.onchange= function(){
    if (Bold.checked){
        text1.style.fontWeight= "bold"
    }else{
        text1.style.fontWeight= "normal"
    }
 }

 Underline.onchange= function(){
    if (Underline.checked){
        text1.style.textDecoration= "underline"
    }else{
        text1.style.textDecoration= "none"
    }
 }