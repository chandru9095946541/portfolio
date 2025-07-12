// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Chatbot functionality
function toggleChatbot() {
    const chatbotModal = document.getElementById('chatbotModal');
    const chatbotToggle = document.getElementById('chatbotToggle');
    
    if (chatbotModal.classList.contains('active')) {
        chatbotModal.classList.remove('active');
        chatbotToggle.style.animation = 'pulse 2s infinite';
    } else {
        chatbotModal.classList.add('active');
        chatbotToggle.style.animation = 'none';
    }
}

function openChatbot() {
    const chatbotModal = document.getElementById('chatbotModal');
    const chatbotToggle = document.getElementById('chatbotToggle');
    
    chatbotModal.classList.add('active');
    chatbotToggle.style.animation = 'none';
}

function selectCompany(companyName, companyCode) {
    console.log(`Selected company: ${companyName} (${companyCode})`);
    // Here you would implement the chatbot response logic
    alert(`You selected: ${companyName}. This would normally trigger a chatbot response about ${companyName}.`);
}

function sendMessage() {
    const messageInput = document.getElementById('chatMessage');
    const message = messageInput.value.trim();
    
    if (message) {
        console.log(`Sending message: ${message}`);
        // Here you would implement the message sending logic
        alert(`Message sent: ${message}. This would normally be processed by the chatbot.`);
        messageInput.value = '';
    }
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Contact functions
function openEmail() {
    window.open('mailto:surveshchandru@gmail.com', '_blank');
}

function openLinkedIn() {
    window.open('https://in.linkedin.com/in/survesh-chandru-6a9bab286', '_blank');
}

function openGitHub() {
    window.open('https://github.com/surveshchandru', '_blank');
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.section');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupScrollAnimations();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });
    
    // Close chatbot when clicking outside
    document.addEventListener('click', function(event) {
        const chatbotModal = document.getElementById('chatbotModal');
        const chatbotToggle = document.getElementById('chatbotToggle');
        
        if (!chatbotModal.contains(event.target) && !chatbotToggle.contains(event.target)) {
            if (chatbotModal.classList.contains('active')) {
                toggleChatbot();
            }
        }
    });
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(26, 35, 50, 0.9)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
    });
});

// Parallax effect for floating shapes
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shape');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Optional: Add typing effect to hero title
// Uncomment the following lines if you want the typing effect
/*
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        typeWriter(heroTitle, 'SURVESH\nCHANDRU', 150);
    }
});
*/

// ====== Survesh Chandru Personal Portfolio Chatbot Code ======

// Chatbot Data
const businesses = [
    {
        key: 'survesh',
        name: 'Survesh Chandru S M',
        logo: 'images/logos/survesh-avatar.png',
        summary: `I am a 3rd-year diploma student in AI & ML at PSG Polytechnic College with an average of 92.11%. I’m working on a final-year hardware project — a robot agent that gives clues (yes, you heard that right!). I’ve also developed face recognition systems, advanced conversational chatbots (like this one), and explored AI agents (supervised + unsupervised). I even do data analytics on my semester marks!`,
        products: [
            'Face Recognition Attendance System',
            'Robot Agent Final Year Project (Hardware + AI)',
            'Conversational Chat System',
            'Supervised & Unsupervised AI Agents',
            'Semester-wise Data Analytics',
            'Personal Portfolio Chatbot'
        ],
        services: [
            'Python, JavaScript, HTML, CSS, PHP, SQL',
            'Node.js, R Programming, OpenCV, Flask',
            'Canva Poster Designs',
            'PPT Design and Presentations'
        ],
        location: 'Tamil Nadu, India',
        timing: 'Available 10:00 AM – 7:00 PM IST',
        website: 'https://replit.com/@surveshchandru'
    }
];

const buttonColors = {
    survesh: "#00c0ff"
};

function createCompanyButtons() {
    const container = document.getElementById('company-buttons');
    if (!container) return;
    container.innerHTML = "";
    businesses.forEach(business => {
        const btn = document.createElement('button');
        btn.className = 'company-button';
        btn.style.background = buttonColors[business.key] || "#333";
        btn.style.color = "#fff";

        const img = document.createElement('img');
        img.src = business.logo;
        img.alt = business.name + " logo";
        img.className = "company-logo";
        btn.appendChild(img);

        const span = document.createElement('span');
        span.textContent = business.name;
        btn.appendChild(span);

        container.appendChild(btn);
    });
}

window.addEventListener('load', createCompanyButtons);

document.addEventListener('DOMContentLoaded', () => {
    // Portfolio DOMContentLoaded logic...
    setupScrollAnimations();
    // ...your existing DOMContentLoaded code...

    // --- Chatbot logic ---
    const toggle = document.getElementById('chatbot-toggle');
    const windowEl = document.getElementById('chatbot-window');
    const close = document.getElementById('chatbot-close');
    const messages = document.getElementById('chatbot-messages');
    const form = document.getElementById('chatbot-form');
    const input = form ? form.querySelector('input') : null;

    if (toggle && windowEl && close && messages && form && input) {
        toggle.addEventListener('click', () => {
            windowEl.classList.toggle('hidden');
            if (!windowEl.classList.contains('hidden') && messages.children.length === 0) {
                addMessage("Hi! I'm your personal AI chatbot! Ask me anything about Survesh.", 'bot');
                addSuggestions([
                    { type: 'products', text: 'Projects' },
                    { type: 'services', text: 'Skills' },
                    { type: 'location', text: 'Location' },
                    { type: 'timing', text: 'Availability' },
                    { type: 'summary', text: 'About' },
                    { type: 'website', text: 'Portfolio' }
                ]);
            }
        });

        close.addEventListener('click', () => {
            windowEl.classList.add('hidden');
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;

            addMessage(text, 'user');
            input.value = '';
            showTypingIndicator();

            setTimeout(() => {
                hideTypingIndicator();
                const response = getBotResponse(text);
                addMessage(response, 'bot');
                addSuggestions([
                    { type: 'products', text: 'What projects has he done?' },
                    { type: 'services', text: 'What skills does he have?' },
                    { type: 'location', text: 'Where is he from?' },
                    { type: 'timing', text: 'When is he available?' },
                    { type: 'summary', text: 'Tell me about Survesh' },
                    { type: 'website', text: 'View Portfolio' }
                ]);
            }, 1500);
        });
    }

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `chat-message ${sender}`;
        div.innerHTML = `<div class="bubble">${text.replace(/\n/g, '<br>')}</div>`;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function addSuggestions(suggestions) {
        const old = messages.querySelectorAll('.suggestions');
        old.forEach(s => s.remove());

        const iconMap = {
            products: '<i class="fa-solid fa-folder-open"></i>',
            services: '<i class="fa-solid fa-code"></i>',
            location: '<i class="fa-solid fa-location-crosshairs"></i>',
            timing: '<i class="fa-regular fa-user"></i>',
            summary: '<i class="fa-solid fa-address-card"></i>',
            website: '<i class="fa-solid fa-briefcase"></i>'
        };

        const div = document.createElement('div');
        div.className = 'suggestions';

        suggestions.forEach(suggestion => {
            const btn = document.createElement('button');
            btn.className = 'suggestion-button';
            btn.innerHTML = `${iconMap[suggestion.type] || ''} <span>${suggestion.text}</span>`;
            btn.addEventListener('click', () => {
                div.querySelectorAll('button').forEach(b => b.disabled = true);
                const business = businesses[0];
                const response = getAnswer(suggestion.type, business);
                addMessage(response, 'bot');
                div.remove();
                addSuggestions(suggestions);
            });
            div.appendChild(btn);
        });

        messages.appendChild(div);
    }

    function getBotResponse(input) {
        const text = input.toLowerCase();
        const business = businesses[0];

        if (text.includes('project')) return getAnswer('products', business);
        if (text.includes('skill')) return getAnswer('services', business);
        if (text.includes('location') || text.includes('from')) return getAnswer('location', business);
        if (text.includes('time') || text.includes('available')) return getAnswer('timing', business);
        if (text.includes('website') || text.includes('portfolio')) return getAnswer('website', business);
        if (text.includes('about') || text.includes('who') || text.includes('survesh')) return getAnswer('summary', business);

        return "Try asking about Survesh's projects, skills, or availability!";
    }

    function getAnswer(type, business) {
        switch(type) {
            case 'products':
                return `Here are some of Survesh's main projects:<br>• ${business.products.join('<br>• ')}`;
            case 'services':
                return `Survesh is skilled in:<br>• ${business.services.join('<br>• ')}`;
            case 'location':
                return `He's based in ${business.location}`;
            case 'timing':
                return `He is available during: ${business.timing}`;
            case 'website':
                return `You can visit his portfolio here: <a href="${business.website}" target="_blank">${business.website}</a>`;
            case 'summary':
            default:
                return `<b>${business.name}:</b><br>${business.summary}`;
        }
    }

    function showTypingIndicator() {
        const div = document.createElement('div');
        div.id = 'typing-indicator';
        div.className = 'typing-indicator';
        div.innerHTML = `
            <div class="bubble">
                <div class="loader"></div>
            </div>
        `;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function hideTypingIndicator() {
        const el = document.getElementById('typing-indicator');
        if (el) el.remove();
    }
});