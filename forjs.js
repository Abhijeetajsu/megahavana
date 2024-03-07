function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errorDiv = document.getElementById('error');
  // Replace this with actual validation
  if (username === 'your_username' && password === 'your_password') {
    // Redirect to main page or do something else
    alert('Login successful!');
    // Show the content after login
    document.getElementById('content').style.display = 'block';
    return true;
  } else {
    // Display error message
    errorDiv.innerText = 'Invalid username or password.';
    return false;
  }
}
