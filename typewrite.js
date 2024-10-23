
let element = document.getElementById("typewriter");
let names = "based In India.";
let i = 0;
let uniqueNo = null
let value = ""

uniqueNo = setInterval(()=>{
   if(i === names.length){
    i = 0
    value = ""
   }
   value = value + names[i]
  element.textContent  = value
  i++;
}, 200)