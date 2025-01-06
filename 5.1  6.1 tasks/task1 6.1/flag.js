function view() {
    let jo= document.getElementById('jo')
    let pa= document.getElementById('pa')
    let se = document.getElementById('see').value;
  
  
  
    if (se === "jo") {
      jo.style.display = "block"
      pa.style.display = "none"
  
      
    } else if (se === "pa" ) {
      jo.style.display = "none"
      pa.style.display = "block"
    }
  
  
    else{
      jo.style.display = "none"
      pa.style.display = "none"
    }
  }