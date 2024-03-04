  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var mascot = document.getElementById("mascot");
      mascot.classList.add("active");
      mascot.addEventListener("mouseenter", showWelcomeMessage);
      mascot.addEventListener("mouseleave", hideWelcomeMessage);
    }, 100); // Delay in milliseconds
  });
  
  function showWelcomeMessage() {
    var welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.classList.remove("hidden");
  }
  
  function hideWelcomeMessage() {
    var welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.classList.add("hidden");
  }
  
  