const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');
const passwordStrengthBar = document.getElementById('password-strength-bar-inner');
const passwordAlert = document.getElementById('password-alert');


showPasswordCheckbox.addEventListener('change', () => {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});


passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = getPasswordStrength(password);
    updatePasswordStrengthBar(strength);
    updatePasswordAlert(strength);
  });
  
  function getPasswordStrength(password) {
    let strength = 0;
  
    if (password.length >= 8) {
      strength += 1;
    }
  
    if (password.match(/[A-Z]/)) {
      strength += 1;
    }
  
    if (password.match(/[a-z]/)) {
      strength += 1;
    }
  
    if (password.match(/[0-9]/)) {
      strength += 1;
    }
  
    if (password.match(/[^A-Za-z0-9]/)) {
      strength += 1;
    }
  
    return strength;
  }
  
  function updatePasswordStrengthBar(strength) {
    let width = 0;
  
    if (strength === 1) {
      width = 20;
    } else if (strength === 2) {
      width = 40;
    } else if (strength === 3) {
      width = 60;
    } else if (strength === 4) {
      width = 80;
    } else if (strength === 5) {
      width = 100;
    }
  
    passwordStrengthBar.style.width = `${width}%`;
  }
  
  function updatePasswordAlert(strength) {
    let message = '';
  
    if (strength === 1) {
      message = 'Weak';
    } else if (strength === 2) {
      message = 'Medium';
    } else if (strength === 3 || strength === 4 || strength === 5) {
      message = 'Strong';
    }
  
    passwordAlert.textContent = `Password strength: ${message}`;
  }
function checkPasswordStrength() {
  var password = document.getElementById("password").value;

  // Check each policy and update the color
  if (password.length >= 8) {
    document.getElementById("policy-length").classList.add("met");
  } else {
    document.getElementById("policy-length").classList.remove("met");
  }

  if (password.match(/[A-Z]/)) {
    document.getElementById("policy-uppercase").classList.add("met");
  } else {
    document.getElementById("policy-uppercase").classList.remove("met");
  }

  if (password.match(/[a-z]/)) {
    document.getElementById("policy-lowercase").classList.add("met");
  } else {
    document.getElementById("policy-lowercase").classList.remove("met");
  }

  if (password.match(/[0-9]/)) {
    document.getElementById("policy-number").classList.add("met");
  } else {
    document.getElementById("policy-number").classList.remove("met");
  }

  if (password.match(/[^A-Za-z0-9]/)) {
    document.getElementById("policy-special").classList.add("met");
  } else {
    document.getElementById("policy-special").classList.remove("met");
  }
}

function generateStrongPassword() {
    var password = "";
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialCharacters = "!@#$%^&*()_+";
  
    // Ensure password has at least one character from each category
    password += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
    password += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
  
    // Fill the rest of the password with random characters from all categories
    var allCharacters = lowerCaseLetters + upperCaseLetters + numbers + specialCharacters;
    for (var i = 0; i < 8; i++) {
      password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
  
    // Shuffle the password to ensure randomness
    password = shuffleString(password);
  
    document.getElementById("password").value = password;
    checkPasswordStrength();
  }
  
  // Function to shuffle a string
  function shuffleString(str) {
    var arr = str.split('');
    var n = arr.length;
  
    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
  
    return arr.join('');
  }