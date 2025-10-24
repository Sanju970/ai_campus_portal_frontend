document.addEventListener('DOMContentLoaded', () => {
  const data = [
    { text: 'Assignment 3 due this Friday.', type: 'warning' },
    { text: 'Career Fair scheduled for next week!', type: 'info' },
    { text: 'Library book return reminder.', type: 'alert' },
  ];
  const list = document.getElementById('notifications-list');
  list.innerHTML = data.map(n => `
    <div class="border rounded-xl p-4 bg-white flex items-start gap-3">
      <i data-lucide="${n.type === 'warning' ? 'alert-triangle' : n.type === 'alert' ? 'bell' : 'info'}" 
         class="w-5 h-5 text-blue-600 mt-0.5"></i>
      <p class="text-slate-700 text-sm">${n.text}</p>
    </div>
  `).join('');
  if (window.lucide && lucide.createIcons) lucide.createIcons();
});
