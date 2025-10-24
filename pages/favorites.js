document.addEventListener('DOMContentLoaded', () => {
  const favs = [
    { title: 'Machine Learning Slides', category: 'Material' },
    { title: 'AI Chat Assistant', category: 'Tool' },
  ];
  const list = document.getElementById('favorites-list');
  list.innerHTML = favs.map(f => `
    <div class="border rounded-xl p-5 bg-white hover:shadow">
      <i data-lucide="heart" class="w-5 h-5 text-rose-600 mb-2"></i>
      <h3 class="font-medium">${f.title}</h3>
      <p class="text-xs text-slate-500">${f.category}</p>
    </div>
  `).join('');
  if (window.lucide && lucide.createIcons) lucide.createIcons();
});
