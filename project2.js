let transactions = [];
let balance = 0;

// Function to update the balance
function updateBalance() {
    const remainingBalanceElement = document.getElementById('remainingBalance');
    remainingBalanceElement.textContent = `$${balance.toFixed(2)}`;
}

// Function to add a transaction
function addTransaction() {
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    if (!amount || !description) {
        alert('Please fill in both amount and description.');
        return;
    }

    const transaction = {
        description: description,
        amount: amount,
        category: category
    };

    // Update balance
    if (category === 'income') {
        balance += amount;
    } else {
        balance -= amount;
    }

    // Add transaction to array
    transactions.push(transaction);

    // Clear input fields
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = 'income';

    // Display transactions
    displayTransactions();

    // Update balance
    updateBalance();
}

// Function to display transactions
function displayTransactions() {
    const transactionsTable = document.getElementById('transactions').getElementsByTagName('tbody')[0];
    transactionsTable.innerHTML = '';

    transactions.forEach(transaction => {
        const row = transactionsTable.insertRow();

        const descriptionCell = row.insertCell(0);
        descriptionCell.textContent = transaction.description;

        const amountCell = row.insertCell(1);
        amountCell.textContent = `$${transaction.amount.toFixed(2)}`;

        const categoryCell = row.insertCell(2);
        categoryCell.textContent = transaction.category;
    });
}
