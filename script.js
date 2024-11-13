// Function to show the Blacklist section when the button is clicked
function openBlacklist() {
    const blacklistEmbed = document.getElementById('blacklist-embed');
    const blacklistDB = document.getElementById('blacklist-db');

    // Toggle the visibility of the Blacklist section
    if (blacklistEmbed.style.display === 'none') {
        blacklistEmbed.style.display = 'block';  // Show the embed
        blacklistDB.style.display = 'none';      // Hide the database list
    } else {
        blacklistEmbed.style.display = 'none';   // Hide the embed
        blacklistDB.style.display = 'block';     // Show the database list
    }
}

// Activate the correct section when clicking on navigation items
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the clicked section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');
    });
});
