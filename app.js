
window.onload=()=> {
  setTimeout(()=> {
    document.getElementById('loading-screen').style.display='none';
    document.getElementById('app').style.display='block';
  },1500);
};

function startChat(){
  document.getElementById('home').style.display='none';
  document.getElementById('chat').style.display='block';
}

function sendMsg(){
  let m=document.getElementById('msg').value;
  if(!m.trim()) return;
  document.getElementById('messages').innerHTML += `<p><b>You:</b> ${m}</p>`;
  setTimeout(()=>{
      document.getElementById('messages').innerHTML += `<p><b>Santa:</b> Ho Ho Ho! That’s wonderful!</p>`;
  },800);
}

function unlock(){
 alert("Premium Unlocked!");
}
