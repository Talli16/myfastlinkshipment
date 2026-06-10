// Initialize storage with sample data
function initializeStorage() {
    if (!localStorage.getItem('shipments')) {
        const sampleShipments = [
            {
                id: 'SHIP001',
                trackingNumber: 'SHIP001',
                from: 'New York, NY',
                to: 'Los Angeles, CA',
                status: 'In Transit',
                currentLocation: 'Chicago Distribution Center',
                estimatedDelivery: '2024-06-15',
                recipientName: 'John Doe',
                createdAt: new Date().toISOString(),
                history: [
                    { date: '2024-06-10', event: 'Picked up', location: 'New York, NY' },
                    { date: '2024-06-11', event: 'In transit', location: 'Pittsburgh, PA' },
                    { date: '2024-06-12', event: 'At distribution center', location: 'Chicago, IL' }
                ]
            },
            {
                id: 'SHIP002',
                trackingNumber: 'SHIP002',
                from: 'Seattle, WA',
                to: 'Miami, FL',
                status: 'Delivered',
                currentLocation: 'Miami, FL',
                estimatedDelivery: '2024-06-08',
                recipientName: 'Jane Smith',
                createdAt: new Date().toISOString(),
                history: [
                    { date: '2024-06-05', event: 'Picked up', location: 'Seattle, WA' },
                    { date: '2024-06-06', event: 'In transit', location: 'Denver, CO' },
                    { date: '2024-06-08', event: 'Delivered', location: 'Miami, FL' }
                ]
            }
        ];
        localStorage.setItem('shipments', JSON.stringify(sampleShipments));
    }
}

// Show specific tab
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const navItems = document.querySelectorAll('.nav-item');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    navItems.forEach(item => item.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
    
    if (tabName === 'dashboard') {
        updateDashboard();
    } else if (tabName === 'shipments') {
        displayShipments();
    } else if (tabName === 'analytics') {
        updateAnalytics();
    } else if (tabName === 'visitor-stats') {
        updateVisitorAnalytics();
    }
}

// Update dashboard
function updateDashboard() {
    const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
    
    const total = shipments.length;
    const inTransit = shipments.filter(s => s.status === 'In Transit').length;
    const delivered = shipments.filter(s => s.status === 'Delivered').length;
    const pending = shipments.filter(s => s.status === 'Pending').length;
    
    document.getElementById('totalShipments').textContent = total;
    document.getElementById('inTransit').textContent = inTransit;
    document.getElementById('delivered').textContent = delivered;
    document.getElementById('pending').textContent = pending;
    
    // Recent shipments
    const recent = shipments.slice(-5).reverse();
    const recentList = document.getElementById('recentList');
    recentList.innerHTML = recent.map(s => `
        <div class="recent-item">
            <p><strong>${s.trackingNumber}</strong> - ${s.recipientName}</p>
            <p>Status: ${s.status}</p>
            <p>From ${s.from} to ${s.to}</p>
        </div>
    `).join('');
}

// Display all shipments
function displayShipments() {
    const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
    const list = document.getElementById('shipmentsList');
    
    list.innerHTML = shipments.map(s => `
        <div class="shipment-item">
            <div class="shipment-info">
                <p><strong>${s.trackingNumber}</strong></p>
                <p>Recipient: ${s.recipientName}</p>
                <p>Route: ${s.from} → ${s.to}</p>
                <p>Status: <span style="color: #667eea; font-weight: bold;">${s.status}</span></p>
                <p>Location: ${s.currentLocation}</p>
            </div>
            <div class="shipment-actions">
                <button class="btn btn-primary" onclick="editShipment('${s.trackingNumber}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteShipment('${s.trackingNumber}')">Delete</button>
            </div>
        </div>
    `).join('');
}

// Filter shipments
function filterShipments() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
    const filtered = shipments.filter(s => s.trackingNumber.toLowerCase().includes(search));
    
    const list = document.getElementById('shipmentsList');
    list.innerHTML = filtered.map(s => `
        <div class="shipment-item">
            <div class="shipment-info">
                <p><strong>${s.trackingNumber}</strong></p>
                <p>Recipient: ${s.recipientName}</p>
                <p>Route: ${s.from} → ${s.to}</p>
                <p>Status: <span style="color: #667eea; font-weight: bold;">${s.status}</span></p>
                <p>Location: ${s.currentLocation}</p>
            </div>
            <div class="shipment-actions">
                <button class="btn btn-primary" onclick="editShipment('${s.trackingNumber}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteShipment('${s.trackingNumber}')">Delete</button>
            </div>
        </div>
    `).join('');
}

// Add new shipment
function addShipment(event) {
    event.preventDefault();
    
    const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
    
    const newShipment = {
        id: Date.now().toString(),
        trackingNumber: document.getElementById('trackingNum').value,
        from: document.getElementById('fromLocation').value,
        to: document.getElementById('toLocation').value,
        status: document.getElementById('status').value,
        currentLocation: document.getElementById('currentLocation').value,
        estimatedDelivery: document.getElementById('estimatedDelivery').value,
        recipientName: document.getElementById('recipientName').value,
        createdAt: new Date().toISOString(),
        history: [
            {
                date: new Date().toISOString().split('T')[0],
                event: 'Shipment created',
                location: document.getElementById('fromLocation').value
            }
        ]
    };
    
    shipments.push(newShipment);
    localStorage.setItem('shipments', JSON.stringify(shipments));
    
    alert('Shipment added successfully!');
    event.target.reset();
    showTab('shipments');
}

// Delete shipment
function deleteShipment(trackingNumber) {
    if (confirm('Are you sure you want to delete this shipment?')) {
        let shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
        shipments = shipments.filter(s => s.trackingNumber !== trackingNumber);
        localStorage.setItem('shipments', JSON.stringify(shipments));
        displayShipments();
    }
}

// Edit shipment (simplified)
function editShipment(trackingNumber) {
    const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
    const shipment = shipments.find(s => s.trackingNumber === trackingNumber);
    
    if (shipment) {
        const newStatus = prompt('Enter new status (Pending, In Transit, Out for Delivery, Delivered):', shipment.status);
        const newLocation = prompt('Enter current location:', shipment.currentLocation);
        
        if (newStatus && newLocation) {
            shipment.status = newStatus;
            shipment.currentLocation = newLocation;
            shipment.history.push({
                date: new Date().toISOString().split('T')[0],
                event: 'Status updated',
                location: newLocation
            });
            
            localStorage.setItem('shipments', JSON.stringify(shipments));
            alert('Shipment updated!');
            displayShipments();
        }
    }
}

// Update analytics
function updateAnalytics() {
    const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
    
    const delivered = shipments.filter(s => s.status === 'Delivered').length;
    const deliveryRate = shipments.length > 0 ? Math.round((delivered / shipments.length) * 100) : 0;
    
    document.getElementById('monthlyTotal').textContent = shipments.length;
    document.getElementById('deliveryRate').textContent = deliveryRate + '%';
    document.getElementById('avgDeliveryTime').textContent = '3-5 days';
    document.getElementById('totalRevenue').textContent = '$' + (shipments.length * 19.99).toFixed(2);
}

// Update visitor analytics
function updateVisitorAnalytics() {
    const analyticsData = JSON.parse(localStorage.getItem('analyticsData') || '{}');
    
    document.getElementById('totalVisitors').textContent = analyticsData.totalVisitors || 0;
    document.getElementById('totalPageViews').textContent = analyticsData.pageViews || 0;
    document.getElementById('totalTrackingQueries').textContent = analyticsData.trackingQueries || 0;
    document.getElementById('contactSubmissions').textContent = analyticsData.contactFormSubmissions || 0;
    
    // Language stats
    const langStats = document.getElementById('languageStats');
    const languages = analyticsData.languages || {};
    langStats.innerHTML = Object.entries(languages).map(([lang, count]) => 
        `<p>🌐 ${lang.toUpperCase()}: <strong>${count}</strong> views</p>`
    ).join('');
    
    // Top shipments
    const topShipments = document.getElementById('topShipments');
    const shipmentsTracked = analyticsData.shipmentsTracked || {};
    const sorted = Object.entries(shipmentsTracked)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    topShipments.innerHTML = sorted.length > 0
        ? sorted.map(([shipment, count]) => 
            `<p>📦 ${shipment}: <strong>${count}</strong> times tracked</p>`
          ).join('')
        : '<p>No tracking data yet</p>';
}

// Initialize on page load
window.addEventListener('load', () => {
    initializeStorage();
    updateDashboard();
});
