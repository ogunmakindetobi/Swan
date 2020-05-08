function sendMail(contactForm){
emailjs.send("gmail", "swan", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "from_mobile": contactForm.mobile.value,
    "from_Date": contactForm.date.value,

})

.then(
    function(response){
        console.log("SUCCESS", response);
    },
   function(error) {
       console.log("FALIED", error);
   },
   
);
return false;
}



