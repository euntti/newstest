import logo from "./logo.svg";
import "./App5.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TelegramApi from "node-telegram-api";
import Modal from "react-modal";
import Progressbar from "./components/progressbar";
import Slider from "react-slick";
import { ColorRing } from "react-loader-spinner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';


const Main6 = () => {
    return <div>Main6</div>
    const Main6 = () => {
      let rollingData = [
        '서울',
        '대구',
        '부산',
        '경기',
        '울산',
        '포항',
        '전주',
        '강원',
        '대전',
        '광주',
        '제주',
        '해남'
      ];
    
      let timer = 2000;
      let first = document.getElementById('first');
      let second = document.getElementById('second');
      let third = document.getElementById('third');
      let move = 2;
      let dataCnt = 1;
      let listCnt = 1;
    
      first.innerHTML = rollingData[0];
    
      setInterval(() => {
        if(move == 2){
          first.classList.remove('card_sliding')
          first.classList.add('card_sliding_after')

          second.classList.remove('card_sliding_after')
          second.classList.add('card_sliding')

          third.classList.remove('card_sliding_after')
          third.classList.remove('card_sliding')

          move = 0
      } else if (move == 1){
          first.classList.remove('card_sliding_after')
          first.classList.add('card_sliding')

          second.classList.remove('card_sliding_after')
          second.classList.remove('card_sliding')

          third.classList.remove('card_sliding')
          third.classList.add('card_sliding_after')

          move = 2
      } else if (move == 0) {
          first.classList.remove('card_sliding_after')
          first.classList.remove('card_sliding')

          second.classList.remove('card_sliding')
          second.classList.add('card_sliding_after')

          third.classList.remove('card_sliding_after')
          third.classList.add('card_sliding')

          move = 1
      }
      
      if(dataCnt < (rollingData.length - 1)) {
          document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
              dataCnt++
      } else if(dataCnt == rollingData.length - 1) {
          document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
          dataCnt = 0
      }

      if(listCnt < 2) {
          listCnt++
      } else if (listCnt == 2) {
          listCnt = 0
      }

      console.log(listCnt)
  }, timer);
  return (
    <>
      <div id="first"></div>
      <div id="second"></div>
      <div id="third"></div>
      <div id="rolling_box"></div>
    </>
  );
};

      }

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 999,
  },
};




function App5() {


  const [users, setUsers] = useState([]);
  const [nickName, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
    let subtitle;
  const onlyNumber = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);

    if (!/^[0-9]+$/.test(keyValue)) {
      e.preventDefault();
    }
  };
  const [investmentType1, setInvestmentType1] = useState('급등종목');
  const [investmentType2, setInvestmentType2] = useState('5% 목표');
  const [investmentType3, setInvestmentType3] = useState('5백만 원');
  const [investmentType4, setInvestmentType4] = useState('안정형');

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const [check10, setCheck10] = useState(false);
  const [check11, setCheck11] = useState(false);
  const [check12, setCheck12] = useState(false);
  const [check13, setCheck13] = useState(false);
  const [check14, setCheck14] = useState(false);
  const [check15, setCheck15] = useState(false);
  const [check16, setCheck16] = useState(false);
  const [check17, setCheck17] = useState(false);
  const [check18, setCheck18] = useState(false);
  const [check19, setCheck19] = useState(false);
  const [check20, setCheck20] = useState(false);
  const [check21, setCheck21] = useState(false);
  const [check22, setCheck22] = useState(false);
  const [check23, setCheck23] = useState(false);
  const [check24, setCheck24] = useState(false);
  const [check25, setCheck25] = useState(false);
  const [check26, setCheck26] = useState(false);
  const [check27, setCheck27] = useState(false);
  const [check28, setCheck28] = useState(false);
  const [check29, setCheck29] = useState(false);
  const [check30, setCheck30] = useState(false);
  const [check31, setCheck31] = useState(false);
  const [check32, setCheck32] = useState(false);
  const [check33, setCheck33] = useState(false);

  
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(100);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);
 
  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    
    const phoneRegex = /^(010|011|016|017|018|019)-[^0][0-9]{3,4}-[0-9]{4}$/;
  
    if (phoneRegex.test(inputValue)) {
      setPhoneNumber(inputValue);
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const getCustomer = () => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  };

  const submitEvent = (e) => {
    e.preventDefault();

    if (nickName == "") {
      return alert("이름을 입력해주세요.");
    }
    if (phoneNumber == "") {
      return alert("연락처를 입력해주세요.");
    }
    if (!check1) {
      return alert("개인정보취급방침동의보기를 체크해주세요.");
    }
   
    if (!check3) {
      return alert("광고성문자동의 체크해주세요.");
    }
    if (!investmentType1) {  // investmentType1이 비어있는지 확인
      return alert("희망종목을 선택해주세요.");
    }
    if (!investmentType2) {  // investmentType2가 비어있는지 확인
      return alert("희망수익률을 선택해주세요.");
    }
    if (!investmentType3) {  // investmentType3이 비어있는지 확인
      return alert("희망수익금을 선택해주세요.");
    }
    if (!investmentType4) {  // investmentType4가 비어있는지 확인
      return alert("투자성향을 선택해주세요.");
    }

    const TELEGRAM_TOKEN = "6040101542:AAEGwQ9N-8QcXqR1PmH2yROvEWoD7MgA7TQ";
    const TELEGRAM_CHAT_ID = -1001615635884;
    const telegramApi = new TelegramApi(TELEGRAM_TOKEN);

    telegramApi.sendMessage(
      TELEGRAM_CHAT_ID,
      nickName + "님이 신청했습니다" + "폰번호는 " + phoneNumber + "희망종목" + investmentType1
      + "희망수익률" + investmentType2 + "희망수익금" + investmentType3 + "투자성향" + investmentType4
     );
    alert("[SB글로벌] '정상접수' 되었습니다. 담당자 배정후 전화드리겠습니다. 감사합니다. ");
    // console.log("as");
    // var customer = {};
    // customer.nickName = nickName;
    // customer.phoneNumber = phoneNumber;

    // axios.post("http://localhost:3000/users", customer).then((res) => {
    //   alert("등록을 성공했습니다.");
    //   getCustomer();
    // });

  };

  const sendKaKao = () => {
    window.open("https://open.kakao.com/me/shon04Se", "_blank")
    };
  
    

  useEffect(() => {
    getCustomer();
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const rollingData = [
    '김*영 010-****-8245',
    '박*주 010-****-2543',
    '최*팔 010-****-7786',
    '심*정 010-****-9406',
    '최*영 010-****-3066',
    '이*수 010-****-2657',
    '김*영 010-****-9007',
    '김*양 010-****-3025',
    '이*연 010-****-6055',
    '정*정 010-****-1059',
    '신*영 010-****-4405',
    '공*구 010-****-2034',
    '지*리 010-****-3374',
  ];
  const timer = 2000;
  let move = 2;
  let dataCnt = 1;
  let listCnt = 1;
  
  const first = document.getElementById('first');
  const second = document.getElementById('second');
  const third = document.getElementById('third');
  
  // first.children[0].innerHTML = rollingData[0];
  // second.children[0].innerHTML = rollingData[1];
  // third.children[0].innerHTML = rollingData[2];

  // first.children[0].innerHTML = rollingData[0];
  
  setInterval(() => {
    if (move === 2) {
      first.classList.remove('card_sliding');
      first.classList.add('card_sliding_after');
  
      second.classList.remove('card_sliding_after');
      second.classList.add('card_sliding');
  
      third.classList.remove('card_sliding_after');
      third.classList.remove('card_sliding');
  
      move = 0;
    } else if (move === 1) {
      first.classList.remove('card_sliding_after');
      first.classList.add('card_sliding');
  
      second.classList.remove('card_sliding_after');
      second.classList.remove('card_sliding');
  
      third.classList.remove('card_sliding');
      third.classList.add('card_sliding_after');
  
      move = 2;
    } else if (move === 0) {
      first.classList.remove('card_sliding_after');
      first.classList.remove('card_sliding');
  
      second.classList.remove('card_sliding');
      second.classList.add('card_sliding_after');
  
      third.classList.remove('card_sliding_after');
      third.classList.add('card_sliding');
  
      move = 1;
    }
  
    if (dataCnt < rollingData.length - 1) {
      document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt];
      document.getElementById('rolling_box').children[(listCnt + 1) % 3].children[0].innerHTML = rollingData[dataCnt + 1];
      document.getElementById('rolling_box').children[(listCnt + 2) % 3].children[0].innerHTML = rollingData[dataCnt + 2];

      dataCnt++;
    } else if (dataCnt === rollingData.length - 1) {
      document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt];
      document.getElementById('rolling_box').children[(listCnt + 1) % 3].children[0].innerHTML = rollingData[0];
      document.getElementById('rolling_box').children[(listCnt + 2) % 3].children[0].innerHTML = rollingData[1];

      dataCnt = 0;
    }
  
    if (listCnt < 2) {
      listCnt++;
    } else if (listCnt === 2) {
      listCnt = 0;
    }
  
    console.log(listCnt);
  }, timer);

  
  window.onload = function() {
    let radioGroups = ["chklin1", "chkline2", "chkline3", "chkline4"];

    for (let groupId of radioGroups) {
        let group = document.getElementById(groupId);
        if (group) {
          let radioButtons = group.querySelectorAll("input[type='radio']");

          for (let i = 0; i < radioButtons.length; i++) {
              radioButtons[i].style.opacity = '0';
              radioButtons[i].addEventListener('change', function() {
                  let labels = group.querySelectorAll('label');
                  for (let j = 0; j < labels.length; j++) {
                      labels[j].style.color = 'initial'; // Reset color of all labels
                      labels[j].style.backgroundColor = 'initial'; // Reset background color of all labels
                  }
                  if (this.checked) {
                      let label = this.parentNode.querySelector('label'); // Get the associated label
                      label.style.color = 'initial'; // Change color of the associated label
                      label.style.backgroundColor = 'gray'; // Change background color of the associated label
                  }
              });
          }
      } else {
          console.log('Element with ID ' + groupId + ' does not exist.');
      }
  }
}

  return (
    <div>
      <div>
      <div className="nav">
        <div>주식투자갤러리</div>
          <div>
          <div onClick={() => sendKaKao()} className="consulting">
                   <img
                    style={{ width: 302, height: "auto" }}
                    src={"/img/kakao.png"}
                    alt=""
                    />
                    </div>
          </div>
        </div>
      </div>
      <div className="box_container">
        <div className="box">
          <div className="subTitle">■ 떠오르는 이슈</div>
          <div className="inner">
            <div className="head">
              <h1 className="title">
                하루에 3분투자로 {" "}
                <p><span class="color1">" 억대 만들기 노하우는 ?"</span> </p>
             
              </h1>
            </div>
          </div>
          <div className="writer">
            <div class="writer-info">
              기자 - 김진우ㅣ 조회수 : 1202 ㅣ 날짜 :{""}
              <span id="regdate">2023-05-31</span>
            </div>
          </div>

          <div className="content-wrap">
            <div className="content">
             
              <p>
                <b>"가상화폐 3분투자로 1억씩 수익내고있어요"</b>
                <br />
                김진환 씨(50대) 인터뷰中
              </p>
              <p>
                <p>최근 부동산, 주식, 가상화폐 모두 하락장이라 손실보고 있는 분들이 많을텐데요
                    이런 하락장에서도 손실없이 큰돈 벌 수 있는 재테크 '노하우' 알려드리겠습니다. </p>

                    <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/sbmain41.png"}
                  alt=""
                />
              </p>

                제가 했던 재테크는 "가상화폐 재테크"인데요
                <p>저도 아는 지인통해 알게되었는데요 'SB그룹' 이라는 기업에서 출시한 상품이었어요!
                    방법은 아주 간단하답니다</p>
                <p><span class="color1">
                  <div>첫째. A.I 분석 프로그램으로 추천해준 코인 매수</div>
                  <div>둘째. 정해준 목표가 도달시 매도</div>
                  <div>셋째. 목표가 도달하지 않고 하락시 정해준 손절가에 손절</div></span></p>
                  <p></p>
                <p>이 3가지만 똑같이 따라하니 꾸준히 수익이 났어요</p>
                <p>가끔 하락할때가 있는데 '손절가'에 손절하면 손실이 크지 않고, 
                상승하는 경우가 더 많으니 결국 손실없이 수익을 낼 수 있었어요</p>
                
              </p>
               <p class="mainhead">
                  <b>"하루 3분 투자로 3개월 수익1억 가능한 가상화폐는? "</b>
                </p>
               <p class="imgboxbanner2">
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={"/img/stock.png"}
                  alt=""
                />
              </p>
              {/* <div class="imgdesc">[김진환씨의 최근 수익 인증]</div> */}
              <p>
               여기서 놀라지 마세요 누구나 하실수있는 간단한 투자! </p>
               <p> "3분 재테크"의 가장 큰 장점은 시간도 시간이지만
                하락장에서도 돈을 벌 수 있다는것입니다.
                대부분의 사람들이 감으로 투자하는 경우가 많은데
                 A.I 분석프로그램으로 코인을 분석 및 추천을 해주어 정확도가 매우 높은 편입니다.
                <br />이로 인해 문의가 폭주하고 있습니다.
              </p>

              <p>
                최근에 바쁜 사회속 빠르게 그렇지만 확실한 수익을 나고 싶은 고객들을 위해
                <span class="color1">"3분 투자로 1억만들기 이벤트" </span>를 진행하고 있으니 아래 링크 확인부탁드립니다. 
                {/* {"\t"}
                <b>좋은 예 라 보이며 기존 개인투자자들이 일일히 확인해야되는것과 달리 AI프로그램이 실시간으로 변동하는 
                모든 차트흐름과 시장흐름을 분석하여 높은 수익률로 보이는 추세이다.</b> */}
                
              </p>
              <div className="inputBoxs6">
                  <h1>급등종목 30일 무료제공 프로모션</h1>
                  <h3>하루 3분 투자로 1억만들기</h3>
                  <ul>
                    <li id="line01">
                      <img
                      style={{ width: "100%", height: "auto" }}
                      src="/img/loading.gif" />
                    </li>
                    <li id="line02">
                      개인정보는 암호화하여 안전하게 처리됩니다.
                    </li>
                    <li id="line03" cond="off">
                      <span> 30일 급등주 신청하기.</span>
                    </li>
                    <br />
                    <li>
                      <input
                       type="text"
                       id="f1"
                       name="user_name"
                       required=""
                       placeholder="성함을 입력하세요"
                       value={nickName}
                       maxLength={4}
                       onChange={(e) => setNickName(e.target.value)}
                      />
                    </li>
                    <li>
                      <input
                       type="number"
                        name="user_name"
                       required=""
                       placeholder="연락처를 입력하세요"
                       onkeyPress="onlyNumber(this)"
                      maxLength={13}
                      pattern="[0-9]{13}"
                       value={phoneNumber}
                       onChange={(e) => {
                         setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""));
                       }}
                      />
                    </li>
                    <li id="chklin1"> 
                    
    <label>
    <span class="label-header1">희망 항목</span>
    <div class="radio-container">
    <input
    type="radio"
    id="radio1"
    name="investmentType1"
    value="급등종목"
    checked={investmentType1 === "급등종목"}
    onChange={(e) => setInvestmentType1(e.target.value)}
    />
    <label for="radio1">급등종목</label>
</div>
<div class="radio-container">
    <input
    type="radio"
    id="radio2"
    name="investmentType1"
    value="테마종목"
    checked={investmentType1 === "테마종목"}
    onChange={(e) => setInvestmentType1(e.target.value)}
    />
    <label for="radio2">테마종목</label>
</div>
        <div class="radio-container">
       
        <input
        type="radio"
        id="radio3"
        name="investmentType1"
        value="가치투자"
        checked={investmentType1 === "가치투자"}
        onChange={(e) => setInvestmentType1(e.target.value)}
        />
       <label for="radio3">가치투자</label>
        </div>
        <div class="radio-container">
      
        <input
        type="radio"
        id="radio4"
        name="investmentType1"
        value="스윙종목"
        checked={investmentType1 === "스윙종목"}
        onChange={(e) => setInvestmentType1(e.target.value)}
        />
  <label for="radio4">스윙종목</label>
          </div>
          <div class="radio-container">
      
        <input
        type="radio"
        id="radio5"
        name="investmentType1"
        value="인공지능"
        checked={investmentType1 === "인공지능"}
        onChange={(e) => setInvestmentType1(e.target.value)}
        />
   <label for="radio5">인공지능</label>
                       </div>
                       <div class="radio-container">
                    
                       <input
        type="radio"
        id="radio6"
        name="investmentType1"
        value="단기투자"
        checked={investmentType1 === "단기투자"}
        onChange={(e) => setInvestmentType1(e.target.value)}
        />
              <label for="radio6">단기투자</label>
                       </div>
                       <div class="radio-container">
                      
                       <input
        type="radio"
        id="radio7"
        name="investmentType1"
        value="투자초보"
        checked={investmentType1 === "투자초보"}
        onChange={(e) => setInvestmentType1(e.target.value)}
        />
                     <label for="radio7">투자초보</label>
                       </div> 
                      </label>
                      </li>
                    <br />
                    <li id="chkline2">
                      <label>

                      <span class="label-header">희망 <br />수익률</span>
                      <div class="radio-container">
           
                      <input

        type="radio"
        id="radio8"
        name="investmentType2"
        value="5% 목표"
        checked={investmentType2 === "5% 목표"}
        onChange={(e) => setInvestmentType2(e.target.value)}
        />
                <label for="radio8">5%<br />목표</label>
                      </div> 
                      <div class="radio-container">
            
                       <input
        type="radio"
        id="radio9"
        name="investmentType2"
        value="10% 목표"
        checked={investmentType2 === "10% 목표"}
        onChange={(e) => setInvestmentType2(e.target.value)}
        />
                       <label for="radio9">10%<br />목표</label>
                      </div> 
                      <div class="radio-container">
                    
                       <input
        type="radio"
        id="radio10"
        name="investmentType2"
        value="15% 목표"
        checked={investmentType2 === "15% 목표"}
        onChange={(e) => setInvestmentType2(e.target.value)}
        />
                     <label for="radio10">15%<br />목표</label>
                      </div>
                      <div class="radio-container">
                     
                       <input
        type="radio"
        id="radio11"
        name="investmentType2"
        value="20% 목표"
        checked={investmentType2 === "20% 목표"}
        onChange={(e) => setInvestmentType2(e.target.value)}
        />
                     <label for="radio11">20%<br />목표</label>
                      </div>
                      <div class="radio-container">
                
                       <input
        type="radio"
        id="radio12"
        name="investmentType2"
        value="25% 목표"
        checked={investmentType2 === "25% 목표"}
        onChange={(e) => setInvestmentType2(e.target.value)}
        />
                    <label for="radio12">25%<br />목표</label>
                      </div>
                      <div class="radio-container">
               
                       <input
        type="radio"
        id="radio13"
        name="investmentType2"
        value="30% 목표"
        checked={investmentType2 === "30% 목표"}
        onChange={(e) => setInvestmentType2(e.target.value)}
        />
                     
                     <label for="radio13">30%<br />목표</label>
                      </div> 

                       </label>
                      </li>
                    <br />
                    <li id="chkline3">
                      <label>
                     <span class="label-header1">희망 <br />수익금</span>
                      <div class="radio-container">
             
                      <input
        type="radio"
        id="radio14"
        name="investmentType3"
        value="5백만 원"
        checked={investmentType3 === "5백만 원"}
        onChange={(e) => setInvestmentType3(e.target.value)}
        />
    <label for="radio14">5백만 원</label>
                        
                        </div> 
                        <div class="radio-container">
                
                             <input
        type="radio"
        id="radio15"
        name="investmentType3"
        value="1천만 원"
        checked={investmentType3 === "1천만 원"}
        onChange={(e) => setInvestmentType3(e.target.value)}
        />
            <label for="radio15">1천만 원</label>
                        
                        </div> 
                        <div class="radio-container">
                     
                       <input
        type="radio"
        id="radio16"
        name="investmentType3"
        value="3천만 원"
        checked={investmentType3 === "3천만 원"}
        onChange={(e) => setInvestmentType3(e.target.value)}
        />
                     <label for="radio16">3천만 원</label> 
                        </div> 
                        <div class="radio-container">
                      
                       <input
        type="radio"
        id="radio17"
        name="investmentType3"
        value="5천만 원"
        checked={investmentType3 === "5천만 원"}
        onChange={(e) => setInvestmentType3(e.target.value)}
        />
                  <label for="radio17">5천만 원</label>
                     </div> 
                     <div class="radio-container">

                  
                       <input
        type="radio"
        id="radio18"
        name="investmentType3"
        value="7천만 원"
        checked={investmentType3 === "7천만 원"}
        onChange={(e) => setInvestmentType3(e.target.value)}
        />
     <label for="radio18">7천만 원</label>
                     </div> 
                     <div class="radio-container">
              
                       <input
        type="radio"
        id="radio19"
        name="investmentType3"
        value="1억 원 이상"
        checked={investmentType3 === "1억 원 이상"}
        onChange={(e) => setInvestmentType3(e.target.value)}
        />
                    <label for="radio19">1억 원<br />이상</label>
                     </div> 
                       </label>
                      </li>
                    <br />
                    <li id="chkline4">
                      <label>
                      <span class="label-header1"> 투자 성향</span>
                      <div class="radio-container">
                     
                      <input
        type="radio"
        id="radio20"
        name="investmentType4"
        value="안정형"
        checked={investmentType4 === "안정형"}
        onChange={(e) => setInvestmentType4(e.target.value)}
        />
         <label for="radio20">안정형</label>
                     </div> 
                     <div class="radio-container">
          
                       <input
        type="radio"
        id="radio21"
        name="investmentType4"
        value="안정 추구형"
        checked={investmentType4 === "안정 추구형"}
        onChange={(e) => setInvestmentType4(e.target.value)}
        />
           <label for="radio21">안정<br /> 추구형</label>
                     </div> 
                     <div class="radio-container">
                    
                       <input
        type="radio"
        id="radio22"
        name="investmentType4"
        value="위험 추구형"
        checked={investmentType4 === "위험 추구형"}
        onChange={(e) => setInvestmentType4(e.target.value)}
        />
                 <label for="radio22">위험<br /> 추구형</label>
                     </div> 
                     <div class="radio-container">
               
                       <input
        type="radio"
        id="radio23"
        name="investmentType4"
        value="적극 투자형"
        checked={investmentType4 === "적극 투자형"}
        onChange={(e) => setInvestmentType4(e.target.value)}
        />
         <label for="radio23">적극<br /> 투자형</label>
                     </div> 
                     <div class="radio-container">
                     
                      <input
        type="radio"
        id="radio24"
        name="investmentType4"
        value="공격 투자형"
        checked={investmentType4 === "공격 투자형"}
        onChange={(e) => setInvestmentType4(e.target.value)}
        />
        <label for="radio24">공격 투자형</label>
                     </div> 
                       
                          
                       </label>
                      </li>
                    <br />
                    <li id="chkline">
                      <label>
                        <input
                          type="checkbox"
                          id="privacy"
                          name="agree1"
                          value="1"
                          checked={check1}
                          onChange={(e) => setCheck1(e.target.checked)}
                        />
                        개인정보취급방침동의
                            <a
                                 href="javascript:void(0);"
                                 onClick={() => setIsOpen2(true)}
                                 // onclick="privacy_pop('show', '.pop-policy',2)"
                                >
                                [보기]
                            </a>
                      </label>
                      
                      <label>
                        <input
                          type="checkbox"
                          id="privacy"
                          name="agree3"
                          value="1"
                          checked={check3}
                          onChange={(e) => setCheck3(e.target.checked)}
                        />
                        광고성문자수신동의
                <a
                  href="javascript:void(0);"
                  onClick={() => setIsOpen(true)}
                  // onclick="Popup1('show', '.popup',2)"
                >
                  [보기]
                </a>
                      </label>
                    </li>
                    <li id="smtbtn">
                      <input
                        id="btn"
                        type="submit"
                        style={{ fontSize: "18px" }}
                        value="급등종목 무료제공 이벤트 신청하기"
                        onClick={submitEvent}
                      />
                    </li>
                  </ul>
                  </div>
                <br />
        
                <div className="latest">
                  <div className="latimgbox" id="latest_list">
                    <img
                    style={{ width: "100%", height: "auto" }}
                    src={"/img/member.png"}
                    alt=""
                    />
                  </div>

                  <div class="rolling_box">
                
                    <ul id ="rolling_box"
                    style={{ width: "100%", height: "50px" }}>
                    <li class="card_sliding" id ="first"><p></p></li>
                   <li class="" id ="second"><p></p></li>
                    <li class="" id ="third"><p></p></li>
                     </ul>
                  </div>

                  {/* <table className="tablelive" >
                   <thead> */}
                    {/* <tr>
                    <th>Date</th>
                    <th>Username</th>
                    <th>Telephone</th>
                    </tr> */}
                    {/* </thead>
                  <tbody>
                    <tr>
                    <td id="date-cell-1">2023-05-26</td>
                    <td>김*영</td>
                    <td>010-****-8245</td>
                    </tr>
                    <tr>
                    <td id="date-cell-2">2023-05-26</td>
                    <td>최*필</td>
                    <td>010-****-8108</td>
                    </tr>
                    <tr>
                    <td id="date-cell-3">2023-05-26</td>
                    <td>김*우</td>
                    <td>010-****-3040</td>
                    </tr>
                    <tr>
                    <td id="date-cell-4">2023-05-26</td>
                    <td>이*영</td>
                    <td>010-****-5504</td>
                  </tr>
                  <tr>
                  <td id="date-cell-5">2023-05-26</td>
                   <td>지*우</td>
                   <td>010-****-9913</td>
                  </tr>
                  <tr>
                   <td id="date-cell-5">2023-05-26</td>
                  <td>이*현</td>
                  <td>010-****-3342</td>
                  </tr>
                   <tr>
      <td id="date-cell-6">2023-05-26</td>
      <td>구*현</td>
      <td>010-****-7050</td>
    </tr>
    <tr>
      <td id="date-cell-6">2023-05-26</td>
      <td>이*수</td>
      <td>010-****-6703</td>
    </tr>
    <tr>
      <td id="date-cell-7">2023-05-26</td>
      <td>심*우</td>
      <td>010-****-4022</td>
    </tr>
  </tbody>
</table> */}
 </div>

                <div className="talk" style={{ display: "block"}}>
                   <div className="talk1">
                   <img
                    style={{ width: 512, height: "auto" }}
                    src={"/img/talk.png"}
                    alt=""
                    />
                    </div>
                    <div className="talk2">
                    <img
                    style={{  width: "100%",height: "auto"  }}
                    src={"/img/review2.png"}
                    alt=""
                    />
                     </div>
                    </div>
                    
         <div className="footerInfo1">
          <div>상호명:(주)SB 글로벌 투자그룹 </div>
          <div>대표자:엄원택 </div>

          <div>사업자등록번호: 178-88-01858 </div>
          <div>
            소재지: 고양시 대자동 업종:증권정보교육 프로그램개발 및 판매
          </div>
        </div>
      </div>
      <h3
        style={{
          fontSize: 9,
          display: "flex",
          justifyContent: "center",
          color: "#fff",
        }}
      >
      </h3>
      
      <h4
        style={{
          fontSize: 4,
          display: "flex",
          justifyContent: "center",
          color: "#fff",
        }}
      >
       <div className="footerInfo1"> AD - 해당 정보는 참고용이며 투자에 대한 절대적인 지표가 될 수 없습니다.</div>
      </h4>

              {/* <div className="inputBoxs">
                <h1>급등종목 무료제공 오픈 프로모션</h1>
                <h3>당장 급등할 종목 받기</h3>
                <ul>
                  <li id="line01">
                    <img src="https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/loading.gif" />
                  </li>
                  <li id="line02">
                    개인정보는 암호화하여 안전하게 처리됩니다.
                  </li>
                  <li id="line03" cond="off">
                    <span>급등주를 7일동안 받아보세요.</span>
                  </li>
                  <br />
                  <li>
                    <input
                      type="text"
                      id="f1"
                      name="user_name"
                      required=""
                      placeholder="성함을 입력하세요"
                      value={nickName}
                      onChange={(e) => setNickName(e.target.value)}
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      id="f1"
                      name="user_name"
                      required=""
                      placeholder="연락처를 입력하세요"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""));
                      }}
                    />
                  </li>
                  <br />
                  <li id="chkline">
                    <label>
                      <input
                        type="checkbox"
                        id="privacy"
                        name="agree1"
                        value="1"
                        checked={check1}
                        onChange={(e) => setCheck1(e.target.checked)}
                      />
                      개인정보취급방침동의
                    </label>
                    <span
                      onClick={openModal}
                      class="txtbtn"
                      data-id="fixedbox_1"
                    >
                      보기
                    </span>
                    <label>
                      <input
                        type="checkbox"
                        id="privacy"
                        name="agree2"
                        value="1"
                        checked={check2}
                        onChange={(e) => setCheck2(e.target.checked)}
                      />
                      마케팅수신동의
                    </label>
                    <span
                      onClick={openModal}
                      class="txtbtn"
                      data-id="fixedbox_1"
                    >
                      보기
                    </span>
                    <label>
                      <input
                        type="checkbox"
                        id="privacy"
                        name="agree3"
                        value="1"
                        checked={check3}
                        onChange={(e) => setCheck3(e.target.checked)}
                      />
                      광고성문자수신동의
                    </label>
                  </li>
                  <li id="smtbtn">
                    <input
                      id="btn"
                      type="submit"
                      value="급등종목 무료제공 이벤트 신청하기"
                      onClick={submitEvent}
                    />
                  </li>
                </ul>
              </div> */}
              <div>
              {users.map((user, idx) => (
               <div key={idx} style={{ display: "flex" }}>
                <div>{user.nickName}</div>
                 <div>{user.phoneNumber}</div>
               </div>
             ))}
              </div>
            </div>
          </div>
        </div>
        <h1
        style={{
          color: "#fff",
          fontSize: 50,
          textAlign: "center",
          marginTop: 20,
        }}
      ></h1>
      <div className="imgGrid"></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          광고성 정보수신 동의 (1) 서비스 안내 및 이용권유 등 ① 제공받는 자 :
          SB글로벌 투자그룹 급등주 주식종목 ② 제공목적 : 서비스 안내 및 이용권유,
          사은·판촉행사 등의 마케팅 활동, 시장조사 및 상품·서비스 개발연구 등
          고객데이터 수집 및 관리 ③ 수집항목 : 이름, 휴대폰번호 ④ 수집 및
          이용기간 : 문의 종료일로 2년까지 회원님은 동의를 거부할 권리가 있으며
          동의 거부 시에도 서비스 이용에 제한이 없습니다. 다만 서비스 이용권유,
          판촉행사 등의 유익한 정보를 받으실 수 없습니다.
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={() => setIsOpen2(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          개인정보 제3자 제공 동의 (1) 서비스 안내 및 이용권유 등 ① 제공받는 자
          : SB글로벌 투자그룹 급등주 주식종목 ② 제공목적 : 서비스 안내 및 이용권유,
          사은·판촉행사 등의 마케팅 활동, 시장조사 및 상품·서비스 개발연구 등
          고객데이터 수집 및 관리 ③ 수집항목 : 이름, 휴대폰번호 ④ 수집 및
          이용기간 : 문의 종료일로 2년까지 회원님은 동의를 거부할 권리가 있으며
          동의 거부 시에도 서비스 이용에 제한이 없습니다. 다만 서비스 이용권유,
          판촉행사 등의 유익한 정보를 받으실 수 없습니다.
        </div>
      </Modal>
      </div>
  );
}

export default App5;

