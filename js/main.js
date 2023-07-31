

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyvZOCWaDQ5a6L0_TgZJVCdkopv9V5PEONoeDNI9oYsccGyVEq9mrb0HRF2R0EnopIfkw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
    setTimeout(function(){
        msg.innerHTML = ""
    },5000)
    form.reset()
})
    .catch(error => console.error('Error!', error.message))
  })