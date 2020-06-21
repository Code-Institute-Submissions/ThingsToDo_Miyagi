function sendMail(contactForm) {
   emailjs.send("outlook", "miyagi", {
       "from_name": contactForm.fullname.value,
       "from_email": contactForm.emailaddress.value,
       "enquiry": contactForm.message.value

    })
   .then (
    function(response) {
        console.log("SUCCESS", response);
    },
    function(error) {
        console.log("FAILED", error);
    });

 return false; 

}

// code was taken from https://stackoverflow.com/questions/59649450/use-bootstrap-modal-after-all-the-requiring-field-have-been-filled
$('#submitModal').on('show.bs.modal', function (e) {
         var button = e.relatedTarget;
         if($("#email").val().length==0) {
         e.stopPropegation();
        }  
      });

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
