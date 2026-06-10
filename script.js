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

// Track shipment - pulls from admin dashboard data
function trackShipment() {
    const trackingNumber = document.getElementById('trackingInput').value.trim();
    const resultDiv = document.getElementById('trackingResult');

    if (!trackingNumber) {
        resultDiv.textContent = 'Please enter a tracking number.';
        resultDiv.className = 'tracking-result info';
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
    } else {
        resultDiv.innerHTML = `
            <p>No shipment found with tracking number: <strong>${trackingNumber}</strong></p>
            <p style="font-size: 0.9rem; color: #666; margin-top: 1rem;">
                Check your tracking number or contact support at <strong>fastlinkshipment@yahoo.com</strong>
            </p>
        `;
        resultDiv.className = 'tracking-result info';
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
