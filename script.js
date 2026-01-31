document.addEventListener('DOMContentLoaded', () => {

    // FAQ Accordion
    const faqRows = document.querySelectorAll('.faq-row');

    faqRows.forEach(row => {
        const head = row.querySelector('.faq-head');
        if (head) {
            head.addEventListener('click', () => {
                // Close others
                faqRows.forEach(other => {
                    if (other !== row) {
                        const otherBody = other.querySelector('.faq-body');
                        const otherToggle = other.querySelector('.toggle');
                        if (otherBody) otherBody.classList.remove('show');
                        if (otherToggle) otherToggle.textContent = '+';
                    }
                });

                // Toggle current
                const body = row.querySelector('.faq-body');
                const toggle = row.querySelector('.toggle');

                body.classList.toggle('show');
                toggle.textContent = body.classList.contains('show') ? '-' : '+';
            });
        }
    });

    // Mobile Toggle
    const toggleBtn = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav-list');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            if (nav.style.display === 'flex') {
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '80px';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.background = 'white';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Select elements to animate
    // Select elements to animate
    const animateElements = document.querySelectorAll('.section-title, .hero-title, .project-stack-container, .stat-card-white, .stat-card-grey, .service-row, .t-card, .p-card, .faq-row');

    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // --- Project Navigation Logic ---
    const projects = [
        {
            id: '01',
            meta: '2025 . Fintech . App Design',
            title: 'CoinFlow',
            desc: 'CoinFlow is a modern banking application designed to simplify personal finance management. The interface focuses on trust, security, and ease of use, making complex financial data accessible to everyone.',
            img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: '02',
            meta: '2025 . Real Estate . Web Platform',
            title: 'UrbanNest',
            desc: 'UrbanNest connects homebuyers with their dream properties through an immersive virtual tour experience. The platform emphasizes high-quality visuals and streamlined search filters.',
            img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: '03',
            meta: '2025 . E-commerce . Web Design',
            title: 'BookHaven',
            desc: 'BookHaven is a UI/UX design project centered around creating a calm, intuitive, and visually engaging experience for book discovery. The design prioritizes clarity, readability, and effortless navigation.',
            img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80'
        }
    ];

    let currentProjectIndex = 2; // Start at BookHaven (03)

    const btnPrev = document.querySelector('.btn-nav-black');
    const btnNext = document.querySelector('.btn-nav-white');

    // Elements to update
    const pPill = document.querySelector('.project-num-pill');
    const pMeta = document.querySelector('.project-meta');
    const pTitle = document.querySelector('.project-title');
    const pDesc = document.querySelector('.project-desc');
    const pImg = document.querySelector('.p-img');
    const projectContentArea = document.querySelector('.project-card-layout');

    function updateProject(index) {
        // Fade out
        if (projectContentArea) {
            projectContentArea.style.opacity = '0';
            projectContentArea.style.transform = 'translateY(10px)';
            projectContentArea.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }

        setTimeout(() => {
            const p = projects[index];
            if (pPill) pPill.textContent = p.id;
            if (pMeta) pMeta.textContent = p.meta;
            if (pTitle) pTitle.textContent = p.title;
            if (pDesc) pDesc.textContent = p.desc;
            if (pImg) pImg.src = p.img;

            // Fade in
            if (projectContentArea) {
                projectContentArea.style.opacity = '1';
                projectContentArea.style.transform = 'translateY(0)';
            }
        }, 300);
    }

    if (btnPrev && btnNext) {
        btnPrev.addEventListener('click', () => {
            currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
            updateProject(currentProjectIndex);
        });

        btnNext.addEventListener('click', () => {
            currentProjectIndex = (currentProjectIndex + 1) % projects.length;
            updateProject(currentProjectIndex);
        });
    }
});
