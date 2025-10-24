document.addEventListener('DOMContentLoaded', () => {
  const user = AppState.getUser();
  const span = document.querySelector('[data-user-name]');
  if (user && span) span.textContent = user.name;
});
