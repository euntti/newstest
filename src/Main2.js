
import logo from "./logo.svg";
import "./Main2.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TelegramApi from "node-telegram-api";
import Modal from "react-modal";
import Progressbar from "./components/progressbar";
import Slider from "react-slick";
import { ColorRing } from "react-loader-spinner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';


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
  const onlyNumber = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);

    if (!/^[0-9]+$/.test(keyValue)) {
      e.preventDefault();
    }
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const [modalIsOpen2, setIsOpen2] = useState(false);

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
    <div>
      <div>
      <div className="nav">
        <div>투자갤러리</div>
          <div>
            <a img
             style={{ width: 300, height: "auto" }}
              src={"/img/kakao.png"}
              href="#"
              onClick={() => {
                window.open("https://sbstock.kr/", "_blank");
              }}
            >
            </a>
          </div>
        </div>
      </div>
      <div className="box_container">
        <div className="box">
          <div className="subTitle">■제테크 핫이슈</div>
          <div className="inner">
            <div className="head">
              <h1 className="title">
                아직도 손실만 보고 계신가요?{" "}
                {/* <p>억대를 모을 수 있게 한 투자 노하우</p>
                어떤 노하우이길래? " */}
                <p><span class="color1">" SB그룹의 무상 손실복구 서비스 "</span> </p>
              </h1>
            </div>
          </div>
          <div className="writer">
            <div class="writer-info">
              기자 - 주진석ㅣ 조회수 : 8839 ㅣ 날짜 :{""}
              <span id="regdate">2023-05-30</span>
            </div>
          </div>

          <div className="content-wrap">
            <div className="content">
              <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/sbmain11.png"}
                  alt=""
                />
              </p>
              <p>
                <b>"주식투자&가상화폐로 매월 3천이상의 꾸준한 수익을 내고 있어요.</b>
                   <b>SB그룹 만의 AI프로그램으로 추천해준 주식,코인을 매수하고 트레이더분들이 정해준
                     목표가도달시 매도, 목표가에 도달하지 못할시 정해준 손절가에 손절등
                    전문적인 케어를 해주시니 꾸준한 수익이 났어요"
                    </b>
                <br />
                <span class="color2">SB투자그룹의 실고객 김진X 씨 (50대 직장인) 인터뷰 中</span>
              </p>
              <p>
                <b>"SB그룹 만의 인공지능 시스템을 통해 주식으로 손실이 발생했던 금액들을 
                    모두 복구하고 수익이 나기 시작했어요
                    </b>
                   <b>마이너스부터 시작했던 투자였는데 어느샌가 억에 가까운 투자금으로 투자를 계속하니 
                    직장인 월급보다 더 많은 수익이 발생하고 있어요 이런 기회를 준 SB에게 정말 감사해요"
                    </b>
                <br />
                <span class="color2">SB투자그룹의 실고객 유미X 씨 (30대 주부) 인터뷰 中</span>
              </p>
              <p>
                <p>지난 25일 종합투자S 취재진들이 확인해본 결과,</p>
                2023년 1월부터 2023년 4월까지 AI프로그램을 병행한 SB그룹만의

                <p> 투자전략을 통해 1월부터 4월까지 주식과 코인으로 회원들에게 높은 수익을 안겨주었으며, 
                 특히 1월 4월은 일평균으로 계산시 일 25.2% 이상의 수익률이 확인됐다.</p>
                
                {/* <div>
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
                </div> */}
                <div>
                  {/* <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                    }}
                  >
                    <Progressbar value={progress} />
                  </span> */}
                </div>
                <div className="inputBoxs">
                  <h1>주식&코인 급등 30일 무료제공 프로모션</h1>
                  <h3>1억 만들기 프로젝트 무료체험 신청</h3>
                  <ul>
                    <li id="line01">
                      <img src="https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/loading.gif" />
                    </li>
                    <li id="line02">
                      개인정보는 암호화하여 안전하게 처리됩니다.
                    </li>
                    <li id="line03" cond="off">
                      <span>전문가들의 고급정보를 <b>30일동안 받아보세요.</b></span>
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
                      </label>
                     
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
                        value="30일 무료체험 이벤트 신청하기"
                        onClick={submitEvent}
                      />
                    </li>
                  </ul>
                </div>
              
                <br />
                {/* 김진환 씨의 최근 수익인증 */}
              </p>
               <p class="mainhead">
                  <b>"SB그룹 실 고객들의 '주식' 수익인증"</b>
                </p>
               <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/sbmain2.png"}
                  alt=""
                />
              </p>
              <p class="mainhead">
                  <b>"SB그룹 실 고객들의 '코인' 수익인증"</b>
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
              여기서 놀라운 사실은 2023년에 SB그룹에서 새롭게 시작한 손실복구프로모션의 
              복구율이 75%대 이상을 기록했고, 
                <br />이로 인해 많은 투자자들의 문의가 왔었다고 한다
              </p>

              <p>
                4차산업혁명에
                {"\t"}
                <b>좋은 예 라 보이며 기존 개인투자자들이 일일히 종목을 분석 및 확인해야하는것과 달리 
                  SB투자그룹만의 AI프로그램이 실시간으로 변동하는 모든 차트의 흐름과 시장흐름을 분석하여
                   투자자들에게 높은 수익률을 안겨주고있다 </b>
                
              </p>
              <p>
                SB그룹 대표이사는
                {"\t"}
                <b>"인공지능 (퀀트박스) AI인공지능
                프로그램의 결과값과 결과값과 SB그룹의 전문트레이더들이 결과를 한번 더 대조하고 맞춤 교육을 
                진행하다 보니 더 투자자분들께 더 높은 수익률을 보장한다" 라고 전했다
                추가적으로 연령,성별,나이 구분없이 개개인의 1:1 눈높이 맞춤트레이닝으로 보다
                 이해하기 쉽게 케어 하고있다고 덧붙혔습니다.
                 </b>
                </p>
              <p>
                시작할 2분기에도 손실복구프로모션을 계속 진행한다고 하니 많은 문의가 몰릴 것으로 예상된다.
              </p>
              <p>
                종합투자 S - 주진석기자 
              </p>
              {/* <p>
                얼마 안남은 2분기에도 프로모션을 진행한다고 하니 많은 문의가 몰릴 것으로 예상된다.
                <br />
                <p class="mainhead2">
                <b>"아무것도 바꾸지 않으면 아무것도 변하지 않는다"</b>
                <br />
              </p>
              <p class="mainhead2">
                <b>"안전하고 영리한 투자노하우! 정확한 가치투자에 의해 당신의 꿈을 실현합니다"</b>
                <br />
              </p>
              </p> */}
               <p class="mainhead">
                  <b> ►SB그룹 실제 AI 퀀트박스 이용사진◀︎</b>
                </p>
               <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/quantbee.png"}
                  alt=""
                />
              </p>
              
              <p class="mainhead">
                  {/* <b> ►SB그룹 실고객님들의 댓글◀︎</b> */}
                </p>
                {/* <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/review1.png"}
                  alt=""
                />
                </p> */}
          
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
            
            <p class="mainhead">
                  {/* <b> ►SB그룹 실고객님들의 댓글◀︎</b> */}
                </p>
                <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/capture.PNG"}
                  alt=""
                />
                </p>

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
      <div>
              </div>
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

export default Main2;

