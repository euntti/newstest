import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TelegramApi from "node-telegram-api";

function App() {
  const [users, setUsers] = useState([]);
  const [nickName, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const getCustomer = () => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  };

  const submitEvent = (e) => {
    e.preventDefault();

    if(nickName==""){
      return alert("이름을 입력해주세요.")
    }
    if(phoneNumber==""){
      return alert("연락처를 입력해주세요.")
    }
    var TELEGRAM_TOKEN = "5483771483:AAHFxQtin81-Hcf-xNd_GdVoV_PAnkZq1k8"
    var TELEGRAM_CHAT_ID = -1001838972468
    const telegramApi = new TelegramApi(TELEGRAM_TOKEN);
    telegramApi.sendMessage(TELEGRAM_CHAT_ID, nickName+"님이 신청했습니다"+"폰번호는 "+phoneNumber);
    alert("완료했습니다")
    // console.log("as");
    // var customer = {};
    // customer.nickName = nickName;
    // customer.phoneNumber = phoneNumber;

    // axios.post("http://localhost:3000/users", customer).then((res) => {
    //   alert("등록을 성공했습니다.");
    //   getCustomer();
    // });
  };

  useEffect(() => {
    getCustomer();
  }, []);

  return (
    <div>
      <div className="nav">
        <div>오늘의 재테크뉴스</div>
      </div>
      <div className="box_container">
        <div className="box">
          <div className="subTitle">■재테크정보</div>
          <div className="inner">
            <div className="head">
              <h1 className="title">
                월 200만원 벌던 30대女{" "}
                <span class="color1">“매월 5천만원 수익“</span> 그녀의 노하우는?
              </h1>
            </div>
          </div>
          <div className="writer">
            <div class="writer-info">
              아이디 : 청담동코인여신 ㅣ 조회수 : 651 ㅣ 날짜 :{" "}
              <span id="regdate">2022-12-15</span>
            </div>
          </div>

          <div className="content-wrap">
            <div className="content">
              <p class="imgbox banner">
                <a
                  href="http://coinstock7.co.kr/image/?adcode=testbg"
                  target="_blank"
                >
                  <img
                    src="

https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/co1.jpeg"
                    alt=""
                  />
                </a>
              </p>
              <p>
                <b>"가상화폐로 매월 5천만원씩 수익내고 있어요"</b>
                <br />
                김수진 씨(30대) 인터뷰中
              </p>
              <p>
                월 200만원 벌던 직장인에서 월 5천만원 버는 30대 김수진씨가 투자
                노하우를 밝혀 화제가 되고있다.
                <br />
                놀라운 점은 그녀가 처음해본 가상화폐로 손실없이 수익이 내고
                있다는 점이다.
              </p>
              <p class="imgbox banner">
                <a
                  href="http://coinstock7.co.kr/image/?adcode=testbg"
                  target="_blank"
                >
                  <img
                    src="tps://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/co2.jpeg"
                    alt=""
                  />
                </a>
              </p>
              <div class="imgdesc">[김수진씨의 최근 수익 인증]</div>
              <p>
                김씨는 손실없는 안전한 투자상품을 찾아보다 뉴스를 통해
                '코인앤스탁'라는 가상화폐 정보제공 업체를 알게되었다.
                <br />이 업체는 강남 부자들 사이에서 유명한 가상화폐 재테크 정보
                제공 업체였다.
              </p>
              <p>
                때마침
                {"\t"}
                <b>급등코인 무료추천 이벤트</b>를 하고 있어서 이벤트를 참여하게
                되었고, 추천해주는 가상화폐 종목들이 모두 상승하는것을 두눈으로
                확인할 수 있었다.
              </p>
              <p>
                신뢰가 생긴 김씨는 실제로 투자를 하기 시작하였고, 일주일 만에
                원금의 2배가 넘는 돈을 벌 수 있었다.
                <br />
                지금은 <b>매월 5천만원 이상 수익</b>을 꾸준히 올리고 있다.
              </p>
              <p class="imgbox banner">
                <a
                  href="http://coinstock7.co.kr/image/?adcode=testbg"
                  target="_blank"
                >
                  <img
                    src="https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/co3.jpeg"
                    alt=""
                  />
                </a>
              </p>
              <p>
                김씨는 가상화폐 투자를 한번도 해보지 않았지만 '코인앤스탁'의
                전문가들이 정확한 매수,매도 타이밍을 알려주기 때문에 그대로
                따라하기만 하면서 수익을 내기 시작했다.
              </p>
              <p>
                6개월쯤 되었을 땐 월급보다 투자로 버는 돈이 더 커져 과감하게
                직장까지 그만뒀다. 김씨는 이 재테크의 가장 큰 장점은{" "}
                <b>손실은 최소화하고, 수익률은 높힐 수 있는점</b> 이라고 밝혔다.
              </p>
              <p>
                현재 김씨가 이용중인 '코인앤스탁'은 최근 회원들의 수익 인증이
                늘어나고 있어, 하루에도 수백 건의 문의가 들어오고 있다고 한다.
              </p>
              <p>
                이에 '코인앤스탁'에서는 고객 감사 이벤트로 선착순 200명에게
                "급등코인 무료추천 2차 이벤트"를 제공하고 있다.
              </p>
              <p>
                하단에 이름과 연락처만 적으면 급등할 가상화폐 종목을 받아볼 수
                있으며, 앞으로도 "목돈"을 모으기 위한 서민들의 관심은 더해질
                전망이다.
              </p>

              <div className="inputBoxs">
                <h1>급등코인 무료추천 2차 이벤트</h1>
                <h3>내일 급등할 코인종목 받기</h3>
                <ul>
                  <li id="line01">
                    <img src="https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/loading.gif" />
                  </li>
                  <li id="line02">
                    개인정보는 암호화하여 안전하게 처리됩니다.
                  </li>
                  <li id="line03" cond="off">
                    <span>급등주를 3일동안 받아보세요.</span>
                  </li>
                  <br />
                  <li>
                    <input
                      type="text"
                      id="f1"
                      name="user_name"
                      required=""
                      placeholder="이름을 입력하세요"
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
                        setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''))
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
                        checked=""
                      />
                      개인정보취급방침동의
                    </label>
                    <span class="txtbtn" data-id="fixedbox_1">
                      보기
                    </span>
                    <label>
                      <input
                        type="checkbox"
                        id="privacy"
                        name="agree2"
                        value="1"
                        checked=""
                      />
                      마케팅수신동의
                    </label>
                    <span class="txtbtn" data-id="fixedbox_2">
                      보기
                    </span>
                    <label>
                      <input
                        type="checkbox"
                        id="privacy"
                        name="agree3"
                        value="1"
                        checked=""
                      />
                      광고성문자수신동의
                    </label>
                  </li>
                  <li id="smtbtn">
                    <input
                      id="btn"
                      type="submit"
                      value="급등코인 무료추천 이벤트 신청하기"
                      onClick={submitEvent}
                    />
                  </li>
                </ul>
              </div>
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
      </div>
    </div>
  );
}

export default App;
