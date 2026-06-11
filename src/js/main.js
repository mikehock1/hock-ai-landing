// Smooth scroll for in-page navigation links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Email signup form validation and submission
const signupForm = document.getElementById('signup-form');

if (signupForm) {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const successMessage = document.getElementById('form-success');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  signupForm.addEventListener('submit', (event) => {
    const emailValue = emailInput.value.trim();

    if (!emailValue || !emailPattern.test(emailValue)) {
      event.preventDefault();
      emailInput.classList.add('invalid');
      emailError.textContent = 'Please enter a valid email address.';
      return;
    }

    emailInput.classList.remove('invalid');
    emailError.textContent = '';
    successMessage.classList.add('visible');
  });

  emailInput.addEventListener('input', () => {
    emailInput.classList.remove('invalid');
    emailError.textContent = '';
  });
}
