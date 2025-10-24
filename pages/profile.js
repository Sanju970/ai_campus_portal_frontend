document.addEventListener('DOMContentLoaded', () => {
  const u = AppState.getUser();
  document.querySelector('[data-profile-name]').textContent = u?.name || 'User';
  document.querySelector('[data-profile-email]').textContent = u?.email || 'user@campus.edu';
  document.querySelector('[data-profile-role]').textContent = u?.role || 'student';
  document.getElementById('logout-btn').addEventListener('click', () => {
    AppState.clearUser();
    location.hash = '#/login';
  });
});
