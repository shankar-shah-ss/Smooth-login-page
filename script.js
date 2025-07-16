const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Add smooth panel switching with proper timing
signUpButton.addEventListener("click", () => {
  if (!container.classList.contains("right-panel-active")) {
    container.classList.add("right-panel-active");
  }
});

signInButton.addEventListener("click", () => {
  if (container.classList.contains("right-panel-active")) {
    container.classList.remove("right-panel-active");
  }
});

// Add smooth focus effects for inputs
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus', () => {
    input.style.transform = 'scale(1.02)';
  });
  
  input.addEventListener('blur', () => {
    input.style.transform = 'scale(1)';
  });
});

// Add click effects for buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.transform = 'translateY(-1px) scale(0.98)';
  });
  
  button.addEventListener('mouseup', () => {
    button.style.transform = 'translateY(-2px) scale(1)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0) scale(1)';
  });
});