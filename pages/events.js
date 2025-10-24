document.addEventListener('DOMContentLoaded', () => {
  const events = [
    { title: 'AI & Robotics Workshop', date: 'Nov 26, 2025', place: 'Tech Block Hall 2' },
    { title: 'Cultural Fest 2025', date: 'Dec 3, 2025', place: 'Open Grounds' },
    { title: 'Startup Pitch Night', date: 'Dec 10, 2025', place: 'Innovation Lab' },
  ];

  const list = document.getElementById('event-list');
  if (!list) return;

  list.innerHTML = events.map(ev => `
    <div class="event-card border rounded-xl p-6 bg-white">
      <i data-lucide="calendar-days" class="w-5 h-5 text-blue-600 mb-3"></i>
      <h3 class="font-semibold text-lg mb-1">${ev.title}</h3>
      <p class="text-slate-500 text-sm">${ev.date}</p>
      <p class="text-slate-400 text-xs mb-3">${ev.place}</p>
      <button class="text-sm bg-blue-600 text-white rounded px-3 py-1 hover:bg-blue-700">Register</button>
    </div>
  `).join('');

  if (window.lucide && lucide.createIcons) lucide.createIcons();
});
