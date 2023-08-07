// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //k navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active sections for animation on scroll 
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });
    
    //sticky header 
    let header = document.querySelector('header');

    header.classList.toggle('sticky' ,window.scrollY > 100);

   // remove Toggle icon and navbar when click navbar links (scrole)
   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');

   //animatiom footer on scroll 
   let footer = document.querySelector('footer');
   
   footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
   
}


// Form Email logic with (Email JS)

// Function to send the email
function sendEmail(event) {
    event.preventDefault();
  
    // Get the form data
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    // Create a template parameters object
    const templateParams = {
      from_name: fullName,
      from_email: email,
      phone: phone,
      subject: subject,
      message: message,
    };
  
    // Replace 'YOUR_PUBLIC_KEY' with your actual public key
    const publicKey = "7yv6jOJ-hWB2Ql3do";
  
    // Send the email using the service and template ID you created
    emailjs.send("service_zyk8dg9", "template_rofr5sv", templateParams, publicKey)
      .then(
        function (response) {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully!");
        },
        function (error) {
          console.log("Email sending failed:", error);
          alert("Oops! Something went wrong while sending the email.");
        }
      );
  
    // Reset the form after sending the email
    document.getElementById("contact-form").reset();
  }
  
  // Add event listener to the form submit button
  document.getElementById("contact-form").addEventListener("submit", sendEmail);
  