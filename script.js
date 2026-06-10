// Smooth scroll to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toggle service details
function toggleServiceDetails(serviceId) {
    const element = document.getElementById(serviceId);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

// Global map variable
let map = null;
let marker = null;

// Location coordinates for major US cities (for demo)
const cityCoordinates = {
    'New York, NY': [40.7128, -74.0060],
    'Los Angeles, CA': [34.0522, -118.2437],
    'Chicago, IL': [41.8781, -87.6298],
    'Pittsburgh, PA': [40.4406, -79.9959],
    'Denver, CO': [39.7392, -104.9903],
    'Seattle, WA': [47.6062, -122.3321],
    'Miami, FL': [25.7617, -80.1918],
    'Chicago Distribution Center': [41.8781, -87.6298],
    'Los Angeles Distribution Center': [34.0522, -118.2437],
    'Miami Distribution Center': [25.7617, -80.1918],
};

// Track shipment - pulls from admin dashboard data
function trackShipment() {
    const trackingNumber = document.getElementById('trackingInput').value.trim();
    const resultDiv = document.getElementById('trackingResult');
    const mapContainer = document.getElementById('mapContainer');

    if (!trackingNumber) {
        resultDiv.textContent = 'Please enter a tracking number.';
        resultDiv.className = 'tracking-result info';
        mapContainer.style.display = 'none';
        return;
    }

    // Get shipments from localStorage
    const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
    const shipment = shipments.find(s => s.trackingNumber === trackingNumber);

    if (shipment) {
        let html = `
            <h3>Tracking Number: ${shipment.trackingNumber}</h3>
            <p><strong>Status:</strong> ${shipment.status}</p>
            <p><strong>Current Location:</strong> ${shipment.currentLocation}</p>
            <p><strong>Estimated Delivery:</strong> ${shipment.estimatedDelivery}</p>
            <p><strong>Recipient:</strong> ${shipment.recipientName}</p>
            <hr style="margin: 1rem 0; border: none; border-top: 1px solid #ddd;">
            <h4>Shipment History:</h4>
            <ul style="list-style: none; text-align: left; display: inline-block;">
        `;

        if (shipment.history && shipment.history.length > 0) {
            shipment.history.forEach(step => {
                html += `
                    <li style="margin: 0.5rem 0; padding: 0.5rem; border-left: 3px solid #667eea; padding-left: 1rem;">
                        <strong>${step.date}</strong> - ${step.event} (${step.location})
                    </li>
                `;
            });
        }

        html += '</ul>';
        resultDiv.innerHTML = html;
        resultDiv.className = 'tracking-result success';
        
        // Show and initialize map
        mapContainer.style.display = 'block';
        setTimeout(() => {
            initializeMap(shipment);
        }, 100);
    } else {
        resultDiv.innerHTML = `
            <p>No shipment found with tracking number: <strong>${trackingNumber}</strong></p>
            <p style="font-size: 0.9rem; color: #666; margin-top: 1rem;">
                Try: <strong>SHIP001</strong> or <strong>SHIP002</strong><br>
                Or contact support at <strong>fastlinkshipment@yahoo.com</strong>
            </p>
        `;
        resultDiv.className = 'tracking-result info';
        mapContainer.style.display = 'none';
    }
}

// Initialize map with shipment location
function initializeMap(shipment) {
    const mapElement = document.getElementById('map');
    
    // Get coordinates for current location
    const coords = cityCoordinates[shipment.currentLocation] || cityCoordinates['Chicago, IL'];
    
    // Remove existing map if present
    if (map) {
        map.remove();
    }
    
    // Create new map
    map = L.map('map').setView(coords, 6);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add marker for current location
    if (marker) {
        map.removeLayer(marker);
    }
    
    marker = L.marker(coords).addTo(map)
        .bindPopup(`
            <div style="text-align: center;">
                <strong>${shipment.trackingNumber}</strong><br>
                ${shipment.currentLocation}<br>
                Status: ${shipment.status}
            </div>
        `)
        .openPopup();
    
    // Add route markers if history exists
    if (shipment.history && shipment.history.length > 1) {
        shipment.history.forEach((step, index) => {
            const stepCoords = cityCoordinates[step.location] || coords;
            L.circleMarker(stepCoords, {
                radius: 5,
                fillColor: index === shipment.history.length - 1 ? '#667eea' : '#999',
                color: '#667eea',
                weight: 2,
                opacity: 0.7,
                fillOpacity: 0.7
            }).addTo(map)
            .bindPopup(`${step.event} - ${step.date}`);
        });
    }
}

// Submit contact form
function submitForm(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.querySelector('input[placeholder="Your Name"]').value;
    const email = form.querySelector('input[placeholder="Your Email"]').value;
    const subject = form.querySelector('input[placeholder="Subject"]').value;
    const message = form.querySelector('textarea').value;

    // Mock form submission
    console.log('Form submitted:', { name, email, subject, message });

    // Show success message
    alert(`Thank you, ${name}! Your message has been received by Fastlink Shipment.\nWe'll get back to you at ${email} soon.`);

    // Reset form
    form.reset();
}

// Handle smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Allow Enter key for tracking
document.getElementById('trackingInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        trackShipment();
    }
});
