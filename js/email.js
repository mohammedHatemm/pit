(function() {
  emailjs.init("petspacevc@gmail.com"); // استبدل "your_user_id" بـ ID الخاص بك من Email.js
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.send("your_service_id", "your_template_id", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(function(response) {
    alert("Your message has been sent successfully!");
    document.getElementById("contactForm").reset();
  }, function(error) {
    alert("Failed to send message. Please try again.");
  });
});
