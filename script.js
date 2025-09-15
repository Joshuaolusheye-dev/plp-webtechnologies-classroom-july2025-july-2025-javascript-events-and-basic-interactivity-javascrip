// 🌗 Light/Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 🎮 Counter Game
let count = 0;
const counterBtn = document.getElementById('counterBtn');
const clickCount = document.getElementById('clickCount');

counterBtn.addEventListener('click', () => {
  count++;
  clickCount.textContent = count;
});

// ❓ Collapsible FAQ
const faqToggle = document.querySelector('.faq-toggle');
const faqAnswer = document.querySelector('.faq-answer');

faqToggle.addEventListener('click', () => {
  faqAnswer.classList.toggle('hidden');
});

// ✅ Form Validation
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Basic validation
  if (name === '') {
    formMessage.textContent = 'Name is required.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Please enter a valid email.';
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = 'Password must be at least 6 characters.';
    return;
  }

  formMessage.textContent = 'Form submitted successfully!';
  formMessage.style.color = 'green';
});
