// External Java Scripts for Diggy's Indie Dome - keep minmimal for load time please.

// Start of Invite button interaction
document.addEventListener("DOMContentLoaded", function() {
    const inviteButton = document.getElementById("inviteButton");

    if (inviteButton) {
        inviteButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link action
            this.textContent = "TBC"; // Change the button text to "TBC"
        });
    }
});
// End of Invite button interaction
