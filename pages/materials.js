document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('materials-list');
  const materials = [
    { name: 'Digital Signal Processing Notes', subject: 'ECE301', type: 'PDF' },
    { name: 'Machine Learning Slides', subject: 'CSE410', type: 'PPT' },
    { name: 'Data Structures Lab Manual', subject: 'CSE205', type: 'DOC' },
  ];

  list.innerHTML = materials.map(m => `
    <div class="material-card border rounded-xl p-5 bg-white hover:shadow">
      <i data-lucide="file-text" class="w-5 h-5 text-blue-600 mb-2"></i>
      <h3 class="font-medium">${m.name}</h3>
      <p class="text-sm text-slate-500">${m.subject}</p>
      <p class="text-xs text-slate-400 mb-3">${m.type}</p>
      <button class="text-sm text-blue-600 hover:underline">Download</button>
    </div>
  `).join('');

  if (window.lucide && lucide.createIcons) lucide.createIcons();
});
