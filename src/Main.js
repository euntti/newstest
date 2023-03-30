import "./App.css";
import TelegramApi from "node-telegram-api";
import { useState } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

function App() {
  const [userName, setUserName] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const submitEvent = (e) => {
    e.preventDefault();
    if (userName == "") {
      return alert("이름을 입력해주세요.");
    }
    if (phone1 == "" || phone2 == "") {
      return alert("번호를 입력해주세요.");
    }
    // const TELEGRAM_TOKEN = "5964017003:AAH3LVmpPgezxLrs2-q53OLpYVdbCIybqjk";
    // const TELEGRAM_CHAT_ID = -1001643618319; // your telegram chat ID
    const TELEGRAM_TOKEN = "5483771483:AAHFxQtin81-Hcf-xNd_GdVoV_PAnkZq1k8";
    const TELEGRAM_CHAT_ID = -1001848471389;
    const telegramApi = new TelegramApi(TELEGRAM_TOKEN);
    telegramApi.sendMessage(
      TELEGRAM_CHAT_ID,
      `휴대폰 번호 010-${phone1}-${phone2} ${userName}님이 신청하였습니다. `
    );
    alert("신청되었습니다.");
  };
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url("/img/light.jpeg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100%",
      }}
    >
      <div className="sub">
        <div className="App">
          <div className="appPictureContainer">
            {isBrowser ? (
              <img
                className="appPicture"
                src={"/img/logo.png"}
                // style={{ width: 800, height: 1023, marginLeft: 20 }}
                alt="logo "
              />
            ) : (
              <img
                className="appPicture"
                src={"/img/ms.jpeg"}
                // style={{ width: 800, height: 1023, marginLeft: 20 }}
                alt="logo "
              />
            )}
          </div>
          <h3
            style={{ fontSize: 9, display: "flex", justifyContent: "flex-end" }}
          >
            (AD)
          </h3>
          <h4
            style={{ fontSize: 9, display: "flex", justifyContent: "flex-end" }}
          >
            해당 정보는 참고용이며 투자에 대한 절대적인 지표가 될 수 없습니다.
          </h4>
          <div className="nameArea">
            <input
              type="text"
              className="username"
              placeholder="이름"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div className="phone">
            <select>
              <option key="1" value="1">
                010
              </option>
            </select>{" "}
            -{"\t"}
            <input
              type="text"
              className="phone"
              placeholder="0000"
              onChange={(e) => setPhone1(e.target.value)}
            ></input>{" "}
            -{"\t"}
            <input
              type="text"
              className="phone"
              placeholder="0000"
              onChange={(e) => setPhone2(e.target.value)}
            ></input>
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
            <label style={{ color: "#fff" }}>
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
              <img src={"/img/btn.gif"}></img>{" "}
            </button>
          </div>
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
    </div>
  );
}

export default App;
