function sendMail(contactForm) {
   emailjs.send("outlook", "miyagi", {
       "from_name": contactForm.fullname.value,
       "from_email": contactForm.emailaddress.value,
       "enquiry": contactForm.message.value

    })
   .then (
    function(response){
    console.log("SUCCESS", response);
    $('#submitModal').modal('show');
    },
    function(error) {
        console.log("FAILED", error);
    });

      return false; 
}





// taken from w3schools.com/how to add active class to current element
var header = document.getElementById("navbarNavDropdown"); 
var btns = header.getElementsByClassName("nav-link");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
