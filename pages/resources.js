document.addEventListener('DOMContentLoaded', () => {
  const resources = [
    { title: 'AI Chat Assistant', desc: 'Ask questions and get instant academic help.', icon: 'bot' },
    { title: 'Course Finder', desc: 'Search and enroll in new courses easily.', icon: 'search' },
    { title: 'Career Guide', desc: 'Get personalized career advice and paths.', icon: 'briefcase' },
  ];
  const list = document.getElementById('resources-list');

  list.innerHTML = resources.map(r => `
    <div class="resource-card border rounded-xl p-5 bg-white hover:shadow">
      <i data-lucide="${r.icon}" class="w-5 h-5 text-purple-600 mb-3"></i>
      <h3 class="font-semibold">${r.title}</h3>
      <p class="text-slate-500 text-sm">${r.desc}</p>
    </div>
  `).join('');

  if (window.lucide && lucide.createIcons) lucide.createIcons();
});
