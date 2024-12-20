const chatButton = document.getElementById('userchat-button');
const chatWindow = document.getElementById('userchat-window');
const chatMessages = document.getElementById('userchat-displaymsg');
const chatInput = document.getElementById('userchat-inputmsg-input');
const sendButton = document.getElementById('userchat-inputmsg-button');


// 메인 능력치 타이핑 시스템
var typed = new Typed('.typing',{
    strings: ["엔지니어링","공장 설계", "개발자", "재빠른 학습자"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 40
  });


// 채팅창 열기/닫기 토글
chatButton.addEventListener('click', () => {
if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
    chatWindow.style.display = 'flex';
} else {
    chatWindow.style.display = 'none';
}
});

// 메시지 전송
sendButton.addEventListener('click', () => {
const message = chatInput.value.trim();
if (message !== '') {
    const newMessage = document.createElement('div');
    let today = new Date();
    
    newMessage.textContent = "[" + new Date().getHours() + ":" + new Date().getMinutes() + "] " + message;
    
    chatMessages.appendChild(newMessage);
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight; // 스크롤 하단으로 이동
}
});

// Enter 키로 메시지 전송
chatInput.addEventListener('keypress', (event) => {
if (event.key === 'Enter') {
    sendButton.click();
}
});
