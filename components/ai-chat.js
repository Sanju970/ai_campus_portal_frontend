document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('ai-toggle');
  const box = document.getElementById('ai-chat-box');
  const close = document.getElementById('ai-close');
  const send = document.getElementById('ai-send');
  const input = document.getElementById('ai-input');
  const messages = document.getElementById('ai-messages');

  const appendMsg = (text, fromAI = false) => {
    const div = document.createElement('div');
    div.className = `${fromAI ? 'bg-blue-50 text-blue-800' : 'bg-slate-100 text-slate-800'} p-2 rounded-lg`;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  };

  toggle?.addEventListener('click', () => box.classList.toggle('hidden'));
  close?.addEventListener('click', () => box.classList.add('hidden'));

  send?.addEventListener('click', () => {
    const val = input.value.trim();
    if (!val) return;
    appendMsg(val, false);
    input.value = '';
    setTimeout(() => appendMsg('🤖 This is a demo AI response.', true), 600);
  });

  input?.addEventListener('keypress', e => {
    if (e.key === 'Enter') send.click();
  });
});
