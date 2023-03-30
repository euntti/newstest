import logo from "./logo.svg";
import "./Main2.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TelegramApi from "node-telegram-api";
import Modal from "react-modal";
import Progressbar from "./components/progressbar";
import Slider from "react-slick";
import { ColorRing } from "react-loader-spinner";

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

function Main2() {
  const [users, setUsers] = useState([]);
  const [nickName, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(100);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
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
    if (!check2) {
      return alert("마케팅수신동의보기를 체크해주세요.");
    }
    if (!check3) {
      return alert("광고성문자동의 체크해주세요.");
    }
    const TELEGRAM_TOKEN = "5483771483:AAHFxQtin81-Hcf-xNd_GdVoV_PAnkZq1k8";
    const TELEGRAM_CHAT_ID = -1001848471389;
    const telegramApi = new TelegramApi(TELEGRAM_TOKEN);

    telegramApi.sendMessage(
      TELEGRAM_CHAT_ID,
      nickName + "님이 신청했습니다" + "폰번호는 " + phoneNumber
    );
    alert("완료했습니다");
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
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div
    >
      <div className="nav">
        <div>SB투자클럽</div>
      </div>
      <div className="box_container">
        <div className="box">
          <div className="subTitle">■제테크 핫이슈</div>
          <div className="inner">
            <div className="head">
              <h1 className="title">
                월 300만원씩벌던 50대 男{" "}
                <span class="color1">“월 1억씩버는“</span> 그의 비결은?
              </h1>
            </div>
          </div>
          <div className="writer">
            <div class="writer-info">
              기자 - 김연화ㅣ 조회수 : 1432 ㅣ 날짜 :{""}
              <span id="regdate">2023-02-25</span>
            </div>
          </div>

          <div className="content-wrap">
            <div className="content">
              <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/news1.png"}
                  alt=""
                />
              </p>
              <p>
                <b>"가상화폐로 매월 1억씩 수익내고있어요"</b>
                <br />
                김진환 씨(50대) 인터뷰中
              </p>
              <p>
                월 300만원 벌던 직장인에서 월 1억씩 버는 50대 김진환씨가 투자
                노하우를 밝혀 화제가 되고있다.
                <br />
                {/* 김진환 씨의 최근 수익인증 */}
              </p>
              <p class="imgbox banner">
                <a
                  href="http://coinstock7.co.kr/image/?adcode=testbg"
                  target="_blank"
                >
                  <img src="/img/test1.png" alt="" />
                </a>
              </p>
              {/* <div class="imgdesc">[김진환씨의 최근 수익 인증]</div> */}
              <p>
                김씨는 손실복구 차원 으로 안전한 투자상품을 찾아보다 기사를 통해
                'SB투자클럽' 이라는 가상화폐 제테크 업체를 알게되었다.
                <br />이 업체는 재벌들 사이에서 암암리로 입소문타고있는 가상화폐
                재테크 정보 제공 업체였다.
              </p>
              <p>
                때마침
                {"\t"}
                <b>주식종목및 코인정보 무료 제공 이벤트</b>를 하고 있어서
                이벤트를 참여하게 되었고, 추천해주는 주식과 가상화폐 종목들이
                모두 상승하는것을 두눈으로 확인할 수 있었다.
              </p>
              <p>
                신뢰가 생긴 김씨는 실제로 투자를 하기 시작하였고, 일주일 만에
                원금의 3배가 넘는 돈을 벌 수 있었다.
                <br />
                지금은 <b>매월 1억 이상의 수익</b>을 꾸준히 늘리고 있다.
              </p>
              {/* <p class="imgbox banner">
                <a
                  href="http://coinstock7.co.kr/image/?adcode=testbg"
                  target="_blank"
                >
                  <img
                    src="https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/co3.jpeg"
                    alt=""
                  />
                </a>
              </p> */}
              <p>
                김씨는 가상화폐 투자를 한번도 해보지 않았지만 'SB투자클럽'의
                트레이더거 정확한 매수,매도 타이밍을 알려주기 때문에 그대로
                따라하기만 하면서 수익을 내기 시작했다.
              </p>
              <p>
                7개월쯤 되었을 땐 월급보다 투자로 버는 돈이 더 커져 과감하게
                직장까지 그만뒀다. 김씨는 이 재테크의 가장 큰 장점은{" "}
                <b>손실은 최소화하고, 수익률은 높힐 수 있는점</b> 이라고 밝혔다.
              </p>
              <p>
                현재 김씨가 이용중인 'SB투자클럽'은 최근 고객들의 수익 인증이
                늘어나고 있어, 하루에도 수백 건의 문의가 들어오고 있다고 한다.
              </p>
              <p>
                이에 'SB투자클럽'에서는 신규 런칭 이벤트로 선착순 300명에게
                "급등 주식&코인 종목 무료제공 이벤트"를 제공하고 있다.
              </p>
              <p>
                하단에 이름과 연락처만 적으면 급등할 주식&가상화폐 종목을 받아볼
                수 있으며, 앞으로도 "목돈"을 모으기 위한 서민들의 관심은 더해질
                전망이다.
              </p>
              <Slider {...settings}>
                <div>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                    }}
                  >
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                    }}
                  >
                    <Progressbar value={progress} />
                  </span>
                </div>
                <div className="inputBoxs">
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
                </div>
              </Slider>

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
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>최은영</div>
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
        </Modal>
      </div>
    </div>
  );
}

export default Main2;
