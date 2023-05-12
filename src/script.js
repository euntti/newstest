
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
    
        popupTrigger.addEventListener('click', () => {
      // 팝업 창 요소 생성
      const popupWrapper = document.createElement('div');
      popupWrapper.classList.add('popup-wrapper');
      const popup = document.createElement('div');
      popup.classList.add('popup');
      popup.innerHTML = `
        <h2>Popup Title</h2>
        <p>Popup content goes here.</p>
        <div class="popup-close">
          <a href="#">Close</a>
        </div>
      `;
      popupWrapper.appendChild(popup);
      document.body.appendChild(popupWrapper);
      
      // 팝업 창 닫기
      const popupClose = popup.querySelector('.popup-close a');
      popupClose.addEventListener('click', () => {
        document.body.removeChild(popupWrapper);
      });
      
      // 팝업 창 열기
      popupWrapper.classList.add('active');
    });
  </script>
</body>
</html>
