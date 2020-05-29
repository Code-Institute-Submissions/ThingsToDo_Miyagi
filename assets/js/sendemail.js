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