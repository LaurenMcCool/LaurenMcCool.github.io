// Pop up notification to acknowlege the submission of the contact form and thanking the user. Lined the the 'Contact' section of the index.html

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const thankYouPopup = document.getElementById("thankYouPopup");
  const closeThankYou = document.getElementById("closeThankYou");
  const subscribeBox = document.getElementById("subscribe");
  const popupMessage = document.getElementById("popupMessage");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
        const formData = new FormData(form);
        await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" }
        });

        // Pop up text message. If the user subscribes it will thank them. If they submit a message and don't tick the box it will tell them I'll get back to them
        
        if (subscribeBox.checked) {
          popupMessage.textContent = "Thank you for subscribing. I look forward to staying in contact!";
        } else {
          popupMessage.textContent = "Thank you for your message. I’ll get back to you soon!";
        }

        // Show popup for both cases
        thankYouPopup.classList.add("show");

       // Auto-hide after 5 seconds. The user will not have to click the cross to exit out of the pop up, but there will be a cross to exit out early
       
        setTimeout(() => {
          thankYouPopup.classList.remove("show");
        }, 5000);

        // Reset the form after submission
        form.reset();

      } catch (error) {
        console.error("FormSubmit error:", error);
        alert("There was a problem submitting your form. Please try again later.");
      }
    });
  }

  // Close popup manually. Cross at the top right corner if users want to exit early
  if (closeThankYou) {
    closeThankYou.addEventListener("click", () => {
      thankYouPopup.classList.remove("show");
    });
  }
});

