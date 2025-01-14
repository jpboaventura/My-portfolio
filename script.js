window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight - viewportHeight;

    // Adjust background position based on scroll
    const gradientPosition = (scrollPosition / totalHeight) * 100;
    document.body.style.backgroundPosition = `center ${gradientPosition}%`;

    // Toggle text color for readability
    if (scrollPosition > totalHeight / 2) {
        document.body.classList.add("light-mode"); // Switch to black text
    } else {
        document.body.classList.remove("light-mode"); // Switch back to white text
    }
});

