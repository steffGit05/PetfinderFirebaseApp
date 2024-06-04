function adoptPet(petId) {
    if (isUserAuthenticated()) {
        // Redirect to the adoption page if the user is authenticated
      //  window.location.href = `/adopt?petId=${petId}`;
      showMessage("Thank you for your interest in adopting this pet. You will receive an email with further instructions for completing for adoption process.");
    } else {
        // Show a text box message if the user is not authenticated
        showMessage("You need to be authenticated to adopt a pet. Head over to the login page to log in.");
    }
}

function isUserAuthenticated() {
    // Replace with your actual authentication check logic
    // For demonstration, let's assume we check a cookie or local storage
    return sessionStorage.getItem('authenticatedCache') === 'true';
}

function showMessage(message) {
    // Create a new div element for the message
    const messageBox = document.createElement('div');
    messageBox.className = 'message-box';
    messageBox.innerText = message;
    
    // Add a close button to the message box
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.onclick = function() {
        document.body.removeChild(messageBox);
    };
    
    messageBox.appendChild(closeButton);
    document.body.appendChild(messageBox);
}
