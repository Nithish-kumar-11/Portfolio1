// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle sections
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let sectionId = this.getAttribute('href').substring(1);
        let section = document.getElementById(sectionId);

        document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
        section.classList.add('active');
    });
});
