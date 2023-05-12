// popup 생성
const popupWrapper = document.createElement('div');
popupWrapper.classList.add('popup-wrapper');

const popup = document.createElement('div');
popup.classList.add('popup');

const closeBtn = document.createElement('button');
closeBtn.classList.add('close-btn');
closeBtn.textContent = 'X';

popup.appendChild(closeBtn);
popupWrapper.appendChild(popup);
document.body.appendChild(popupWrapper);

// 버튼 클릭 시 팝업 토글
const popupTrigger = document.getElementById('popup-trigger');
popupTrigger.addEventListener('click', function() {
  popupWrapper.classList.toggle('active');
});
<html>
<head>
  <meta charset="utf-8" />
  <title>Popup Example</title>
</head>
<body>
  <h1>Popup Example</h1>
  <button id="popup-trigger">Open Popup</button>
  
  <script>
    const popupTrigger = document.getElementById('popup-trigger');
    
        popupTrigger.addEventListener('click', () ={
      // 팝업 창 요소 생성
      popupWrapper = document.createElement('div');
      popupWrapper.classList.add('popup-wrapper');
      const popup = document.createElement('div');
      popup.classList.add('popup');
      popup.innerHTML = `index1.html`;
      popupWrapper.appendChild(popup);
      document.body.appendChild(popupWrapper);
      
      // 팝업 창 닫기
      const popupClose = popup.querySelector('.popup-close a');
      popupClose.addEventListener('click', () =
        document.body.removeChild(popupWrapper);
      );
      
      // 팝업 창 열기
      popupWrapper.classList.add('active');
    });
  </script>
</body>
</html>
