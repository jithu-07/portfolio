// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Update active navigation link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Theme toggle functionality
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    // Update icon
    const icon = document.querySelector('.theme-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectGrid = document.querySelector('.project-grid');

// Sample projects data
const projects = [
    {
        title: 'E-commerce Website',
        description: 'A full-stack e-commerce website with user authentication and payment integration.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: 'https://via.placeholder.com/800x400',
        category: 'web'
    },
    {
        title: 'Weather App',
        description: 'A responsive weather application that shows current weather and forecasts.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeather API'],
        image: 'https://via.placeholder.com/800x400',
        category: 'mobile'
    },
    {
        title: 'Desktop Calculator',
        description: 'A scientific calculator with advanced mathematical functions.',
        image: 'https://via.placeholder.com/800x400',
        category: 'desktop'
    }
];

// Generate project cards
function generateProjectCards() {
    projectGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

generateProjectCards();

// Filter projects
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Update statistics
function updateStats() {
    document.getElementById('projectCount').textContent = projects.length;
    document.getElementById('courseCount').textContent = 5; // Example value
    document.getElementById('starCount').textContent = 100; // Example value
}

updateStats();

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add back-to-top button
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopBtn);

// Show/hide back-to-top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Smooth scroll to top
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
});

// Add typing animation for hero section
const typedText = document.querySelector('.highlight');
if (typedText) {
    const text = typedText.textContent;
    typedText.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            typedText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 1000);
}
