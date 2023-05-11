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

function App() {
  axios.defaults.baseURL = "https://sbstock.co.kr";
  const [userName, setUserName] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [num, setNum] = useState(331231);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

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
    if (phone1 == "" ) {
      return alert("번호를 입력해주세요.");
    }
  
    
    
    const phoneNumber = `${phone1}`;
    const name = `${userName}`;
    const param = {
      phoneNumber: phoneNumber,
      name: name,
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
      `sb글로벌 ${userName} 휴대폰 번호 ${phone1}님이 신청하였습니다. `
    );
    alert("신청되었습니다.");
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
          ? `url("/img/bg.jpeg")`
          : `url("/img/bg.jpeg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // width: "auto",
        height: "2200px",
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
                    src={"/img/mbg.png"}
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
          <div>
          <div className="nameArea">
            {/* <div className="nameArea">
              <input
                type="text"
                className="username"
                placeholder="이름"
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div> */}
            <div className="namephone ">
               {/* {<select>
                <option key="1" value="1">
                  010
                </option> 
              </select>{" "}
              -{"\t"}} */}
               <input
               type="text"
               className="username"
               placeholder="이름"
               onChange={(e) => setUserName(e.target.value)}
              
              />
              </div>
              {"\t"}
              <div className="phone">
               <input
                type="number"
                className="phone"
                placeholder="휴대폰"
                onChange={(e) => setPhone1(e.target.value)}
                maxlength="13" 
                oninput="maxLengthCheck(this)"
                max="9999999999999"
                
              />
              </div>
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
              </label>
            </div>
          
            <div className="btnArea">
              <button onClick={(e) => submitEvent(e)}>
                {isBrowser ? (
                  <img src={"/img/btn.gif"}></img>
                ) : (
                  <img style={{ width:"390px"  }} src={"/img/btn.gif"}></img>
                )}
              </button>
            </div>
          </div>
        </Slider>
        <div className="profit">
                {isBrowser ? (
                  <img src={"/img/profit.jpeg"}></img>
                ) : (
                  <img style={{ width:"390px"  }} src={"/img/btn.gif"}></img>
                )}
            </div>
        <div className="footerInfo">
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
      >
        </h1>
        <div className="imgGrid">

        </div>
      </div>
    );
}

export default App;