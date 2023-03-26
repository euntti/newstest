import logo from "./logo.svg";
import "./Main2.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TelegramApi from "node-telegram-api";
import Modal from "react-modal";

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

  return  (
    <div>
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
                  src={"/img/sbnews1.jpg"}
                  alt=""
                />
              </p>
              <p>
                <b>월 소득 300만원 이였던 50대 男 수입이 5배 증가한 비결은 ?</b>
                <br />
                김진환 씨(50대) 인터뷰中
              </p>
              <p>
              월 300씩 생기는 급여보다 5배 많은 추가 소득이 생기고 있는
              50대 男 ㅇㅇㅇ씨가 투자 노하우를 밝혀 누리꾼들 사이에 화제가 되고있습니다

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
              男 김oo은 늘어가는 지출소득에서 위기감을 느껴 여러가지 투자상품을 찾아보다
              기사/광고를 통해 'SB글로벌'이라는 투자그룹을 알게 되었다
                <br />'SB 글로벌'업체는 손실복구와 안정적인 부수입원을 제공하는 투자전문 회사였고
                주식과 가상화폐 투자를 통한 안정적인 투자 정보를 제공 해주고 있었다
              </p>
              <p>
                우연히
                {"\t"}
                <br/>주식/가상화폐 무료 종목 추천 프로모션이 진행되고 있어서
                가벼운 마음으로 신청을 해서 참여하게 되었고
                다양한 교육 시스템과 추천 받은 종목들로 투자를 하다보니 
                어느샌가 급여보다 더 많은 추가 수입이 생기는걸 확인 할 수 있었다
              </p>
              <p>
              신뢰가 생긴 男은 다양한 종목들로 폭 넓은 투자를 시작했고
              그 결과 한달만에 투자 원금에 5배가 넘는 수익을 챙길 수 있었다
                <br />
                지금은 <b>매월 수입 이상의 5배 수익</b>을 꾸준히 늘리고 있다.
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
              한번도 주식/가상화폐를 통한 투자를 해본적이 없는 男이였지만
              순차적인 교육 커리큘럼과 안전한 종목추천을 통해서 매수,매도를 반복해
              실력을 쌓아갔고
              </p>
              <p>
                현재는{" "}
                <b>전문직 종사자와 비교해봐도 손색이 없을 정도로
                폭 넓은 투자지식을 겸비</b> 하게 되었다.
              </p>
              <p>
              현재는 직장에서의 월급보다 훨씬 많은 부가적인 수입을 챙기고 있고
              점차 늘어가는 목돈은 현재도 속도를 붙여 현재 진행중이다
              </p>
              <p>
              현재 男이 관계를 맺고 있는 'SB 글로벌'은 다년간 안정적인
              투자정보제공을 해옴으로써 여러가지 수상경력을 포함해
              정보이용을 하고 싶은 고객이 포화상태고 
              수많은 문의가 폭주하고 있는 상황이라고 한다.
              </p>

              <p>
              보다 나은 혜택을 위해 현재 'SB 글로벌'에서는 
              신규 문의건에 한해서 이벤트를 진행중이며
              매달 선착순 200명에게 '양질의 정보'를 30일간 무료제공을 하고 있다
              </p>
              <p>
                하단에 정보만 적으면 급등할 종목을 받아볼
                수 있으며, 급증하는 물가지수로 인해 어려운 경제속에서 이러한 
                투자는 서민들의 관심이 더욱 많아질 전망이다
              </p>
              <p>
              마지막으로 男 고민 할 시간에 행동으로 옮긴 자기자신이
              현명했다고 말하며 인터뷰를 마무리했다
              </p>

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
                    <span>급등주를 30일동안 받아보세요.</span>
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
          <h3 style={{fontSize:9,display:'flex',justifyContent:'flex-end'}}>(AD)</h3>
          <h4 style={{fontSize:9,display:'flex',justifyContent:'flex-end'}}>해당 정보는 참고용이며 투자에 대한 절대적인 지표가 될 수 없습니다.</h4>
          <div className="footerInfo">
            <div>상호명:(주)SB Global </div>
            <div>대표자:허승우 </div>
            <div>사업자등록번호: 231-46-00771 </div>
            <div>
              소재지: 고양시 대자동 업종:증권정보교육 프로그램개발 및 판매
            </div>
        </div>
        </div>
        
      </div>
   
   
      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>aa</div>
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
