import logo from "./logo.svg";
import "./App7.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TelegramApi from "node-telegram-api";
import Modal from "react-modal";
import Progressbar from "./components/progressbar";
import Slider from "react-slick";
import { ColorRing } from "react-loader-spinner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
var now = new Date();	// 현재 날짜 및 시간
console.log("현재 : ", now);

const Main8= () => {
    return <div>Main8</div>
    const Main8 = () => {
      let rollingData = [
        '서울',
        '대구',
        '부산',
        '경기',
        '울산',
        '포항',
        '전주',
        '강원',
        '대전',
        '광주',
        '제주',
        '해남'
      ];
    
      let timer = 2000;
      let first = document.getElementById('first');
      let second = document.getElementById('second');
      let third = document.getElementById('third');
      let move = 2;
      let dataCnt = 1;
      let listCnt = 1;
    
      first.innerHTML = rollingData[0];
    
      setInterval(() => {
        if(move == 2){
          first.classList.remove('card_sliding')
          first.classList.add('card_sliding_after')

          second.classList.remove('card_sliding_after')
          second.classList.add('card_sliding')

          third.classList.remove('card_sliding_after')
          third.classList.remove('card_sliding')

          move = 0
      } else if (move == 1){
          first.classList.remove('card_sliding_after')
          first.classList.add('card_sliding')

          second.classList.remove('card_sliding_after')
          second.classList.remove('card_sliding')

          third.classList.remove('card_sliding')
          third.classList.add('card_sliding_after')

          move = 2
      } else if (move == 0) {
          first.classList.remove('card_sliding_after')
          first.classList.remove('card_sliding')

          second.classList.remove('card_sliding')
          second.classList.add('card_sliding_after')

          third.classList.remove('card_sliding_after')
          third.classList.add('card_sliding')

          move = 1
      }
      
      if(dataCnt < (rollingData.length - 1)) {
          document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
              dataCnt++
      } else if(dataCnt == rollingData.length - 1) {
          document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
          dataCnt = 0
      }

      if(listCnt < 2) {
          listCnt++
      } else if (listCnt == 2) {
          listCnt = 0
      }

      console.log(listCnt)
  }, timer);
  return (
    <>
      <div id="first"></div>
      <div id="second"></div>
      <div id="third"></div>
      <div id="rolling_box"></div>
    </>
  );
};

      }

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




function App7() {


  const [users, setUsers] = useState([]);
  const [nickName, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
    let subtitle;
  const onlyNumber = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);

    if (!/^[0-9]+$/.test(keyValue)) {
      e.preventDefault();
    }
  };

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const [check10, setCheck10] = useState(false);
  const [check11, setCheck11] = useState(false);
  const [check12, setCheck12] = useState(false);
  const [check13, setCheck13] = useState(false);
  const [check14, setCheck14] = useState(false);
  const [check15, setCheck15] = useState(false);
  const [check16, setCheck16] = useState(false);
  const [check17, setCheck17] = useState(false);
  const [check18, setCheck18] = useState(false);
  const [check19, setCheck19] = useState(false);
  const [check20, setCheck20] = useState(false);
  const [check21, setCheck21] = useState(false);
  const [check22, setCheck22] = useState(false);
  const [check23, setCheck23] = useState(false);
  const [check24, setCheck24] = useState(false);
  const [check25, setCheck25] = useState(false);
  const [check26, setCheck26] = useState(false);
  const [check27, setCheck27] = useState(false);
  const [check28, setCheck28] = useState(false);
  const [check29, setCheck29] = useState(false);
  const [check30, setCheck30] = useState(false);
  const [check31, setCheck31] = useState(false);
  const [check32, setCheck32] = useState(false);
  const [check33, setCheck33] = useState(false);

  
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(100);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);
 
  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    
    const phoneRegex = /^(010|011|016|017|018|019)-[^0][0-9]{3,4}-[0-9]{4}$/;
  
    if (phoneRegex.test(inputValue)) {
      setPhoneNumber(inputValue);
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  function openModal() {
    setIsOpen(true);
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
   
    if (!check3) {
      return alert("광고성문자동의 체크해주세요.");
    }
    
    const TELEGRAM_TOKEN = "6057672242:AAFnpwpUE9_XOYlF6KG8IJnLpSselltC0uQ    ";
    const TELEGRAM_CHAT_ID = -1001691882600;
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

  const sendKaKao = () => {
    window.open("https://open.kakao.com/me/shon04Se", "_blank")
    };
  
    

  useEffect(() => {
    getCustomer();
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const rollingData = [
    '김*영 010-****-8245',
    '박*주 010-****-2543',
    '최*팔 010-****-7786',
    '심*정 010-****-9406',
    '최*영 010-****-3066',
    '이*수 010-****-2657',
    '김*영 010-****-9007',
    '김*양 010-****-3025',
    '이*연 010-****-6055',
    '정*정 010-****-1059',
    '신*영 010-****-4405',
    '공*구 010-****-2034',
    '지*리 010-****-3374',
  ];
  const timer = 2000;
  let move = 2;
  let dataCnt = 1;
  let listCnt = 1;
  
  const first = document.getElementById('first');
  const second = document.getElementById('second');
  const third = document.getElementById('third');
  
  // first.children[0].innerHTML = rollingData[0];
  // second.children[0].innerHTML = rollingData[1];
  // third.children[0].innerHTML = rollingData[2];

  // first.children[0].innerHTML = rollingData[0];
  
  setInterval(() => {
    if (move === 2) {
      first.classList.remove('card_sliding');
      first.classList.add('card_sliding_after');
  
      second.classList.remove('card_sliding_after');
      second.classList.add('card_sliding');
  
      third.classList.remove('card_sliding_after');
      third.classList.remove('card_sliding');
  
      move = 0;
    } else if (move === 1) {
      first.classList.remove('card_sliding_after');
      first.classList.add('card_sliding');
  
      second.classList.remove('card_sliding_after');
      second.classList.remove('card_sliding');
  
      third.classList.remove('card_sliding');
      third.classList.add('card_sliding_after');
  
      move = 2;
    } else if (move === 0) {
      first.classList.remove('card_sliding_after');
      first.classList.remove('card_sliding');
  
      second.classList.remove('card_sliding');
      second.classList.add('card_sliding_after');
  
      third.classList.remove('card_sliding_after');
      third.classList.add('card_sliding');
  
      move = 1;
    }
  
    if (dataCnt < rollingData.length - 1) {
      document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt];
      document.getElementById('rolling_box').children[(listCnt + 1) % 3].children[0].innerHTML = rollingData[dataCnt + 1];
      document.getElementById('rolling_box').children[(listCnt + 2) % 3].children[0].innerHTML = rollingData[dataCnt + 2];

      dataCnt++;
    } else if (dataCnt === rollingData.length - 1) {
      document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt];
      document.getElementById('rolling_box').children[(listCnt + 1) % 3].children[0].innerHTML = rollingData[0];
      document.getElementById('rolling_box').children[(listCnt + 2) % 3].children[0].innerHTML = rollingData[1];

      dataCnt = 0;
    }
  
    if (listCnt < 2) {
      listCnt++;
    } else if (listCnt === 2) {
      listCnt = 0;
    }
  
    console.log(listCnt);
  }, timer);

  return (
    <div>
      <div>
      <div className="nav8">
        <div>주식노하우</div>
          <div>
          <div onClick={() => sendKaKao()} className="consulting">
                   <img
                    style={{ width: 302, height: "auto" }}
                    src={"/img/kakao.png"}
                    alt=""
                    />
                    </div>
          </div>
        </div>
      </div>
      <div className="box_container">
        <div className="box">
          <div className="subTitle">■ 방금올라온 뉴스</div>
          <div className="inner">
            <div className="head">
              <h1 className="title">
              국내증시는 우량주보단 {" "}
                <p><span class="color1">" 테마주가 강세 "</span> </p>
             
              </h1>
            </div>
          </div>
          <div className="writer">
            <div class="writer-info">
              기자 - 서이준ㅣ 조회수 : 6782 ㅣ 날짜 :{""}
              <span id="regdate">2023-06-07</span>
            </div>
          </div>

          <div className="content-wrap">
            <div className="content">
             
             
              <p>

                    <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/sbglobal.jpg"}
                  alt=""
                />
              </p>
              코스닥의 움직임이 좋다는 것은
                <p>우량주보단 개별종목장세 또는 실적주 보단</p>
                <p><span class="color1">
                  <div>테마 이슈 장세라고 보시면 됩니다.</div>
                 </span></p>
                  <p></p>
                <p>지수가 몇개월 동안 박스권에서 움직이다 보니</p>
                <p>개인투자자들의 심리도 안정적인 우량주 보다는
                급등락이 좋은 테마이슈로 많이 움직이고 있습니다.</p>
                
              </p>
               <p class="mainhead">
                  <b>"하루 30분 투자로 3개월 수익1억 가능한 투자는? "</b>
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
              작년과 다르게 요즘 시장이 힘든 장세 이기 때문에  </p>
               <p> 답답하고 고루한 배당주 보다는 적극적인 성장종목에 관심을 가져봅시다.
                <br />
              </p>

              <p>
                최근에 바쁜 사회속 빠르게 그렇지만 확실한 수익을 나고 싶은 고객들을 위해
                <span class="color1">"30분 투자로 어마어마한 수익내기" </span> 아래 링크 확인부탁드립니다. 
                {/* {"\t"}
                <b>좋은 예 라 보이며 기존 개인투자자들이 일일히 확인해야되는것과 달리 AI프로그램이 실시간으로 변동하는 
                모든 차트흐름과 시장흐름을 분석하여 높은 수익률로 보이는 추세이다.</b> */}
                
              </p>
              <div className="inputBoxs8">
                  <h1>테마종목 30일 무료제공 프로모션</h1>
                  <h3>하루 30분 투자로 어마어마한 수익내기</h3>
                  <ul>
                    <li id="line0108">
                      <img
                      style={{ width: "100%", height: "auto" }}
                      src="/img/loading.gif" />
                    </li>
                    <li id="line0208">
                      개인정보는 암호화하여 안전하게 처리됩니다.
                    </li>
                    <li id="line0308" cond="off">
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
                        style={{ fontSize: "18px" }}
                        value="급등종목 무료제공 이벤트 신청하기"
                        onClick={submitEvent}
                      />
                    </li>
                  </ul>
                  </div>
                <br />
        
                <div className="latest">
                  <div className="latimgbox" id="latest_list">
                    <img
                    style={{ width: "100%", height: "auto" }}
                    src={"/img/member.png"}
                    alt=""
                    />
                  </div>

                  <div class="rolling_box">
                
                    <ul id ="rolling_box"
                    style={{ width: "100%", height: "50px" }}>
                    <li class="card_sliding" id ="first"><p></p></li>
                   <li class="" id ="second"><p></p></li>
                    <li class="" id ="third"><p></p></li>
                     </ul>
                  </div>

                  {/* <table className="tablelive" >
                   <thead> */}
                    {/* <tr>
                    <th>Date</th>
                    <th>Username</th>
                    <th>Telephone</th>
                    </tr> */}
                    {/* </thead>
                  <tbody>
                    <tr>
                    <td id="date-cell-1">2023-05-26</td>
                    <td>김*영</td>
                    <td>010-****-8245</td>
                    </tr>
                    <tr>
                    <td id="date-cell-2">2023-05-26</td>
                    <td>최*필</td>
                    <td>010-****-8108</td>
                    </tr>
                    <tr>
                    <td id="date-cell-3">2023-05-26</td>
                    <td>김*우</td>
                    <td>010-****-3040</td>
                    </tr>
                    <tr>
                    <td id="date-cell-4">2023-05-26</td>
                    <td>이*영</td>
                    <td>010-****-5504</td>
                  </tr>
                  <tr>
                  <td id="date-cell-5">2023-05-26</td>
                   <td>지*우</td>
                   <td>010-****-9913</td>
                  </tr>
                  <tr>
                   <td id="date-cell-5">2023-05-26</td>
                  <td>이*현</td>
                  <td>010-****-3342</td>
                  </tr>
                   <tr>
      <td id="date-cell-6">2023-05-26</td>
      <td>구*현</td>
      <td>010-****-7050</td>
    </tr>
    <tr>
      <td id="date-cell-6">2023-05-26</td>
      <td>이*수</td>
      <td>010-****-6703</td>
    </tr>
    <tr>
      <td id="date-cell-7">2023-05-26</td>
      <td>심*우</td>
      <td>010-****-4022</td>
    </tr>
  </tbody>
</table> */}
 </div>

                <div className="talk" style={{ display: "block"}}>
                   <div className="talk1">
                   <img
                    style={{ width: 512, height: "auto" }}
                    src={"/img/talk.png"}
                    alt=""
                    />
                    </div>
                    <div className="talk2">
                    <img
                    style={{  width: "100%",height: "auto"  }}
                    src={"/img/review2.png"}
                    alt=""
                    />
                     </div>
                    </div>
                    
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

export default App7;

