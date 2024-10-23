const form = document.querySelector("form")
const subject = document.getElementById("subject")
const email = document.getElementById("email")
const body  = document.getElementById("body")
const person = document.getElementById("name");
const phone = document.getElementById("phone")
function sendEmail(){
    const bodyMessage = `Full Name: ${person.value} <br/> Contact Number: ${phone.value} <br/> 
                         Email: ${email.value} <br/> Message: ${body.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "gadamsettykiran514@gmail.com",
        Password : "AD05D45635FDE4BF5F82248354AE58041C7C",
        To : 'gadamsettykiran514@gmail.com',
        From : email.value,
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message =>{
        Swal.fire({
            title: "Success!",
            text: "Message send Sucessfully",
            icon: "success"
          });
      }
    );
}
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    sendEmail()
    form.reset()
})
