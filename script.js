// DOM Elements
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const body = document.body;

// Always Default to Dark Mode on Load (User Request)
body.setAttribute('data-theme', 'dark');
toggleSwitch.checked = true;
// Start with dark mode explicitly saved/set
localStorage.setItem('theme', 'dark');

// Function to handle theme switch

// Function to handle theme switch
function switchTheme(e) {
    if (e.target.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll, .animate-fade-left, .animate-fade-right, .animate-zoom').forEach((el) => {
    observer.observe(el);
});

// Smooth Fade Transition for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        // If it's just "#", don't do anything (like empty links)
        if (this.getAttribute('href') === '#') return;

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Check if this link is inside a modal and should close it
        const shouldDismissModal = this.hasAttribute('data-bs-dismiss');

        if (shouldDismissModal) {
            // Get the modal instance and close it
            const modalElement = this.closest('.modal');
            if (modalElement) {
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                if (modalInstance) {
                    modalInstance.hide();
                }
            }
        }

        e.preventDefault();

        if (targetElement) {
            // 1. Fade Out
            document.body.classList.add('fade-out');

            // 2. Wait for fade out, then jump and fade in
            setTimeout(() => {
                // Remove ID temporarily to prevent browser's default scroll jump behavior (optional, but cleaner)
                // or just verify location

                // Manually unset smooth scrolling for the instant jump
                document.documentElement.style.scrollBehavior = 'auto';

                // Jump to element
                targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });

                // Update URL hash without scrolling (history API)
                history.pushState(null, null, targetId);

                // 3. Fade In
                setTimeout(() => {
                    document.body.classList.remove('fade-out');
                    // Reset scroll behavior
                    document.documentElement.style.scrollBehavior = '';
                }, 50);

            }, 300); // Matches the 0.3s CSS transition
        }
    });
});










// =========================================
// DATA For Dynamic Content
// =========================================

// 1. Skills Data
const skillsData = [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Next.js', icon: 'fab fa-nextjs' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    
    // Example of adding a new skill:
    // { name: 'React', icon: 'fab fa-react' },
];

// 2. Experience Data
const experienceData = [
    {
        date: '2023 - Present',
        title: 'Freelance Web Developer',
        description: 'Building responsive websites for clients on Upwork. Specializing in frontend development using clean code and modern frameworks.'
    }
];

// 2b. Education Data
const educationData = [
    {
        date: '2022 - 2024',
        title: 'Matric in Computer science',
        description: 'With Focus on Math and Physics I also developed interset in programming'
    },
    {
        date: '2024 - 2026',
        title: 'Intermediate in ICS',
        description: 'I started my journey in the world of technology, learning the fundamentals of programming and algorithms while studing in competition.'
    },
    {
        date: '2026 - Present',
        title: 'BS Computer Science',
        description: 'I am styding in BS Computer Science While Practically working as a Web Developer on Upwork as a Freelancer.'
    }
];

// 3. Projects Data
const projectsData = [
    {
        title: 'Blazas Website',
        description: 'A Article Publishing and Blogging Website with a unique User Interface and fully dynamically loaded content',
        link: 'https://www.blazas.com',
        // Support for multiple images
        images: [
            'img/Projects/project-1-1.webp',
            'img/Projects/project-1-2.webp',
            'img/Projects/project-1-3.webp',
            'img/Projects/project-1-4.webp'
        ]
    },
    {
        title: 'Internet Speed testing website',
        description: 'A website that tests your internet speed with the help of network threads',
        link: 'https://speed.blazas.com',
        // Fallback for single image if needed, or just use 1-item array
        images: ['img/Projects/project-2-1.webp']
    },
    {
        title: 'Ali Electro Traders Website',
        description: 'Developed a website for Ali Electro Traders',
        link: 'https://ali-electro-traders.great-site.net',
        images: ['img/Projects/project-3-1.webp']
    }
];

// 4. About Data
const aboutData = {
    headline: "Detail-Oriented & Creative",
    text: "I am a web developer with a passion for building user-friendly and aesthetically pleasing websites. I love solvng compilex problems and turning ideas into reality through code. My journey started with a curiosity for how the web works, leading me to master modern frontend technologies.",
    // You can add more paragraphs or details here if needed
};

// 5. Contact Data
const contactData = [
    {
        icon: 'fab fa-whatsapp',
        label: 'WhatsApp',
        link: 'https://wa.me/923045811000', // Replace with your number
        color: '#25D366' // WhatsApp Green
    },
    {
        icon: 'fas fa-phone',
        label: 'Call Me',
        link: 'tel:+923045811000', // Replace with your number
        color: '#0d6efd' // Bootstrap Blue
    },
    {
        icon: 'fas fa-envelope',
        label: 'Email Me',
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=technodictions@email.com', // Opens Gmail Web
        color: '#EA4335' // Gmail Red
    },
    {
        icon: 'fas fa-location-dot',
        label: 'Location',
        link: 'https://www.google.com/maps/place/Sheikhupura,+Pakistan/@31.7117399,73.9475144,15199m/data=!3m1!1e3!4m6!3m5!1s0x3918c28a688b5b1f:0x80b1b64a08cfde2!8m2!3d31.7117052!4d73.9956905!16zL20vMDZxNG1r!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D', // Opens Gmail Web
        color: '#EA4335' // Gmail Red
    }
];

// 6. Connect Data
const connectData = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/-muhammad-ahmad' },
    { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/TechnoDictions' },
    {
        name: 'Upwork',
        icon: 'img/icons/upwork.svg',
        link: 'https://www.upwork.com/freelancers/~011d49d15d83701ed9'
    }
];

// Render Functions

function renderAbout() {
    const container = document.getElementById('about-content');
    if (!container) return;

    container.innerHTML = `
        <div class="row align-items-center">
            <div class="col-lg-8 mx-auto text-center">
                <h2 class="mb-4 fw-bold">About Me</h2>
                <h4 class="mb-3 text-primary">${aboutData.headline}</h4>
                <p class="lead">${aboutData.text}</p>
            </div>
        </div>
    `;
}

function renderContact() {
    const container = document.getElementById('contact-options');
    if (!container) return;

    container.innerHTML = `
        <div class="d-flex justify-content-center gap-4 align-items-center">
            ${contactData.map((item, index) => `
                <a href="${item.link}" target="_blank" class="contact-link animate-zoom delay-${index * 100}" title="${item.label}">
                    <i class="${item.icon} fa-2x"></i>
                </a>
            `).join('')}
        </div>
    `;
}

function renderConnect() {
    const container = document.getElementById('connect-list');
    if (!container) return;

    container.innerHTML = connectData.map((item, index) => {
        let iconHtml;
        const iconClass = `icon-${item.name.toLowerCase().replace(/\s+/g, '-')}`; // e.g., icon-upwork

        if (item.icon.startsWith('<')) {
            iconHtml = item.icon;
        } else if (item.icon.includes('/') || item.icon.includes('.')) {
            // Use CSS Mask for external SVGs to allow color changes
            iconHtml = `<div class="social-hub-icon mb-0 svg-icon ${iconClass}" style="--mask-url: url('${item.icon}');"></div>`;
        } else {
            // Font Icon
            iconHtml = `<i class="${item.icon} social-hub-icon mb-0 ${iconClass}"></i>`;
        }

        return `
        <div class="col-4 col-md-2">
            <a href="${item.link}" class="social-hub-card animate-zoom delay-${index * 100}" target="_blank" title="${item.name}">
                ${iconHtml}
            </a>
        </div>
        `;
    }).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-list');
    if (!container) return;

    container.innerHTML = skillsData.map((skill, index) => `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="skill-card animate-zoom delay-${(index % 4) * 100}">
                <i class="${skill.icon} skill-icon"></i>
                <h5 class="fw-bold">${skill.name}</h5>
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;

    container.innerHTML = experienceData.map((item, index) => `
        <div class="timeline-item animate-fade-right delay-${index * 200}">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <span class="timeline-date">${item.date}</span>
                <h5 class="fw-bold">${item.title}</h5>
                <p class="mb-0">${item.description}</p>
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('education-list');
    if (!container) return;

    container.innerHTML = educationData.map((item, index) => `
        <div class="timeline-item animate-fade-left delay-${index * 200}">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <span class="timeline-date">${item.date}</span>
                <h5 class="fw-bold">${item.title}</h5>
                <p class="mb-0">${item.description}</p>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const homeContainer = document.getElementById('projects-slider');
    const allContainer = document.getElementById('all-projects-grid');

    // Function to generate image content (Single Image or Carousel)
    const generateImageContent = (project, index) => {
        const uniqueId = `carousel-project-${index}`;

        if (project.images && project.images.length > 1) {
            // Render Carousel
            const indicators = project.images.map((_, i) =>
                `<button type="button" data-bs-target="#${uniqueId}" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}" aria-current="${i === 0 ? 'true' : 'false'}" aria-label="Slide ${i + 1}"></button>`
            ).join('');

            const items = project.images.map((img, i) =>
                `<div class="carousel-item ${i === 0 ? 'active' : ''}">
                    <img src="${img}" class="d-block w-100" alt="${project.title} - Image ${i + 1}" style="height: 200px; object-fit: cover;">
                </div>`
            ).join('');

            return `
                <div id="${uniqueId}" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        ${indicators}
                    </div>
                    <div class="carousel-inner">
                        ${items}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${uniqueId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${uniqueId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            `;
        } else {
            // Single Image
            const imgSrc = (project.images && project.images[0]) ? project.images[0] : (project.image || ''); // Fallback
            if (!imgSrc) return '';
            return `<img src="${imgSrc}" class="card-img-top" alt="${project.title}" style="height: 200px; object-fit: cover;">`;
        }
    };

    const generateCard = (project, index, isSlider = false) => `
        <div class="${isSlider ? 'col-10 col-md-5 col-lg-4' : 'col-md-6 col-lg-4'}">
            <div class="card h-100 border-0 shadow-sm animate-on-scroll delay-${(index % 3) * 100}">
                ${generateImageContent(project, index)}
                <div class="card-body">
                    <h5 class="card-title fw-bold">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="${project.link}" class="btn btn-sm btn-primary">View Project</a>
                </div>
            </div>
        </div>
    `;

    // 1. Render Home Page Slider (Limit 5)
    if (homeContainer) {
        const limitedData = projectsData.slice(0, 5);
        homeContainer.innerHTML = limitedData.map((p, i) => generateCard(p, i, true)).join('');

        // Add "View All" Card at the end if there are more projects
        if (projectsData.length > 5) {
            homeContainer.innerHTML += `
                <div class="col-6 col-md-3 d-flex align-items-center justify-content-center">
                    <a href="projects.html" class="btn btn-outline-primary rounded-circle p-4 shadow-sm animate-zoom" style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                        <i class="fas fa-arrow-right fa-2x mb-1"></i>
                        <span class="small fw-bold">View All</span>
                    </a>
                </div>
             `;
        }
    }

    // 2. Render All Projects Page (Full Grid)
    if (allContainer) {
        allContainer.innerHTML = projectsData.map((p, i) => generateCard(p, i, false)).join('');
    }

    // 3. Initialize Scroll Controls for Home Page
    if (homeContainer) {
        const prevBtn = document.getElementById('scroll-prev');
        const nextBtn = document.getElementById('scroll-next');

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                homeContainer.scrollBy({ left: -350, behavior: 'smooth' });
            });
            nextBtn.addEventListener('click', () => {
                homeContainer.scrollBy({ left: 350, behavior: 'smooth' });
            });
        }

        // 4. Pin & Horizontal Scroll (Stop Vertical, Scroll Horizontal)
        // 4. Pin & Horizontal Scroll (REMOVED due to user request)
        // Default browser behavior restored.

        // 5. Update Custom Progress Indicator
        const progressBar = document.getElementById('projects-scroll-bar');

        const updateProgressBar = () => {
            if (!progressBar) return;

            const maxScrollLeft = homeContainer.scrollWidth - homeContainer.clientWidth;
            const currentScroll = homeContainer.scrollLeft;

            // Calculate percentage (0 to 1)
            let scrollRatio = currentScroll / maxScrollLeft;
            if (scrollRatio < 0) scrollRatio = 0;
            if (scrollRatio > 1) scrollRatio = 1;

            // Move the thumb (simple left positioning)
            // Use logical percentage for visual
            const percent = scrollRatio * 100;
            // Ensure the bar stays within bounds.
            // We set width to 20% in CSS, so travel distance is remaining 80%.
            // Actually, usually a visual slider has a thumb. Let's assume the bar represents "position".
            // Simpler visual: Left position = percent% * (100% - thumbWidth%)
            // CSS defined width: 20%. So max 'left' is 80%.

            progressBar.style.left = `${scrollRatio * 80}%`;
        };

        homeContainer.addEventListener('scroll', updateProgressBar);
        // Initial call
        setTimeout(updateProgressBar, 500); // Wait for render
    }
}

// Initial Render
// We call this immediately to populate content
renderAbout();
renderSkills();
renderExperience();
renderEducation();
renderProjects();
renderContact();
renderConnect();

// Set Current Year in Footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Re-initialize scroll observer for new dynamic elements
// This ensures the fade-in animation works for the new items
setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll, .animate-fade-left, .animate-fade-right, .animate-zoom').forEach((el) => {
        observer.observe(el);
    });
}, 100);



