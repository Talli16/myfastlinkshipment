// ULTRA SIMPLE LANGUAGE SWITCHER

const langTexts = {
    en: {
        h1: 'Fast & Reliable Shipping Solutions',
        p1: 'Get your packages delivered on time, every time',
        btn1: 'Get Started',
        h2_services: 'Our Services',
        h2_track: 'Track Your Shipment',
        p_track: 'Enter your tracking number to monitor your delivery in real-time',
        btn_track: 'Track Now',
        h2_contact: 'Get in Touch',
        p_contact: 'Have questions? Our support team is here to help',
        btn_submit: 'Send Message'
    },
    es: {
        h1: 'Soluciones de Envío Rápido y Confiable',
        p1: 'Reciba sus paquetes a tiempo, siempre',
        btn1: 'Comenzar',
        h2_services: 'Nuestros Servicios',
        h2_track: 'Rastrear su Envío',
        p_track: 'Ingrese su número de seguimiento para monitorear su entrega en tiempo real',
        btn_track: 'Rastrear Ahora',
        h2_contact: 'Póngase en Contacto',
        p_contact: '¿Tiene preguntas? Nuestro equipo de soporte está aquí para ayudar',
        btn_submit: 'Enviar Mensaje'
    },
    fr: {
        h1: 'Solutions d\'Expédition Rapides et Fiables',
        p1: 'Recevez vos colis à temps, à chaque fois',
        btn1: 'Commencer',
        h2_services: 'Nos Services',
        h2_track: 'Suivre votre Colis',
        p_track: 'Entrez votre numéro de suivi pour surveiller votre livraison en temps réel',
        btn_track: 'Suivre Maintenant',
        h2_contact: 'Nous Contacter',
        p_contact: 'Des questions? Notre équipe d\'assistance est là pour vous aider',
        btn_submit: 'Envoyer un Message'
    }
};

function changeLang(lang) {
    localStorage.setItem('siteLang', lang);
    location.reload();
}

function applyLanguage() {
    const lang = localStorage.getItem('siteLang') || 'en';
    const t = langTexts[lang];
    
    // Update hero section
    const heroH1 = document.querySelector('.hero h1');
    const heroP = document.querySelector('.hero p');
    const heroBtn = document.querySelector('.hero button');
    
    if (heroH1) heroH1.textContent = t.h1;
    if (heroP) heroP.textContent = t.p1;
    if (heroBtn) heroBtn.textContent = t.btn1;
    
    // Update services section
    const servicesH2 = document.querySelector('.services > .container > h2');
    if (servicesH2) servicesH2.textContent = t.h2_services;
    
    // Update track section
    const trackH2 = document.querySelector('.tracking > .container > h2');
    const trackP = document.querySelector('.tracking > .container > p');
    const trackBtn = document.querySelector('.tracking .btn-primary');
    
    if (trackH2) trackH2.textContent = t.h2_track;
    if (trackP) trackP.textContent = t.p_track;
    if (trackBtn) trackBtn.textContent = t.btn_track;
    
    // Update contact section
    const contactH2 = document.querySelector('.contact > .container > h2');
    const contactP = document.querySelector('.contact > .container > p');
    const contactBtn = document.querySelector('.contact-form button');
    
    if (contactH2) contactH2.textContent = t.h2_contact;
    if (contactP) contactP.textContent = t.p_contact;
    if (contactBtn) contactBtn.textContent = t.btn_submit;
}

window.addEventListener('load', applyLanguage);
