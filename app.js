
function goHome(){
 document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'));
 document.querySelector('.hero').classList.remove('hidden');
}

document.getElementById('certificateBtn').onclick=()=>{
 document.querySelector('.hero').classList.add('hidden');
 document.getElementById('certificateScreen').classList.remove('hidden');
};

document.getElementById('generateCert').onclick=()=>{
 const name=document.getElementById('certName').value||"Super Star";
 const c=document.getElementById('certCanvas');
 const ctx=c.getContext('2d');
 ctx.fillStyle="#fff"; ctx.fillRect(0,0,800,600);
 ctx.fillStyle="#b5121b"; ctx.font="48px serif";
 ctx.fillText("Nice List Certificate", 180,150);
 ctx.fillStyle="#5a080c"; ctx.font="38px serif";
 ctx.fillText(name, 320,300);
 document.getElementById('downloadCert').classList.remove('hidden');
};

document.getElementById('downloadCert').onclick=()=>{
 const c=document.getElementById('certCanvas');
 const link=document.createElement('a');
 link.download="certificate.png";
 link.href=c.toDataURL();
 link.click();
};

document.getElementById('voicemailBtn').onclick=()=>{
 document.querySelector('.hero').classList.add('hidden');
 document.getElementById('voicemailScreen').classList.remove('hidden');
};

document.getElementById('playVM').onclick=()=>{
 const n=document.getElementById('vmName').value||"buddy";
 const m=document.getElementById('vmText').value||"Santa is proud of you!";
 const u=new SpeechSynthesisUtterance(`Ho Ho Ho! Hello ${n}! ${m}`);
 speechSynthesis.speak(u);
};

document.getElementById('themeBtn').onclick=()=>{
 document.querySelector('.hero').classList.add('hidden');
 document.getElementById('themeScreen').classList.remove('hidden');
};
