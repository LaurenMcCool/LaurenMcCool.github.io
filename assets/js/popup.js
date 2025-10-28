//  Welcome Popup script. POp up that welcomes user to the website and allows them to subscribe to a monthly email chain for teaching resources


// Pop up in top right hand corner of the page. 

// Pop up waits until the page fully loaded
window.addEventListener('load', () => {
  const popup = document.getElementById('welcomePopup');
  const closeBtn = document.getElementById('closePopup');
  const subscribeBtn = document.getElementById('subscribeBtn');

  // Function to check if the contact section is active
  function isContactSectionActive() {
    const contactSection = document.getElementById('contact');
    return contactSection && contactSection.classList.contains('active');
  }

  // Show popup after short delay only if not on contact section
  setTimeout(() => {
    if (!isContactSectionActive()) {
      popup.classList.add('show');
    }
  }, 1000);

  // Pop up closes 
  closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
  });

  // Subscribe button redirects to Contact section where the pop up is then closed
  subscribeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) contactLink.click();
  });

  // Hide popup if user later navigates to contact section 
  const contactLink = document.querySelector('a[href="#contact"]');
  if (contactLink) {
    contactLink.addEventListener('click', () => {
      popup.classList.remove('show');
    });
  }
});



