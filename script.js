function redirectToLogin() {
  alert("Redirecting to login...");
  window.location.href = "login.html"; // 👈 this line does the redirection
}

function redirectToSignup() {
  alert("Redirecting to signup...");
  window.location.href = "signup.html";
}

function requireLogin() {
  alert("Please log in to access this feature.");
}

function goToPage(page) {
  window.location.href = page;
}

function sendVerificationCode() {
  const email = document.getElementById("emailInput").value;
  const messageBox = document.getElementById("sendCodeMessage");

  if (!email) {
    messageBox.textContent = "❌ Please enter your email first.";
    messageBox.style.color = "red";
    return;
  }

  // 🔗 Call the Lambda function through API Gateway
  fetch("https://kwow4yjpu3.execute-api.us-east-1.amazonaws.com/dev/sendotp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email })
  })
  .then(response => response.json())
  .then(data => {
    console.log("✅ OTP Sent:", data);
    messageBox.textContent = "✅ Verification code sent successfully!";
    messageBox.style.color = "green";
  })
  .catch(error => {
    console.error("❌ Error:", error);
    messageBox.textContent = "❌ Failed to send code.";
    messageBox.style.color = "red";
  });
}
function verifyCode() {
  const code = document.getElementById("verificationCodeInput").value;
  const verifyMessage = document.getElementById("verifyCodeMessage");

  if (!code) {
    verifyMessage.textContent = "❌ Please enter the verification code.";
    verifyMessage.style.color = "red";
    return;
  }

  // 🧠 Later: Backend check for the correct code
  verifyMessage.textContent = "✅ Code verified successfully!";
  verifyMessage.style.color = "green";
}

// ✅ Login form handling
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual submission

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      // 💡 You can add validation or real authentication later
      if (email && password) {
        alert("✅ Login successful! Redirecting to Dashboard...");
        window.location.href = "dashboard.html"; // Change this to your actual dashboard page
      } else {
        alert("❌ Please fill in both email and password.");
      }
    });
  }
});