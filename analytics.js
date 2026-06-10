// Simple Analytics System
// Tracks: visitors, page views, tracking queries, conversions

const analyticsData = {
    totalVisitors: 0,
    pageViews: 0,
    trackingQueries: 0,
    contactFormSubmissions: 0,
    shipmentsTracked: {},
    dailyStats: {},
    visitorCountries: {},
    languages: {}
};

// Initialize analytics
function initializeAnalytics() {
    if (!localStorage.getItem('analyticsData')) {
        localStorage.setItem('analyticsData', JSON.stringify(analyticsData));
    }
}

// Track page visit
function trackPageView(page = 'home') {
    const data = JSON.parse(localStorage.getItem('analyticsData') || '{}');
    data.pageViews = (data.pageViews || 0) + 1;
    
    const today = new Date().toISOString().split('T')[0];
    data.dailyStats = data.dailyStats || {};
    data.dailyStats[today] = (data.dailyStats[today] || 0) + 1;
    
    // Track language
    const lang = getCurrentLanguage ? getCurrentLanguage() : 'en';
    data.languages = data.languages || {};
    data.languages[lang] = (data.languages[lang] || 0) + 1;
    
    localStorage.setItem('analyticsData', JSON.stringify(data));
}

// Track tracking queries
function trackTrackingQuery(trackingNumber) {
    const data = JSON.parse(localStorage.getItem('analyticsData') || '{}');
    data.trackingQueries = (data.trackingQueries || 0) + 1;
    data.shipmentsTracked = data.shipmentsTracked || {};
    data.shipmentsTracked[trackingNumber] = (data.shipmentsTracked[trackingNumber] || 0) + 1;
    
    localStorage.setItem('analyticsData', JSON.stringify(data));
}

// Track contact form submissions
function trackContactForm() {
    const data = JSON.parse(localStorage.getItem('analyticsData') || '{}');
    data.contactFormSubmissions = (data.contactFormSubmissions || 0) + 1;
    localStorage.setItem('analyticsData', JSON.stringify(data));
}

// Get analytics report
function getAnalyticsReport() {
    return JSON.parse(localStorage.getItem('analyticsData') || '{}');
}

// Track unique visitors (using session storage)
function trackUniqueVisitor() {
    if (!sessionStorage.getItem('visitorTracked')) {
        const data = JSON.parse(localStorage.getItem('analyticsData') || '{}');
        data.totalVisitors = (data.totalVisitors || 0) + 1;
        localStorage.setItem('analyticsData', JSON.stringify(data));
        sessionStorage.setItem('visitorTracked', 'true');
    }
}

// Initialize on page load
window.addEventListener('load', () => {
    initializeAnalytics();
    trackUniqueVisitor();
    trackPageView();
});
