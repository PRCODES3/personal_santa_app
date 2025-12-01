
function goHome() {
  document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
  document.getElementById('hero').classList.remove('hidden');
}

document.getElementById('certificateBtn').onclick = () => {
  document.getElementById('hero').classList.add('hidden');
  document.getElementById('certificateScreen').classList.remove('hidden');
};

document.getElementById('generateCert').onclick = () => {
  const name = document.getElementById('certName').value || "Super Star";
  const canvas = document.getElementById('certCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "#fff";
  ctx.fillRect(0,0,800,600);
  ctx.fillStyle = "#b5121b";
  ctx.font = "48px serif";
  ctx.fillText("Nice List Certificate", 200,150);
  ctx.fillStyle = "#5a080c";
  ctx.font = "40px serif";
  ctx.fillText(name, 320,300);
  document.getElementById('downloadCert').classList.remove('hidden');
};

document.getElementById('downloadCert').onclick = () => {
  const canvas = document.getElementById('certCanvas');
  const link = document.createElement('a');
  link.download = "nice-list-certificate.png";
  link.href = canvas.toDataURL();
  link.click();
};

document.getElementById('voicemailBtn').onclick = () => {
  document.getElementById('hero').classList.add('hidden');
  document.getElementById('voicemailScreen').classList.remove('hidden');
};

document.getElementById('playVM').onclick = () => {
  const name = document.getElementById('vmName').value || "buddy";
  const msg = document.getElementById('vmText').value || "Santa is proud of you!";
  const utter = new SpeechSynthesisUtterance(`Ho Ho Ho! Hello ${name}! ${msg}`);
  speechSynthesis.speak(utter);
};

document.getElementById('themeBtn').onclick = () => {
  document.getElementById('hero').classList.add('hidden');
  document.getElementById('themeScreen').classList.remove('hidden');
};
