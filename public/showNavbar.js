function initializeNavbar() {
    const navbar = document.querySelector('nav');
    let timeout;

    if (navbar) {
        const showNavbar = () => {
            navbar.style.opacity = '1';
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                navbar.style.opacity = '0';
            }, 1600); // Adjust time as needed
        };

        document.addEventListener('mousemove', showNavbar);
    } else {
        console.error("Navbar element not found!");
    }
}

// No export; call `initializeNavbar()` when needed
