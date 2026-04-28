// Set Budget
function setBudget() {
  let budget = document.getElementById("budgetInput").value;

  if (localStorage.getItem("budget")) {
    alert("Budget already set!");
    return;
  }

  localStorage.setItem("budget", budget);
  localStorage.setItem("balance", budget);
  window.location.href = "home.html";
}

// Navigation
function goExpense() { window.location.href = "expense.html"; }
function goIncome() { window.location.href = "income.html"; }
function goExpenseHistory() { window.location.href = "expense-history.html"; }
function goIncomeHistory() { window.location.href = "income-history.html"; }

// Add Expense
function addExpense() {
  let type = document.getElementById("type").value;
  let amount = +document.getElementById("amount").value;

  let balance = +localStorage.getItem("balance");

  balance -= amount;
  localStorage.setItem("balance", balance);

  let data = JSON.parse(localStorage.getItem("expenses")) || [];

  data.push({
    type,
    amount,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("expenses", JSON.stringify(data));
  location.reload();
}

// Add Income
function addIncome() {
  let type = document.getElementById("type").value;
  let amount = +document.getElementById("amount").value;

  let balance = +localStorage.getItem("balance");

  balance += amount;
  localStorage.setItem("balance", balance);

  let data = JSON.parse(localStorage.getItem("income")) || [];

  data.push({
    type,
    amount,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("income", JSON.stringify(data));
  alert("Income Added");
}

// Show Balance
if (document.getElementById("balance")) {
  document.getElementById("balance").innerText =
    localStorage.getItem("balance") || 0;
}

// Show Expense History
if (window.location.pathname.includes("expense-history")) {
  let data = JSON.parse(localStorage.getItem("expenses")) || [];
  let box = document.getElementById("history");

  data.forEach(item => {
    box.innerHTML += `<p>${item.type} - ₹${item.amount} <br><small>${item.date}</small></p>`;
  });
}

// Show Income History
if (window.location.pathname.includes("income-history")) {
  let data = JSON.parse(localStorage.getItem("income")) || [];
  let box = document.getElementById("history");

  data.forEach(item => {
    box.innerHTML += `<p>${item.type} - ₹${item.amount} <br><small>${item.date}</small></p>`;
  });
}