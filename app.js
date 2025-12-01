
window.onload = ()=> {
  setTimeout(()=> {
    document.getElementById('loading-screen').style.display='none';
    document.getElementById('app').style.display='block';
  }, 1500);
};

function startChat(){
  document.getElementById('home').style.display='none';
  document.getElementById('chat').style.display='block';
}

function sendMsg(){
  let msg = document.getElementById('msg').value;
  if(!msg.trim()) return;
  let box = document.getElementById('messages');
  box.innerHTML += `<p><strong>You:</strong> ${msg}</p>`;
  setTimeout(()=> {
    box.innerHTML += `<p><strong>Santa:</strong> Ho Ho Ho! I love your message!</p>`;
  }, 800);
}
