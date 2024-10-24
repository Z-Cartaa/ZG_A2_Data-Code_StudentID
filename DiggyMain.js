// Need to check console to ensure script is loaded an running.
console.log("DiggyMain.js is loaded successfully!");

// External Java Scripts for Diggy's Indie Dome - keep minmimal for load time please.

// Start of Invite button interaction
document.addEventListener("DOMContentLoaded", function() {
    const inviteButton = document.getElementById("inviteButton");

    if (inviteButton) {
        inviteButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link action
            this.textContent = "TBC"; // Change the button text to "TBC"
        });
    } else {
        console.error("Invite button not found."); // Debugging error to know if the button isn't found
    }
});
// End of Invite button interaction
// Start of Profile Image Upload
function uploadImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const profilePic = document.getElementById('profile-pic');
        profilePic.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
// End of Profile Image Upload
