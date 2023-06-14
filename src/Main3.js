
import "./App2.css";
import React from "react"
import TelegramApi from "node-telegram-api";
import { useState, useEffect } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Progressbar from "./components/progressbar";
import Slider from "react-slick";
import { ColorRing } from "react-loader-spinner";
import AnimatedNumbers from "react-animated-numbers";
import axios from "axios";
import useDidMountEffect from "./hooks/useDidMountEffect";
import Modal from "react-modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    // right: "auto",
    // bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Main3 = () => {
  return <div>Main3</div>
}

function App2() {
  axios.defaults.baseURL = "https://sbstock.co.kr";
  const [userName31, setUserName31] = useState("");
  const [phone31, setPhone31] = useState("");
  const handlePhoneNumberChange = (e) => {
    let formattedNumber = e.target.value.replace(/-/g, ""); // 하이픈 제거
    if (formattedNumber.length > 2 && formattedNumber.length < 6) {
      formattedNumber = formattedNumber.replace(/(\d{3})(\d{1,3})/, "$1-$2"); // 첫 번째 하이픈 추가
    } else if (formattedNumber.length >= 6) {
      formattedNumber = formattedNumber.replace(/(\d{3})(\d{3})(\d{0,4})/, "$1-$2-$3"); // 첫 번째와 두 번째 하이픈 추가
    }
    setPhone31(formattedNumber);

    const inputValue = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    setPhone31 (inputValue);
  };

  const [investmentType31, setInvestmentType31] = useState('급등종목');
  const [investmentType32, setInvestmentType32] = useState('5% 목표');
  const [investmentType33, setInvestmentType33] = useState('5백만 원');
  const [investmentType34, setInvestmentType34] = useState('안정형');



  const [num31, setNum31] = useState(331231);
  const [time31, setTime31] = useState("");

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [progress, setProgress] = useState(0);
  const insertHistory = () => {
    const visitReq = {
      visitUrl: document.referrer,
    };

    axios.post("/visit", visitReq).then((res) => {
      console.log("res==", res);
    });
  };

  useDidMountEffect(() => {
    insertHistory();
  }, []);
  useEffect(() => {
    insertHistory();
  }, []);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(100);
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const submitEvent = (e) => {
    e.preventDefault();
    if (userName31 == "") {
      return alert("이름을 입력해주세요.");
    }
    if (phone31 == "") {
      return alert("'-'없이 입력을 해주세요.");
    }
    if (time31 == "") {
      return alert("통화시간 선택해주세요");
    }
    if (!investmentType31) {  // investmentType1이 비어있는지 확인
      return alert("희망종목을 선택해주세요.");
    }
    if (!investmentType32) {  // investmentType2가 비어있는지 확인
      return alert("희망수익률을 선택해주세요.");
    }
    if (!investmentType33) {  // investmentType3이 비어있는지 확인
      return alert("희망수익금을 선택해주세요.");
    }
    if (!investmentType34) {  // investmentType4가 비어있는지 확인
      return alert("투자성향을 선택해주세요.");
    }
    if (!check1) {
      return alert("개인정보취급방침동의보기를 체크해주세요.");
    }
    // if (!check2) {
    //   return alert("마케팅수신동의보기를 체크해주세요.");
    // }
    if (!check3) {
      return alert("광고성문자동의 체크해주세요.");
    }

    const phoneNumber = `${phone31}`;
    const name = `${userName31}`;
    const selectedTime = `${time31}`;
    const investmentType31 = `${investmentType31}`;
    const investmentType32 = `${investmentType32}`;
    const investmentType33 = `${investmentType33}`;
    const investmentType34 = `${investmentType34}`;
    const param = {
      phoneNumber31: phoneNumber,
      name31: name,
      time31: selectedTime,
      investmentType31:investmentType31,
      investmentType32:investmentType32,
      investmentType33:investmentType33,
      investmentType34:investmentType34
    };

    axios.post("/client", param).then((res) => {
      console.log("res=", res);
    });

    // const TELEGRAM_TOKEN = "5964017003:AAH3LVmpPgezxLrs2-q53OLpYVdbCIybqjk";
    // const TELEGRAM_CHAT_ID = -1001643618319; // your telegram chat ID
    const TELEGRAM_TOKEN = "5981900899:AAEBTRzH4VUrWbKLWoaBEgc6wJRdLgpj8r0";
    const TELEGRAM_CHAT_ID = -1001985551986;
    const telegramApi = new TelegramApi(TELEGRAM_TOKEN);
    telegramApi.sendMessage(
      TELEGRAM_CHAT_ID,
      `sb글로벌 ${userName31} 휴대폰 번호 ${phone31}님이 신청하였습니다. 통화가능한 시간은 ${time31} 입니다. `
    );
    alert("[SB글로벌] '정상접수' 되었습니다. 담당자 배정후 전화드리겠습니다. 감사합니다.");
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  window.onload = function() {
    let radioGroups = ["chklin31", "chkline32", "chkline33", "chkline34"];

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
    <div
      style={{
        backgroundImage: isMobile
          ? `url("/img/inbox.png")`
          : `url("/img/inbox.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // width: "auto",
        height: "3000px",
      }}
    >
      <div className="container31">
        <div className="sub31">
          <div className="App31">
            <div className="appPictureContainer31">
              {isBrowser ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <img
                    className="appPicture"
                    src={"/img/logo.png"}
                    // style={{ width: 800, height: 1023, marginLeft: 20 }}
                    alt="logo "
                  /> */}
                  <img
                    src={"/img/theme1.png"}
                    // style={{ width: 800, height: 1023, marginLeft: 20 }}
                    alt="logo "
                  />
                  {/* <img
                    src={"/img/theme2.png"}
                    // style={{ width: 800, height: 1023, marginLeft: 20 }}
                    alt="logo "
                  />{" "} */}
                  {/* <img
                    style={{ width: 500 }}
                    src={"/img/theme4.png"}
                    // style={{ width: 800, height: 1023, marginLeft: 20 }}
                    alt="logo "
                  /> */}
                  {/* <div
                    style={{ color: "#fff", fontSize: 30, margin: "30px 0" }}
                  >
                    1억만들기 프로젝트 30일 무료체험 신청하세요
                  </div> */}
                </div>
              ) : (
                // <img
                //   className="appPicture"
                //   src={"/img/ms.jpeg"}
                //   // style={{ width: 800, height: 1023, marginLeft: 20 }}
                //   alt="logo "
                // />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <img
                    className="appPicture"
                    src={"/img/logo.png"}
                    // style={{ width: 800, height: 1023, marginLeft: 20 }}
                    alt="logo "
                  /> */}
                  <img
                    style={{ width: 400 }}
                    src={"/img/bg2.png"}
                    // style={{ width: 800, height: 1023, marginLeft: 20 }}
                    alt="logo "
                  />
                  {/* <img
                    style={{ width: 300 }}
                    src={"/img/theme2.png"}
                    // style={{ width: 800, height: 1023, marginLeft: 20 }}
                    alt="logo "
                  />{" "} */}
                  {/* <img
                    style={{ width: 300 }}
                    src={"/img/theme4.png"}
                    // style={{ width: 800, height: 1023, marginLeft: 20 }}
                    alt="logo "
                  /> */}
                  {/* <div
                    style={{ color: "#fff", fontSize: 20, margin: "30px 0" }}
                  >
                    1억만들기 프로젝트 30일 무료체험 신청하세요
                  </div> */}
                </div>
              )}
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div
        style={{ display: "block", position: "relative", textAlign: "center" }}
      >
        <Slider {...settings}>
          {/* <div>
            <ColorRing
              visible={true}
              height="160"
              width="160"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
            <div style={{ color: "#fff", fontSize: 35 }}>Loading....</div>
          </div> */}
          {/* <div
            style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
          >
            {isBrowser ? (
              <>
                <Progressbar value={progress} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 25,
                  }}
                >
                  <h2
                    style={{
                      fontSize: 35,
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                    }}
                  >
                    신청자 수
                  </h2>
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={num}
                    fontStyle={{ fontSize: 40, color: "#FFFFFF" }}
                    locale="en-US"
                    configs={[{ mass: 1, tension: 220, friction: 100 }]}
                  />
                  <h2
                    style={{
                      fontSize: 35,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    명
                  </h2>
                </div>
                <div style={{ fontSize: 25, color: "#fffc02 " }}>
                  거래량 , 주식시장 , 언론이슈, 기업공시 분석완료
                </div>
              </>
            ) : (
              <>
                <div style={{ width: 300 }}>
                  <Progressbar value={progress} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 25,
                  }}
                >
                  <h2
                    style={{
                      fontSize: 35,
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                    }}
                  >
                    신청자 수
                  </h2>
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={num}
                    fontStyle={{ fontSize: 40, color: "#FFFFFF" }}
                    locale="en-US"
                    configs={[{ mass: 1, tension: 220, friction: 100 }]}
                  />
                  <h2
                    style={{
                      fontSize: 35,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    명
                  </h2>
                </div>
                <div style={{ fontSize: 25, color: "#fffc02 " }}>
                  거래량 , 주식시장 , 언론이슈, 기업공시 분석완료
                </div>
              </>
            )}
          </div> */}
          <div className="sbdiv3">
            <div className="nameArea31">
              {/* <div className="nameArea">
              <input
                type="text"
                className="username"
                placeholder="이름"
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div> */}
              <div className="namephone31">
                {/* {<select>
                <option key="1" value="1">
                  010
                </option> 
              </select>{" "}
              -{"\t"}} */}
                <input
                  type="text"
                  className="username31"
                  placeholder="이름"
                  maxLength={4}
                  onChange={(e) => setUserName31(e.target.value)}
                />
              </div>
              {"\t"}
              <div className="phone31">
                <input
                       type="tel"
                       name="user_name31"
                       placeholder="휴대폰"
                       maxLength={13}
                       value={phone31}
                       onChange={handlePhoneNumberChange}
                      />
              </div>
              <div className="time31">
                <select value={time31} onChange={(e) => setTime31(e.target.value)}>
                  <option value="">통화가능시간(필수)</option>
                  <option value="06:00-09:00">06:00-09:00</option>
                  <option value="09:00-11:00">09:00-11:00</option>
                  <option value="11:00-13:00">11:00-13:00</option>
                  <option value="13:00-15:00">13:00-15:00</option>
                  <option value="15:00-17:00">15:00-17:00</option>
                  <option value="17:00-19:00">17:00-19:00</option>
                  <option value="19:00-21:00">19:00-21:00</option>
                  <option value="21:00-23:00">21:00-23:00</option>
                  <option value="23:00-06:00">23:00-06:00</option>
                </select>
               
              </div>
            </div>
            <div class="total3">
            <li id="chklin31">
                      <label>
           
    <span class="label-header31">희망 <br /> 항목</span>
    <div class="radio-container3">
    <input
    type="radio"
    id="radio1"
    name="investmentType31"
    value="급등종목"
    checked={investmentType31 === "급등종목"}
    onChange={(e) => setInvestmentType31(e.target.value)}
    />
    <label for="radio1">급등<br /> 종목</label>
</div>
<div class="radio-container3">
    <input
    type="radio"
    id="radio2"
    name="investmentType31"
    value="테마종목"
    checked={investmentType31 === "테마종목"}
    onChange={(e) => setInvestmentType31(e.target.value)}
    />
    <label for="radio2">테마<br /> 종목</label>
</div>
        <div class="radio-container3">
       
        <input
        type="radio"
        id="radio3"
        name="investmentType31"
        value="가치투자"
        checked={investmentType31 === "가치투자"}
        onChange={(e) => setInvestmentType31(e.target.value)}
        />
       <label for="radio3">가치<br /> 투자</label>
        </div>
        <div class="radio-container3">
      
        <input
        type="radio"
        id="radio4"
        name="investmentType31"
        value="스윙종목"
        checked={investmentType31 === "스윙종목"}
        onChange={(e) => setInvestmentType31(e.target.value)}
        />
  <label for="radio4">스윙<br /> 종목</label>
          </div>
          <div class="radio-container3">
      
        <input
        type="radio"
        id="radio5"
        name="investmentType31"
        value="인공지능"
        checked={investmentType31 === "인공지능"}
        onChange={(e) => setInvestmentType31(e.target.value)}
        />
   <label for="radio5">인공<br /> 지능</label>
                       </div>
                       <div class="radio-containe3">
                    
                       <input
        type="radio"
        id="radio6"
        name="investmentType31"
        value="단기투자"
        checked={investmentType31 === "단기투자"}
        onChange={(e) => setInvestmentType31(e.target.value)}
        />
              <label for="radio6">단기<br /> 투자</label>
                       </div>
                       <div class="radio-container3">
                      
                       <input
        type="radio"
        id="radio7"
        name="investmentType31"
        value="투자초보"
        checked={investmentType31 === "투자초보"}
        onChange={(e) => setInvestmentType31(e.target.value)}
        />
                     <label for="radio7">투자<br /> 초보</label>
                       </div> 
                      </label>
                      </li>
                    <br />
                   
                   
                    <li id="chkline32">
                      <label>

                      <span class="label-header31">희망 <br />수익률</span>
                      <div class="radio-container3">
           
                      <input

        type="radio"
        id="radio8"
        name="investmentType32"
        value="5% 목표"
        checked={investmentType32 === "5% 목표"}
        onChange={(e) => setInvestmentType32(e.target.value)}
        />
                <label for="radio8">5%<br />목표</label>
                      </div> 
                      <div class="radio-container3">
            
                       <input
        type="radio"
        id="radio9"
        name="investmentType32"
        value="10% 목표"
        checked={investmentType32 === "10% 목표"}
        onChange={(e) => setInvestmentType32(e.target.value)}
        />
                       <label for="radio9">10%<br />목표</label>
                      </div> 
                      <div class="radio-container3">
                    
                       <input
        type="radio"
        id="radio10"
        name="investmentType32"
        value="15% 목표"
        checked={investmentType32 === "15% 목표"}
        onChange={(e) => setInvestmentType32(e.target.value)}
        />
                     <label for="radio10">15%<br />목표</label>
                      </div>
                      <div class="radio-container3">
                     
                       <input
        type="radio"
        id="radio11"
        name="investmentType32"
        value="20% 목표"
        checked={investmentType32 === "20% 목표"}
        onChange={(e) => setInvestmentType32(e.target.value)}
        />
                     <label for="radio11">20%<br />목표</label>
                      </div>
                      <div class="radio-container3">
                
                       <input
        type="radio"
        id="radio12"
        name="investmentType32"
        value="25% 목표"
        checked={investmentType32 === "25% 목표"}
        onChange={(e) => setInvestmentType32(e.target.value)}
        />
                    <label for="radio12">25%<br />목표</label>
                      </div>
                      <div class="radio-container3">
               
                       <input
        type="radio"
        id="radio13"
        name="investmentType32"
        value="30% 목표"
        checked={investmentType32 === "30% 목표"}
        onChange={(e) => setInvestmentType32(e.target.value)}
        />
                     
                     <label for="radio13">30%<br />목표</label>
                      </div> 

                       </label>
                      </li>
                    <br />
                   
                    <li id="chkline33">
                      <label>
                     <span class="label-header31">희망 <br />수익금</span>
                      <div class="radio-container3">
             
                      <input
        type="radio"
        id="radio14"
        name="investmentType33"
        value="5백만 원"
        checked={investmentType33 === "5백만 원"}
        onChange={(e) => setInvestmentType33(e.target.value)}
        />
    <label for="radio14">5백만 원</label>
                        
                        </div> 
                        <div class="radio-container3">
                
                             <input
        type="radio"
        id="radio15"
        name="investmentType33"
        value="1천만 원"
        checked={investmentType33 === "1천만 원"}
        onChange={(e) => setInvestmentType33(e.target.value)}
        />
            <label for="radio15">1천만 원</label>
                        
                        </div> 
                        <div class="radio-container3">
                     
                       <input
        type="radio"
        id="radio16"
        name="investmentType33"
        value="3천만 원"
        checked={investmentType33 === "3천만 원"}
        onChange={(e) => setInvestmentType33(e.target.value)}
        />
                     <label for="radio16">3천만 원</label> 
                        </div> 
                        <div class="radio-container3">
                      
                       <input
        type="radio"
        id="radio17"
        name="investmentType33"
        value="5천만 원"
        checked={investmentType33 === "5천만 원"}
        onChange={(e) => setInvestmentType33(e.target.value)}
        />
                  <label for="radio17">5천만 원</label>
                     </div> 
                     <div class="radio-container3">

                  
                       <input
        type="radio"
        id="radio18"
        name="investmentType33"
        value="7천만 원"
        checked={investmentType33 === "7천만 원"}
        onChange={(e) => setInvestmentType33(e.target.value)}
        />
     <label for="radio18">7천만 원</label>
                     </div> 
                     <div class="radio-container3">
              
                       <input
        type="radio"
        id="radio19"
        name="investmentType33"
        value="1억 원 이상"
        checked={investmentType33 === "1억 원 이상"}
        onChange={(e) => setInvestmentType33(e.target.value)}
        />
                    <label for="radio19">1억 원<br />이상</label>
                     </div> 
                       </label>
                      </li>
                    <br />
                   
                    <li id="chkline34">
                      <label>
                      <span class="label-header31"> 투자 성향</span>
                      <div class="radio-container3">
                     
                      <input
        type="radio"
        id="radio20"
        name="investmentType34"
        value="안정형"
        checked={investmentType34 === "안정형"}
        onChange={(e) => setInvestmentType34(e.target.value)}
        />
         <label for="radio20">안정형</label>
                     </div> 
                     <div class="radio-container3">
          
                       <input
        type="radio"
        id="radio21"
        name="investmentType34"
        value="안정 추구형"
        checked={investmentType34 === "안정 추구형"}
        onChange={(e) => setInvestmentType34(e.target.value)}
        />
           <label for="radio21">안정<br /> 추구형</label>
                     </div> 
                     <div class="radio-container3">
                    
                       <input
        type="radio"
        id="radio22"
        name="investmentType4"
        value="위험 추구형"
        checked={investmentType34 === "위험 추구형"}
        onChange={(e) => setInvestmentType34(e.target.value)}
        />
                 <label for="radio22">위험<br /> 추구형</label>
                     </div> 
                     <div class="radio-container3">
               
                       <input
        type="radio"
        id="radio23"
        name="investmentType34"
        value="적극 투자형"
        checked={investmentType34 === "적극 투자형"}
        onChange={(e) => setInvestmentType34(e.target.value)}
        />
         <label for="radio23">적극<br /> 투자형</label>
                     </div> 
                     <div class="radio-container3">
                     
                      <input
        type="radio"
        id="radio24"
        name="investmentType34"
        value="공격 투자형"
        checked={investmentType34 === "공격 투자형"}
        onChange={(e) => setInvestmentType34(e.target.value)}
        />
        <label for="radio24">공격 <br /> 투자형</label>
                     </div> 
                       
                          
                       </label>
                      </li>
                    <br />
                   
                    </div>
            <div style={{ marginLeft: 10 }}>
              <label style={{ color: "#fff" }}>
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
              {/* <label style={{ color: "#fff" }}>
                <input
                  type="checkbox"
                  id="privacy"
                  name="agree2"
                  value="1"
                  checked={check2}
                  onChange={(e) => setCheck2(e.target.checked)}
                />
                마케팅수신동의
              </label> */}
              <label style={{ color: "#fff" }}>
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
            </div>
            <div className="btnArea31">
              <button onClick={(e) => submitEvent(e)}>
                {isBrowser ? (
                  <img src={"/img/btn.gif"}></img>
                ) : (
                  <img style={{ width: "390px" }} src={"/img/btn.gif"}></img>
                )}
              </button>
            </div>
          </div>
        </Slider>
        {/* <div className="profit">
          {isBrowser ? (
            <img src={"/img/titleprofit.png"}></img>
          ) : (
            <img style={{ width: "390px" }} src={"/img/mtitleprofit.png"}></img>
          )}
        </div> */}
        {/* <div className="profit1">
          <img src={"/img/profit.jpeg"}></img>
        </div> */}
        <div className="footerInfo31">
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
        (AD)
      </h3>
      <h4
        style={{
          fontSize: 9,
          display: "flex",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        해당 정보는 참고용이며 투자에 대한 절대적인 지표가 될 수 없습니다.
      </h4>
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

export default App2;
