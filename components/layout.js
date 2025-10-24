// handle nav highlighting and dropdown (used with shared.js)
document.addEventListener('DOMContentLoaded', () => {
  const user = AppState.getUser();
  const avatar = document.querySelector('[data-avatar]');
  const dropdown = document.querySelector('[data-dropdown]');
  const uname = document.querySelector('[data-user-name]');
  const email = document.querySelector('[data-user-email]');
  const role = document.querySelector('[data-user-role]');
  if (user) {
    uname.textContent = user.name;
    email.textContent = user.email;
    role.textContent = `Role: ${user.role}`;
    avatar.textContent = user.name.charAt(0).toUpperCase();
  }

  // dropdown toggle
  avatar?.addEventListener('click', e => {
    e.stopPropagation();
    dropdown?.classList.toggle('hidden');
  });
  document.addEventListener('click', e => {
    if (!dropdown?.contains(e.target) && !avatar?.contains(e.target)) dropdown?.classList.add('hidden');
  });

  // logout
  document.querySelector('[data-logout]')?.addEventListener('click', () => {
    AppState.clearUser();
    location.hash = '#/login';
  });

  // highlight active nav
  const route = location.hash.replace(/^#\//, '');
  document.querySelectorAll('a[data-nav]').forEach(a => {
    if (a.dataset.nav === route) a.classList.add('nav-active');
  });

  if (window.lucide && lucide.createIcons) lucide.createIcons();
});
