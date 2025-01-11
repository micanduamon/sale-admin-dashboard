// Revenue Chart
function initRevenueChart() {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Income',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: '#0a4d2e'
            }, {
                label: 'Expenses',
                data: [45, 49, 60, 71, 46, 45],
                backgroundColor: '#4caf50'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Performance Donut Chart
function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['View Count', 'Percentage', 'Sales'],
            datasets: [{
                data: [68, 23, 9],
                backgroundColor: [
                    '#4caf50',
                    '#0a4d2e',
                    '#ff9800'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%'
        }
    });
}

// Initialize charts when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    initRevenueChart();
    initPerformanceChart();
}); 