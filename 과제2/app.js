// modal-btn, modal-overlay, close-btn 선택합니다
let modalBtn = document.querySelector('.modal-btn');
let modalOverlay = document.querySelector('.modal-overlay');
let closeBtn = document.querySelector('.close-btn');

// modal-btn 및 close-btn에서 클릭 이벤트를 수신합니다
// 사용자가 modal-btn을 클릭하면 modal- overlay에 .open- modal를 추가합니다
modalBtn.addEventListener('click',function(){
    modalOverlay.classList.add('open-modal')
})

// 사용자가 close-btn을 클릭하면 modal- overlay에서 .open- modal를 제거합니다
closeBtn.addEventListener('click',function(){
    modalOverlay.classList.remove('open-modal')
})
