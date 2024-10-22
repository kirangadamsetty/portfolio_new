
AOS.init();

let element = document.getElementById("typewriter");
let names = "based In India.";
let i = 0;
let uniqueNo = null
let value = ""

uniqueNo = setInterval(()=>{
   if(i === names.length-1){
    i = 0
    value = ""
   }
   value = value + names[i]
  element.textContent  = value
  i++;
}, 200)


    




document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector(".experience-bottom-section");
     let projects = document.getElementById("total-projects")
     let experience = document.getElementById("total-experience");
     let coding = document.getElementById("total-coding");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let projectsnumber = 0;
                let experiencenumber = -10;
                let codingNumber = 500;
                let projectsNumberValue = null
                let experienceNumberValue = null
                let codingNumberValue = null
                

                projectsNumberValue = setInterval(()=>{
                    if(projectsnumber === 30){
                        clearInterval(projectsNumberValue)
                    }
                 projects.textContent = `${projectsnumber}+`
                 projectsnumber++;
                },50)
               
                experienceNumberValue = setInterval(()=>{
                    if(experiencenumber === 2){
                        clearInterval(experienceNumberValue)
                    }
                 experience.textContent = `${experiencenumber}+`
                 experiencenumber++;
                },50)
                
                codingNumberValue = setInterval(()=>{
                    if(codingNumber === 1000){
                        clearInterval(codingNumberValue)
                    }
                 coding.textContent = `${codingNumber}+`
                 codingNumber++;
                })








                observer.unobserve(entry.target); 
            }
        });
    });

    observer.observe(container);
});





