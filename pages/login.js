// attach login logic for the plain HTML page
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('login-submit');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const email = document.getElementById('login-email').value.trim() || 'user@campus.edu';
    const name  = email.split('@')[0];
    const role  = (document.getElementById('login-role').value || 'student').toLowerCase();

    // store in shared AppState defined in shared.js
    AppState.setUser({ name, email, role });

    // redirect to home; app.js will render header + AI chat automatically
    location.hash = '#/home';
  });
});
