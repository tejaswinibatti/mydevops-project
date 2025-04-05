document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Set build date to current date (will be replaced by Jenkins during deployment)
    const buildDate = new Date().toLocaleString();
    document.getElementById('build-date').textContent = buildDate;
    
    // Function to check server status
    function checkServerStatus() {
        const statusElement = document.getElementById('server-status');
        
        // Set status to checking
        statusElement.textContent = 'Checking...';
        statusElement.className = 'status-checking';
        
        // Simulate a server check (in a real app, this would be an API call)
        setTimeout(() => {
            // Simulate successful server response
            const isOnline = Math.random() > 0.1; // 90% chance of being online for demo
            
            if (isOnline) {
                statusElement.textContent = 'Online';
                statusElement.className = 'status-online';
            } else {
                statusElement.textContent = 'Offline';
                statusElement.className = 'status-offline';
            }
        }, 1000);
    }
    
    // Add event listener to refresh button
    document.getElementById('check-status').addEventListener('click', checkServerStatus);
    
    // Check status on page load
    checkServerStatus();
    
    // Add a simple animation effect for the cards
    const cards = document.querySelectorAll('.info-card, .status-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });
});

// This function will be called by Jenkins during deployment to update the version
function updateBuildInfo(version, buildDate) {
    document.getElementById('version').textContent = version;
    document.getElementById('build-date').textContent = buildDate;
}
