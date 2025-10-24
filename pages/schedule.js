function initSchedulePage() {
  console.log("✅ schedule page initialized");

  const schedule = [
    { title: "Math Lecture", day: "Monday", start: "09:00", end: "10:30", color: "bg-blue-500" },
    { title: "English Seminar", day: "Tuesday", start: "11:00", end: "12:30", color: "bg-green-500" },
    { title: "AI Lab", day: "Wednesday", start: "14:00", end: "15:30", color: "bg-purple-500" },
    { title: "Project Meeting", day: "Thursday", start: "16:00", end: "17:00", color: "bg-orange-500" },
    { title: "Sports Practice", day: "Friday", start: "10:00", end: "11:30", color: "bg-rose-500" },
  ];

  const timeColumn = document.querySelector("[data-times]");
  const dayColumns = document.querySelectorAll("[data-day]");
  const viewButtons = document.querySelectorAll("[data-view]");
  const listSection = document.querySelector('[data-mode="list"]');
  const calendarSection = document.querySelector('[data-mode="calendar"]');
  const addBtn = document.querySelector("[data-open-dialog]");

  // fill time column
  const times = Array.from({ length: 10 }, (_, i) => `${8 + i}:00`);
  timeColumn.innerHTML = times.map(t => `<div class="h-16 border-b px-2 text-xs text-slate-500">${t}</div>`).join("");

  // draw grid slots
  dayColumns.forEach(col => {
    col.innerHTML = times.map(() => `<div class="h-16 border-b relative"></div>`).join("");
  });

  // place events
  schedule.forEach(ev => {
    const col = document.querySelector(`[data-day="${ev.day}"]`);
    if (!col) return;
    const [sh, sm] = ev.start.split(":").map(Number);
    const [eh, em] = ev.end.split(":").map(Number);
    const offset = ((sh - 8) + sm / 60) * 4; // rem offset from top
    const height = ((eh - sh) + (em - sm) / 60) * 4;
    const el = document.createElement("div");
    el.className = `absolute left-1 right-1 rounded-md text-white text-[11px] p-2 ${ev.color}`;
    el.style.top = `${offset}rem`;
    el.style.height = `${height}rem`;
    el.innerHTML = `<div class="font-medium">${ev.title}</div><div class="opacity-80">${ev.start}–${ev.end}</div>`;
    col.appendChild(el);
  });

  // toggle list/calendar
  viewButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.view;
      viewButtons.forEach(b => b.classList.remove("bg-slate-900", "text-white"));
      btn.classList.add("bg-slate-900", "text-white");
      if (mode === "list") {
        calendarSection.classList.add("hidden");
        listSection.classList.remove("hidden");
        renderListView();
      } else {
        listSection.classList.add("hidden");
        calendarSection.classList.remove("hidden");
      }
    });
  });

  function renderListView() {
    const html = schedule
      .map(ev => `
        <div class="border rounded-lg p-3 flex justify-between items-center">
          <div>
            <div class="font-semibold">${ev.title}</div>
            <div class="text-slate-500 text-sm">${ev.day}, ${ev.start}–${ev.end}</div>
          </div>
          <div class="text-xs text-white px-2 py-1 rounded ${ev.color}">${ev.day}</div>
        </div>
      `)
      .join("");
    listSection.innerHTML = html;
  }

  // Add-event demo (no backend)
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      alert("🧩 Add Event clicked — backend integration pending!");
    });
  }

  if (window.lucide && lucide.createIcons) lucide.createIcons();
}
