// let balance = parseInt(localStorage.getItem("balance")) || 20000;
// let pin = localStorage.getItem("pin") || "2233";

// function startATM() {
//   document.getElementById("menu").style.display = "block";
//   document.getElementById("startBtn").style.display = "none";
//   showMessage("ATM Started. Welcome!", true);
// }

// function showAction(id, title) {
//   document.querySelectorAll(".action").forEach(div => (div.style.display = "none"));
//   document.getElementById(id).style.display = "block";
//   document.getElementById("actionTitle").innerText = title;
//   document.getElementById("msg").innerText = "";
// }

// function withdrawCash() {
//   const enteredPin = getInput("wpin");
//   const amount = parseInt(getInput("wamt"));
//   if (!validatePin(enteredPin)) return;
//   if (!validateAmount(amount)) return;
//   if (amount > balance) return showMessage("Insufficient balance 🚫", false);

//   balance -= amount;
//   updateStorage();
//   showMessage(`Withdrawn ₹${amount}. New balance: ₹${balance}`, true);
//   resetInputs("wpin", "wamt");
// }

// function depositCash() {
//   const enteredPin = getInput("dpin");
//   const amount = parseInt(getInput("damt"));
//   if (!validatePin(enteredPin)) return;
//   if (!validateAmount(amount)) return;

//   balance += amount;
//   updateStorage();
//   showMessage(`Deposited ₹${amount}. New balance: ₹${balance}`, true);
//   resetInputs("dpin", "damt");
// }

// function checkBalance() {
//   const enteredPin = getInput("bpin");
//   if (!validatePin(enteredPin)) return;
//   showMessage(`Current balance: ₹${balance}`, true);
//   resetInputs("bpin");
// }

// function changePin() {
//   const current = getInput("cpin");
//   const new1 = getInput("npin1");
//   const new2 = getInput("npin2");

//   if (!validatePin(current)) return;
//   if (new1.length < 3 || new1 !== new2)
//     return showMessage("PINs must match and be at least 3 digits", false);

//   pin = new1;
//   updateStorage();
//   showMessage("PIN successfully changed 🔐", true);
//   resetInputs("cpin", "npin1", "npin2");
// }

// function exitATM() {
//   if (confirm("Exit ATM?")) {
//     document.getElementById("menu").style.display = "none";
//     document.getElementById("startBtn").style.display = "block";
//     document.querySelectorAll(".action").forEach(div => (div.style.display = "none"));
//     document.getElementById("actionTitle").innerText = "";
//     showMessage("ATM exited. Start again to continue.", true);
//   }
// }

// function showMessage(message, isSuccess) {
//   const msg = document.getElementById("msg");
//   msg.innerText = message;
//   msg.className = isSuccess ? "success" : "error";
// }

// function updateStorage() {
//   localStorage.setItem("balance", balance);
//   localStorage.setItem("pin", pin);
// }

// function resetInputs(...ids) {
//   ids.forEach(id => (document.getElementById(id).value = ""));
// }

// function getInput(id) {
//   return document.getElementById(id).value.trim();
// }

// function validatePin(inputPin) {
//   if (inputPin !== pin) {
//     showMessage("Incorrect PIN ❌", false);
//     return false;
//   }
//   return true;
// }

// function validateAmount(amount) {
//   if (isNaN(amount) || amount <= 0) {
//     showMessage("Invalid amount ⚠️", false);
//     return false;
//   }
//   return true;
// }
