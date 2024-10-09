document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    const activeLink = localStorage.getItem('activeLink');

    // Restore active state from local storage
    if (activeLink) {
        document.querySelector(`a[href="${activeLink}"]`).classList.add('active');
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent default behavior for accessibility purposes
            event.preventDefault();
            const url = link.getAttribute('href');

            // Remove active class from all links and add it to the clicked link
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Store the active link in local storage
            localStorage.setItem('activeLink', url);

            // Open the link in a new tab
            window.open(url, '_blank');
        });
    });
});
