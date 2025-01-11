// Sample transaction data
const transactions = [
    {
        name: 'Premium T-Shirt',
        date: 'Jul 12th 2024',
        status: 'Completed',
        id: 'QJWEJS7ISNC',
        icon: '👕'
    },
    {
        name: 'Playstation 5',
        date: 'Jul 12th 2024',
        status: 'Pending',
        id: 'QJWEJS7ISNC',
        icon: '🎮'
    },
    // Add more transactions as needed
];

// Render transactions
function renderTransactions() {
    const transactionList = document.getElementById('transactionList');
    
    transactions.forEach(transaction => {
        const item = document.createElement('div');
        item.className = 'transaction-item';
        item.innerHTML = `
            <div class="transaction-icon">${transaction.icon}</div>
            <div class="transaction-info">
                <h4>${transaction.name}</h4>
                <p>${transaction.date}</p>
            </div>
            <div class="transaction-status ${transaction.status.toLowerCase()}">
                ${transaction.status}
            </div>
            <div class="transaction-id">${transaction.id}</div>
        `;
        transactionList.appendChild(item);
    });
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderTransactions();
}); 
console.log("Working")