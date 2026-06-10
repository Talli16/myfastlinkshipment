// Professional Email Notification System
const emailConfig = {
    apiKey: 'demo-key', // Replace with SendGrid/Mailgun key
    sender: 'fastlinkshipment@yahoo.com'
};

// Email Templates
const emailTemplates = {
    shipmentCreated: {
        subject: 'Your Shipment #{trackingNumber} Has Been Created',
        template: `
            <h2>Shipment Confirmation</h2>
            <p>Your shipment has been successfully registered in our system.</p>
            <p><strong>Tracking Number:</strong> {trackingNumber}</p>
            <p><strong>From:</strong> {from}</p>
            <p><strong>To:</strong> {to}</p>
            <p><strong>Estimated Delivery:</strong> {deliveryDate}</p>
            <p>Track your shipment: <a href="#">Track Now</a></p>
        `
    },
    shipmentDispatched: {
        subject: 'Your Shipment #{trackingNumber} Has Been Dispatched',
        template: `
            <h2>Shipment Dispatched</h2>
            <p>Great news! Your shipment is on its way.</p>
            <p><strong>Tracking Number:</strong> {trackingNumber}</p>
            <p><strong>Current Location:</strong> {location}</p>
            <p><strong>Status:</strong> In Transit</p>
        `
    },
    shipmentDelivered: {
        subject: 'Your Shipment #{trackingNumber} Has Been Delivered',
        template: `
            <h2>Delivery Confirmation</h2>
            <p>Your shipment has been successfully delivered!</p>
            <p><strong>Tracking Number:</strong> {trackingNumber}</p>
            <p><strong>Delivered To:</strong> {recipient}</p>
            <p><strong>Delivery Date:</strong> {deliveryDate}</p>
        `
    }
};

// Send notification email
function sendNotificationEmail(type, emailData) {
    const template = emailTemplates[type];
    if (!template) return false;
    
    let html = template.template;
    Object.keys(emailData).forEach(key => {
        html = html.replace(new RegExp(`{${key}}`, 'g'), emailData[key]);
    });
    
    // Log for demo (replace with actual API call)
    console.log('📧 Email would be sent:', {
        to: emailData.email,
        subject: template.subject,
        html: html
    });
    
    return true;
}

// Track email events
function logEmailEvent(type, data) {
    let events = JSON.parse(localStorage.getItem('emailEvents') || '[]');
    events.push({
        type: type,
        data: data,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('emailEvents', JSON.stringify(events));
}

// Send shipment notifications
function notifyShipmentCreated(shipment) {
    sendNotificationEmail('shipmentCreated', {
        trackingNumber: shipment.trackingNumber,
        from: shipment.from,
        to: shipment.to,
        deliveryDate: shipment.estimatedDelivery,
        email: shipment.recipientName
    });
    logEmailEvent('shipment_created', shipment);
}

function notifyShipmentDispatched(shipment) {
    sendNotificationEmail('shipmentDispatched', {
        trackingNumber: shipment.trackingNumber,
        location: shipment.currentLocation,
        email: shipment.recipientName
    });
    logEmailEvent('shipment_dispatched', shipment);
}

function notifyShipmentDelivered(shipment) {
    sendNotificationEmail('shipmentDelivered', {
        trackingNumber: shipment.trackingNumber,
        recipient: shipment.recipientName,
        deliveryDate: new Date().toISOString().split('T')[0],
        email: shipment.recipientName
    });
    logEmailEvent('shipment_delivered', shipment);
}
