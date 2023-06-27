import "./App8.css";
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
import CertiModal from "./components/certimodal/CertiModal";

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

const Main9 = () => {
  return <div>Main9</div>
}

function App8() {
  axios.defaults.baseURL = "https://sbstock.co.kr";
  const [userName9, setUserName9] = useState("");
  const [phone19, setPhone19] = useState("");
  const handlePhoneNumberChange = (e) => {
    let formattedNumber = e.target.value.replace(/-/g, ""); // 하이픈 제거
    if (formattedNumber.length > 2 && formattedNumber.length < 6) {
      formattedNumber = formattedNumber.replace(/(\d{3})(\d{1,3})/, "$1-$2"); // 첫 번째 하이픈 추가
    } else if (formattedNumber.length >= 6) {
      formattedNumber = formattedNumber.replace(/(\d{3})(\d{3})(\d{0,4})/, "$1-$2-$3"); // 첫 번째와 두 번째 하이픈 추가
    }
    setPhone19(formattedNumber);

    const inputValue = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    setPhone19(inputValue);
  };

  

  const [num, setNum] = useState(331231);
  const [time9, setTime9] = useState("");

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
    if (userName9 == "") {
      return alert("이름을 입력해주세요.");
    }
    if (phone19 == "") {
      return alert("'-'없이 입력을 해주세요.");
    }
    if (time9 == "") {
      return alert("통화시간 선택해주세요");
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

    const phoneNumber = `${phone19}`;
    const name = `${userName9}`;
    const selectedTime = `${time9}`;
    const param = {
      phoneNumber19: phoneNumber,
      name99: name,
      time99: selectedTime,
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
      `sb글로벌 ${userName9} 휴대폰 번호 ${phone19}님이 신청하였습니다. 통화가능한 시간은 ${time9} 입니다. `
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
  const [imageWidth, setImageWidth] = useState('150px'); // 초기값으로 원하는 크기를 설정

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth; // 브라우저의 너비를 가져옴
      if (width <= 422) {
        setImageWidth('100px'); // 모바일 장치에 맞는 크기로 변경
      } else {
        setImageWidth('150px'); // 다른 화면 크기에 대한 기본 크기로 변경
      }
    };
  
    handleResize(); // 초기 로드 시에도 크기를 설정하기 위해 호출
  
    window.addEventListener('resize', handleResize); // 화면 크기가 변경될 때 크기를 다시 설정
  
    return () => {
      window.removeEventListener('resize', handleResize); // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    };
  }, []);
  
  return (
    
    <div>
    <div
      style={{
        backgroundImage: isMobile ? `url("/img/bg2.png")` : `url("/img/bg2.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // width: isMobile ? "100vw" : "1300px", // For mobile screens, use 100% of the viewport width
        // height: isMobile ? "130vh" : "2400px", // For mobile screens, use 100% of the viewport height
    }}
    >
    <div className="container9">
        <div className="sub9">
            <div className="App9">
            <div className="appPictureContainer9" style={{ textAlign: "center" }}>
    <img
        style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "85%",
            height: "auto",
            objectFit: "contain"
        }}
        src={"/img/day.gif"}
        alt="logo"
    />
</div>

                <div></div>
            </div>
        </div>
    </div>
    <div
        style={{ display: "block", position: "relative", textAlign: "center" }}
    > 
    
    
       <div className="bottom-bar9">
            <div className="nameArea9" style={{ marginLeft: 200 }}>
              {/* <div className="nameArea">
              <input
                type="text"
                className="username"
                placeholder="이름"
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div> */}
              <div className="namephone9 ">
                {/* {<select>
                <option key="1" value="1">
                  010
                </option> 
              </select>{" "}
              -{"\t"}} */}
                <input
                  type="text"
                  className="username9"
                  placeholder="이름"
                  maxLength={4}
                  onChange={(e) => setUserName9(e.target.value)}
                />
              </div>
              {"\t"}
              <div className="phone9">
                <input
                       type="tel"
                       name="user_name9"
                       placeholder="휴대폰"
                       maxLength={13}
                       value={phone19}
                       onChange={handlePhoneNumberChange}
                      />
              </div>
              {/* <div className="time9">
                <select value={time9} onChange={(e) => setTime9(e.target.value)}>
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
               
              </div> */}
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
            </div>
            <div className="btnArea9">
    <button onClick={(e) => submitEvent(e)}>
      {isBrowser ? (
        <img src={"/img/click.gif"} style={{ width: imageWidth, paddingRight: "400px" }}></img>
      ) : (
        <img style={{ width: imageWidth, paddingRight: "400px" }} src={"/img/click.gif"}></img>
      )}
    </button>
            </div>
          </div>
     </div>
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
        <div className="footerInfo" style={{ textAlign: "center" }}>
    <div>상호명:(주)SB 글로벌 투자그룹</div>
    <div>대표자:엄원택</div>
    <div>사업자등록번호: 178-88-01858</div>
    <div>소재지: 고양시 대자동 업종:증권정보교육 프로그램개발 및 판매</div>
</div>
<h3 style={{ fontSize: 9, textAlign: "center", color: "#fff" }}>(AD)</h3>
<h4 style={{ fontSize: 9, textAlign: "center", color: "#fff" }}>
    해당 정보는 참고용이며 투자에 대한 절대적인 지표가 될 수 없습니다.
</h4>
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

export default App8;