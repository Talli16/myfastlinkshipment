// Simple Translation System - WORKING VERSION

const translations = {
    'en': {
        'home': 'Home', 'services': 'Services', 'pricing': 'Pricing', 'track': 'Track', 'contact': 'Contact',
        'heroTitle': 'Fast & Reliable Shipping Solutions', 'heroSubtitle': 'Get your packages delivered on time, every time',
        'getStarted': 'Get Started', 'ourServices': 'Our Services', 'trackYourShipment': 'Track Your Shipment',
        'enterTracking': 'Enter your tracking number to monitor your delivery in real-time',
        'trackNow': 'Track Now', 'getInTouch': 'Get in Touch',
        'haveQuestions': 'Have questions? Our support team is here to help',
        'sendMessage': 'Send Message', 'phone': 'Phone', 'email': 'Email', 'address': 'Address',
        'allRightsReserved': 'All rights reserved', 'privacyPolicy': 'Privacy Policy',
        'termsOfService': 'Terms of Service', 'sitemap': 'Sitemap'
    },
    'es': {
        'home': 'Inicio', 'services': 'Servicios', 'pricing': 'Precios', 'track': 'Rastrear', 'contact': 'Contacto',
        'heroTitle': 'Soluciones de Envío Rápido y Confiable', 'heroSubtitle': 'Reciba sus paquetes a tiempo, siempre',
        'getStarted': 'Comenzar', 'ourServices': 'Nuestros Servicios', 'trackYourShipment': 'Rastrear su Envío',
        'enterTracking': 'Ingrese su número de seguimiento para monitorear su entrega en tiempo real',
        'trackNow': 'Rastrear Ahora', 'getInTouch': 'Póngase en Contacto',
        'haveQuestions': '¿Tiene preguntas? Nuestro equipo de soporte está aquí para ayudar',
        'sendMessage': 'Enviar Mensaje', 'phone': 'Teléfono', 'email': 'Correo Electrónico', 'address': 'Dirección',
        'allRightsReserved': 'Todos los derechos reservados', 'privacyPolicy': 'Política de Privacidad',
        'termsOfService': 'Términos de Servicio', 'sitemap': 'Mapa del Sitio'
    },
    'fr': {
        'home': 'Accueil', 'services': 'Services', 'pricing': 'Tarification', 'track': 'Suivi', 'contact': 'Contact',
        'heroTitle': 'Solutions d\'Expédition Rapides et Fiables', 'heroSubtitle': 'Recevez vos colis à temps, à chaque fois',
        'getStarted': 'Commencer', 'ourServices': 'Nos Services', 'trackYourShipment': 'Suivre votre Colis',
        'enterTracking': 'Entrez votre numéro de suivi pour surveiller votre livraison en temps réel',
        'trackNow': 'Suivre Maintenant', 'getInTouch': 'Nous Contacter',
        'haveQuestions': 'Des questions? Notre équipe d\'assistance est là pour vous aider',
        'sendMessage': 'Envoyer un Message', 'phone': 'Téléphone', 'email': 'Email', 'address': 'Adresse',
        'allRightsReserved': 'Tous les droits réservés', 'privacyPolicy': 'Politique de Confidentialité',
        'termsOfService': 'Conditions d\'Utilisation', 'sitemap': 'Plan du Site'
    },
    'de': {
        'home': 'Startseite', 'services': 'Dienstleistungen', 'pricing': 'Preisgestaltung', 'track': 'Verfolgung', 'contact': 'Kontakt',
        'heroTitle': 'Schnelle und Zuverlässige Versandlösungen', 'heroSubtitle': 'Ihre Pakete pünktlich, immer',
        'getStarted': 'Anfangen', 'ourServices': 'Unsere Dienstleistungen', 'trackYourShipment': 'Verfolgen Sie Ihre Sendung',
        'enterTracking': 'Geben Sie Ihre Verfolgungsnummer ein, um Ihre Lieferung in Echtzeit zu überwachen',
        'trackNow': 'Jetzt Verfolgen', 'getInTouch': 'Kontaktieren Sie Uns',
        'haveQuestions': 'Haben Sie Fragen? Unser Support-Team ist hier, um Ihnen zu helfen',
        'sendMessage': 'Nachricht Senden', 'phone': 'Telefon', 'email': 'E-Mail', 'address': 'Adresse',
        'allRightsReserved': 'Alle Rechte vorbehalten', 'privacyPolicy': 'Datenschutzrichtlinie',
        'termsOfService': 'Nutzungsbedingungen', 'sitemap': 'Sitemap'
    },
    'zh': {
        'home': '首页', 'services': '服务', 'pricing': '定价', 'track': '追踪', 'contact': '联系',
        'heroTitle': '快速可靠的运输解决方案', 'heroSubtitle': '让您的包裹准时送达，每次都是',
        'getStarted': '开始', 'ourServices': '我们的服务', 'trackYourShipment': '追踪您的货物',
        'enterTracking': '输入您的追踪号码以实时监控您的送货',
        'trackNow': '立即追踪', 'getInTouch': '联系我们',
        'haveQuestions': '有问题吗？我们的支持团队随时准备帮助您',
        'sendMessage': '发送消息', 'phone': '电话', 'email': '电子邮件', 'address': '地址',
        'allRightsReserved': '版权所有', 'privacyPolicy': '隐私政策',
        'termsOfService': '服务条款', 'sitemap': '网站地图'
    },
    'ar': {
        'home': 'الرئيسية', 'services': 'الخدمات', 'pricing': 'التسعير', 'track': 'تتبع', 'contact': 'اتصل',
        'heroTitle': 'حلول الشحن السريعة والموثوقة', 'heroSubtitle': 'احصل على طرودك في الوقت المحدد، في كل مرة',
        'getStarted': 'ابدأ', 'ourServices': 'خدماتنا', 'trackYourShipment': 'تتبع شحنتك',
        'enterTracking': 'أدخل رقم التتبع الخاص بك لمراقبة التسليم في الوقت الفعلي',
        'trackNow': 'تتبع الآن', 'getInTouch': 'تواصل معنا',
        'haveQuestions': 'هل لديك أسئلة؟ فريق الدعم لدينا هنا للمساعدة',
        'sendMessage': 'إرسال رسالة', 'phone': 'الهاتف', 'email': 'البريد الإلكتروني', 'address': 'العنوان',
        'allRightsReserved': 'جميع الحقوق محفوظة', 'privacyPolicy': 'سياسة الخصوصية',
        'termsOfService': 'شروط الخدمة', 'sitemap': 'خريطة الموقع'
    },
    'pt': {
        'home': 'Início', 'services': 'Serviços', 'pricing': 'Preços', 'track': 'Rastrear', 'contact': 'Contato',
        'heroTitle': 'Soluções de Envio Rápidas e Confiáveis', 'heroSubtitle': 'Receba seus pacotes no prazo, sempre',
        'getStarted': 'Começar', 'ourServices': 'Nossos Serviços', 'trackYourShipment': 'Rastreie seu Envio',
        'enterTracking': 'Digite seu número de rastreamento para monitorar sua entrega em tempo real',
        'trackNow': 'Rastrear Agora', 'getInTouch': 'Entre em Contato',
        'haveQuestions': 'Tem dúvidas? Nossa equipe de suporte está aqui para ajudar',
        'sendMessage': 'Enviar Mensagem', 'phone': 'Telefone', 'email': 'Email', 'address': 'Endereço',
        'allRightsReserved': 'Todos os direitos reservados', 'privacyPolicy': 'Política de Privacidade',
        'termsOfService': 'Termos de Serviço', 'sitemap': 'Mapa do Site'
    }
};

function getCurrentLanguage() {
    return localStorage.getItem('lang') || 'en';
}

function translatePage(langCode) {
    localStorage.setItem('lang', langCode);
    const trans = translations[langCode];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (trans[key]) {
            el.textContent = trans[key];
        }
    });
    
    document.documentElement.lang = langCode;
    document.body.style.direction = langCode === 'ar' ? 'rtl' : 'ltr';
}

function createLanguageSelector() {
    const selector = document.createElement('div');
    selector.id = 'langSelector';
    selector.style.cssText = 'position: fixed; top: 90px; right: 20px; z-index: 999; background: white; padding: 12px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);';
    
    const select = document.createElement('select');
    select.style.cssText = 'padding: 8px; border: 2px solid #667eea; border-radius: 5px; font-size: 14px; cursor: pointer;';
    
    const langs = [
        {code: 'en', name: '🇺🇸 English'},
        {code: 'es', name: '🇪🇸 Español'},
        {code: 'fr', name: '🇫🇷 Français'},
        {code: 'de', name: '🇩🇪 Deutsch'},
        {code: 'zh', name: '🇨🇳 中文'},
        {code: 'ar', name: '🇸🇦 العربية'},
        {code: 'pt', name: '🇵🇹 Português'}
    ];
    
    langs.forEach(lang => {
        const opt = document.createElement('option');
        opt.value = lang.code;
        opt.text = lang.name;
        if (lang.code === getCurrentLanguage()) opt.selected = true;
        select.appendChild(opt);
    });
    
    select.onchange = (e) => translatePage(e.target.value);
    selector.appendChild(select);
    document.body.appendChild(selector);
}

document.addEventListener('DOMContentLoaded', () => {
    createLanguageSelector();
    translatePage(getCurrentLanguage());
});
