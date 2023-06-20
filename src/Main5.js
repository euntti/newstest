import logo from "./logo.svg";
import "./App4.css";
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




function App4() {


  const [users, setUsers] = useState([]);
  const [nickName, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (e) => {
    let formattedNumber = e.target.value.replace(/-/g, ""); // 하이픈 제거
    if (formattedNumber.length > 2 && formattedNumber.length < 6) {
      formattedNumber = formattedNumber.replace(/(\d{3})(\d{1,3})/, "$1-$2"); // 첫 번째 하이픈 추가
    } else if (formattedNumber.length >= 6) {
      formattedNumber = formattedNumber.replace(/(\d{3})(\d{3})(\d{0,4})/, "$1-$2-$3"); // 첫 번째와 두 번째 하이픈 추가
    }
    setphoneNumber(formattedNumber);

    const inputValue = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    setphoneNumber(inputValue);
  };


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
      return alert("이름");
    }
    if (phoneNumber == "") {
      return alert("연락처");
    }
    if (!check1) {
      return alert("개인정보취급방침동의보기를 체크해주세요.");
    }

    if (!check3) {
      return alert("광고성문자동의 체크해주세요!");
    }
    
    const TELEGRAM_TOKEN = "6005561467:AAEza5i8zIr7i0IqBVuaFhTl47I7ZK65AfU";
    const TELEGRAM_CHAT_ID = -1001932031818;
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
      
      <div className="box_container5" >
        <div className="box5">
        
          <div className="inner5">
           
          </div>
          <div className="writer">
           
          </div>

          <div className="content-wrap5">
            <div className="content5">
             
              <p>
                    <p class="imgbox banner5">
                <img
                  style={{ width: "auto" , height: "auto" }}
                  src={"/img/gundy1.png"}
                  alt=""
                />
              </p>
              </p>
             
              
              
              <div className="inputBoxs5">
                  <h3>2023 하반기 급등 예상 종목 무료 받기</h3>
                  <ul>
                    {/* <li id="line01">
                      <img src="https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/loading.gif" />
                    </li> */}
                   
                   
                    <br />
                    <li id="line55">
                    <li>
                      <input
                        type="text"
                        id="f1"
                        name="user_name5"
                        required=""
                        placeholder="성함"
                        value={nickName}
                        maxLength={4}
                        onChange={(e) => setNickName(e.target.value)}
                      />
                    </li>
                    <li>
                    <input
                       type="tel"
                       name="user_name9"
                       placeholder="휴대폰"
                       maxLength={13}
                       value={phoneNumber}
                       onChange={handlePhoneNumberChange}
                      />
                       <li id="smtbtn">
                      <input
                        id="btn"
                        type="submit"
                        value="무료 신청하기"
                        onClick={submitEvent}
                      />
                    </li>
                    </li>
                    <br />
                    </li>
                    <li id="chkline5">
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
                    
                  </ul>
                  </div>
                <br />
                <p class="imgboxbanner2">
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={"/img/gundy2.png"}
                  alt=""
                />
              </p>
               <div className="latest">
                 
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

              
                    
         <div className="footerInfo4">
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
       <div className="footerInfo4"> AD - 해당 정보는 참고용이며 투자에 대한 절대적인 지표가 될 수 없습니다.</div>
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

export default App4;
