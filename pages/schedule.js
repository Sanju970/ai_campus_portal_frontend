document.addEventListener('DOMContentLoaded', () => {
  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
  const timeSlots = Array.from({length: 11}, (_,i)=> 8 + i); // 8AM - 6PM

  // Demo mock events (same as screenshot)
  const schedule = [
    { title:'Computer Science 101', type:'class', day:'Monday', startTime:'09:00', endTime:'10:30', location:'Room 204, Science Building' },
    { title:'English Literature',   type:'class', day:'Monday', startTime:'14:00', endTime:'15:30', location:'Room 301, Arts Building' },
    { title:'Computer Science 101', type:'class', day:'Wednesday', startTime:'09:00', endTime:'10:30', location:'Room 204, Science Building' },
    { title:'Mathematics 201',      type:'class', day:'Wednesday', startTime:'11:00', endTime:'12:30', location:'Room 105, Math Building' },
    { title:'Mathematics 201',      type:'class', day:'Thursday',  startTime:'11:00', endTime:'12:30', location:'Room 105, Math Building' },
    { title:'Study Group',          type:'event', day:'Thursday',  startTime:'13:00', endTime:'14:00', location:'Library, Room 203' },
    { title:'English Literature',   type:'class', day:'Friday',    startTime:'14:00', endTime:'15:30', location:'Room 301, Arts Building' },
    { title:'Physics Lab',          type:'meeting', day:'Wednesday', startTime:'16:00', endTime:'18:00', location:'Lab 5, Science Building' },
  ];

  const elTimes = document.querySelector('[data-times]');
  const listView = document.querySelector('[data-mode="list"]');

  // Fill time labels
  elTimes.innerHTML = timeSlots.map(h => {
    const label = `${(h%12)||12}${h<12?'AM':'PM'}`;
    return `<div class="border-b pr-2 flex items-start justify-end pt-1 text-xs text-slate-500">${label}</div>`;
  }).join('');

  document.querySelectorAll('[data-day]').forEach(col => {
    col.innerHTML = timeSlots.map(()=>`<div class="border-b"></div>`).join('') + `<div class="absolute inset-0 pointer-events-none"></div>`;
  });

  function typeColor(t){
    return {class:'bg-blue-500', meeting:'bg-orange-500', event:'bg-emerald-500', exam:'bg-rose-500'}[t] || 'bg-slate-500';
  }
  function calcStyle(ev){
    const [sh,sm] = ev.startTime.split(':').map(Number);
    const [eh,em] = ev.endTime.split(':').map(Number);
    const startOffsetHrs = (sh - 8) + (sm/60);
    const durHrs = (eh - sh) + (em - sm)/60;
    return { top: `${startOffsetHrs * 4}rem`, height: `${durHrs * 4}rem` };
  }

  function renderCalendar(){
    days.forEach(day => {
      const overlay = document.querySelector(`[data-day="${day}"] > .absolute`);
      overlay.innerHTML = '';
      schedule.filter(e=>e.day===day).forEach(ev=>{
        const chip = document.createElement('div');
        chip.className = `absolute left-1 right-1 text-white rounded-md p-2 overflow-hidden event-chip ${typeColor(ev.type)}`;
        const s = calcStyle(ev);
        chip.style.top = s.top;
        chip.style.height = s.height;
        chip.innerHTML = `
          <div class="text-[11px] leading-tight">
            <div class="font-medium truncate">${ev.title}</div>
            <div class="opacity-90">${ev.startTime} - ${ev.endTime}</div>
            ${ev.location ? `<div class="opacity-80 truncate">${ev.location}</div>`:''}
          </div>`;
        overlay.appendChild(chip);
      });
    });
  }

  renderCalendar();
  if (window.lucide && lucide.createIcons) lucide.createIcons();
});
