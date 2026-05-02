function sendCode() {
  const email = document.getElementById('emailInput').value;
  const messageBox = document.getElementById('sendCodeMessage');

  if (email === '') {
    messageBox.textContent = '❌ Please enter your email.';
    messageBox.style.color = 'red';
    return;
  }

  fetch("https://kwow4yjpu3.execute-api.us-east-1.amazonaws.com/dev/sendotp", {


    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  })
  .then(response => response.json())
  .then(data => {
    messageBox.textContent = "✅ Verification code sent successfully to " + email;
    messageBox.style.color = "green";
    console.log(data);
  })
  .catch(error => {
    messageBox.textContent = "❌ Failed to send verification code.";
    messageBox.style.color = "red";
    console.error("Error:", error);
  });
}

function verifyCode() {
  const code = document.getElementById('verificationCodeInput').value;
  const verifyMessage = document.getElementById('verifyCodeMessage');

  if (code === '') {
    verifyMessage.textContent = "❌ Please enter the verification code.";
    verifyMessage.style.color = "red";
    return;
  }

  // 🔒 Later: Add real OTP verification
  verifyMessage.textContent = "✅ Code verified successfully!";
  verifyMessage.style.color = "green";
}

// ✅ Handle signup form submit and redirect to login
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission
      alert("✅ Sign Up successful! Redirecting to login...");
      window.location.href = "login.html";
    });
  }
});