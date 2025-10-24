document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('announcement-list');
  const data = [
    { title: 'Exam Schedule Released', date: 'Oct 25, 2025', detail: 'Mid-semester exams will begin from Nov 2.' },
    { title: 'Library Timings Extended', date: 'Oct 22, 2025', detail: 'Library now open till 10 PM for study sessions.' },
    { title: 'Workshop: Resume Building', date: 'Oct 20, 2025', detail: 'Sign up at Career Services desk to participate.' },
  ];

  list.innerHTML = data.map(a => `
    <div class="announcement-card border rounded-xl p-5 bg-white">
      <h3 class="font-semibold mb-1">${a.title}</h3>
      <p class="text-xs text-slate-500 mb-2">${a.date}</p>
      <p class="text-slate-600 text-sm">${a.detail}</p>
    </div>
  `).join('');

  if (window.lucide && lucide.createIcons) lucide.createIcons();
});
