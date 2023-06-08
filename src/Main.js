import "./App.css";
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

function App() {
  axios.defaults.baseURL = "https://sbstock.co.kr";
  const [userName, setUserName] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const onlyNumber = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);

    if (!/^[0-9]+$/.test(keyValue)) {
      e.preventDefault();
    }
  };

  const [num, setNum] = useState(331231);
  const [time, setTime] = useState("");

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
    if (userName == "") {
      return alert("이름을 입력해주세요.");
    }
    if (phone1 == "") {
      return alert("'-'없이 입력을 해주세요.");
    }
    if (time == "") {
      return alert("통화시간 선택해주세요");
    }

    const phoneNumber = `${phone1}`;
    const name = `${userName}`;
    const selectedTime = `${time}`;
    const param = {
      phoneNumber: phoneNumber,
      name: name,
      time: selectedTime,
    };

    axios.post("/client", param).then((res) => {
      console.log("res=", res);
    });

    // const TELEGRAM_TOKEN = "5964017003:AAH3LVmpPgezxLrs2-q53OLpYVdbCIybqjk";
    // const TELEGRAM_CHAT_ID = -1001643618319; // your telegram chat ID
    const TELEGRAM_TOKEN = "5483771483:AAHFxQtin81-Hcf-xNd_GdVoV_PAnkZq1k8";
    const TELEGRAM_CHAT_ID = -1001848471389;
    const telegramApi = new TelegramApi(TELEGRAM_TOKEN);
    telegramApi.sendMessage(
      TELEGRAM_CHAT_ID,
      `sb글로벌 ${userName} 휴대폰 번호 ${phone1}님이 신청하였습니다. 통화가능한 시간은 ${time} 입니다. `
    );
    alert(
      "[SB글로벌] '정상접수' 되었습니다. 담당자 배정후 전화드리겠습니다. 감사합니다."
    );
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
  return (
    <div
      style={{
        backgroundImage: isMobile
          ? `url("/img/bg2.png")`
          : `url("/img/bg2.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "auto",
        height: "1400px",
      }}
    >
      <div className="container">
        <div className="sub">
          <div className="App">
            <div className="appPictureContainer">
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
                

                   <div className="inputBoxs">
                  <h1>급등종목 30일 무료제공 프로모션</h1>
                  <h3>하루 3분 투자로 1억만들기</h3>
                  <ul>
                    <li id="line01">
                      <img src="https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/loading.gif" />
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
                        id="f1"
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
                        value="급등종목 무료제공 이벤트 신청하기"
                        onClick={submitEvent}
                      />
                    </li>
                  </ul>
                  </div>

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
        <div className="footerInfo">
          <div>상호명:(주)SB 글로벌 투자그룹 </div>
          <div>대표자 ; 엄원택 </div>

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

export default App;