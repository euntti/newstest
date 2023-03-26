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
    <div className="container">
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
          <div className="btnArea">
            <button onClick={(e) => submitEvent(e)}>신청하기 </button>
          </div>
        </div>
        <div className="footerInfo">
          <div>상호명:(주)SB Global </div>
          <div>대표자:허승우 </div>
          <div>
            소재지: 고양시 대자동 업종:증권정보교육 프로그램개발 및 판매
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
