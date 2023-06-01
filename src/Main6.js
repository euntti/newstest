import logo from "./logo.svg";
import "./App5.css";
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




function App5() {

    const authButton = useState("");
    const cellnumInput = useState("");
    const marryRadios = useState("");
    const ageRadios = useState("");
    const areaRadios = useState("");
    const area2Radios = useState("");
    const agreeCheckbox = useState("");
    const agree2Checkbox = useState("");
    const submitButton = useState("");          

    const handleAuthSubmit = () => {
        authSubmit(form, 'S', '/leadersclick/admin/inc/auth_proc_aligo.asp', '825', 'cellnum');
      };
      
      <button onClick={handleAuthSubmit}>인증</button>

      const handleSubmit = () => {
        consult_input_check('consultFrm', 'https://leaderscpa.com');
      };
      
      <button onClick={handleSubmit}>폼 전송</button>

  const [users, setUsers] = useState([]);
  const [name, setNickName] = useState("");

    const handleNameChange = (e) => {
  setNickName(e.target.value);
};

    <input type="text" value={name} onChange={handleNameChange} />

  
        let subtitle;
    const onlyNumber = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    
    if (!/^[0-9]+$/.test(keyValue)) {
      e.preventDefault();
    }
  };
  const [form, consultFrm] = useState([]);

const [phoneNumber, setPhoneNumber] = useState("");


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
      <div className="nav">
        <div>주식투자갤러리</div>
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
          <div className="subTitle">■ 떠오르는 이슈</div>
          <div className="inner">
            <div className="head">
              <h1 className="title">
                하루에 3분투자로 {" "}
                <p><span class="color1">" 억대 만들기 노하우는 ?"</span> </p>
             
              </h1>
            </div>
          </div>
          <div className="writer">
            <div class="writer-info">
              기자 - 김진우ㅣ 조회수 : 1202 ㅣ 날짜 :{""}
              <span id="regdate">2023-05-31</span>
            </div>
          </div>

          <div className="content-wrap">
            <div className="content">
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
                <br />
        
                <div className="latest">
                  <div className="latimgbox" id="latest_list">
                    <img
                    style={{ width: "100%", height: "auto" }}
                    src={"/img/member.png"}
                    alt=""
                    />
                  </div>

                  <div className="newbox">
                    <div className="content">
                        <div className="newBoxs">

                </div>
                    </div>
                    </div>

                  <div class="rolling_box">
                    <ul id ="rolling_box"
                    style={{ width: "100%", height: "50px" }}>
                    <li class="card_sliding" id ="first"><p></p></li>
                   <li class="" id ="second"><p></p></li>
                    <li class="" id ="third"><p></p></li>
                     </ul>
                  </div>
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

                    <article class="form_wrap">
						<form name="consultFrm" method="post">
                            <div className="newbox">
                    <div className="content">
                        <div className="newBoxs">
                             <div name="consultFrm" class="form_wrap_inner"> 
                <div class="fl clear">
        <label for="u_name" class="fl">요청자명</label>
        <input type="text" name="name" id="u_name" maxlength="10" class="fl u_name"/>
         </div>
        <div class="fl clear">
        <label for="u_hp" class="fl">휴대폰</label>
        <input type="tel" name="hp" id="u_hp" maxlength="11" class="fl u_hp" oninput="maxLengthCheck(this)" onkeydown="onlyNumber(event);" onkeyup="removeChar(event);" onfocusout="removeChar(event)"/>
        <button type="button" class="fl" onclick="authSubmit(document.consultFrm, 'S', '/leadersclick/admin/inc/auth_proc_aligo.asp','825','cellnum');">인증</button>
        <input type="number" name="cellnum" id="cellnum" maxlength="6" class="fl u_num" placeholder="인증번호 입력" oninput="maxLengthCheck(this)"/>
        <span style="display:none;" id="countdown">0</span>
        </div>
        
       
    <dl class="check1 clear">
					<dt>희망항목</dt>
					<dd><input type="radio" name="marry" id="subject1" value="급등종목"><label for="subject1">급등종목</label></input></dd>
					<dd><input type="radio" name="marry" id="subject2" value="테마종목"><label for="subject2">테마종목</label></input></dd>
					<dd><input type="radio" name="marry" id="subject3" value="가치투자"><label for="subject3">가치투자</label></input></dd>
					<dd><input type="radio" name="marry" id="subject4" value="스윙종목"><label for="subject4">스윙종목</label></input></dd>
					<dd><input type="radio" name="marry" id="subject5" value="인공지능"><label for="subject5">인공지능</label></input></dd>
					<dd><input type="radio" name="marry" id="subject6" value="단기투자"><label for="subject6">단기투자</label></input></dd>
					<dd><input type="radio" name="marry" id="subject7" value="원금회복"><label for="subject7">원금회복</label></input></dd>
					<dd><input type="radio" name="marry" id="subject8" value="투자초보"><label for="subject8">투자초보</label></input></dd>
				</dl>
				<dl class="check2 clear">
					<dt>희망수익률</dt>
					<dd><input type="radio" name="age" id="hope1" value="5% 목표"><label for="hope1">5% 목표</label></input></dd>
					<dd><input type="radio" name="age" id="hope2" value="10% 목표"><label for="hope2">10% 목표</label></input></dd>
					<dd><input type="radio" name="age" id="hope3" value="15% 목표"><label for="hope3">15% 목표</label></input></dd>
					<dd><input type="radio" name="age" id="hope4" value="20% 목표"><label for="hope4">20% 목표</label></input></dd>
					<dd><input type="radio" name="age" id="hope5" value="25% 목표"><label for="hope5">25% 목표</label></input></dd>
					<dd><input type="radio" name="age" id="hope6" value="30% 목표"><label for="hope6">30% 목표</label></input></dd>
				</dl>
				<dl class="check3 clear">
					<dt>희망수익금</dt>
					<dd><input type="radio" name="area" id="profit1" value="5백만 원"><label for="profit1">5백만 원</label></input></dd>
					<dd><input type="radio" name="area" id="profit2" value="1천만 원"><label for="profit2">1천만 원</label></input></dd>
					<dd><input type="radio" name="area" id="profit3" value="3천만 원"><label for="profit3">3천만 원</label></input></dd>
					<dd><input type="radio" name="area" id="profit4" value="5천만 원"><label for="profit4">5천만 원</label></input></dd>
					<dd><input type="radio" name="area" id="profit5" value="7천만 원"><label for="profit5">7천만 원</label></input></dd>
					<dd><input type="radio" name="area" id="profit6" value="1억 원 이상"><label for="profit6">1억 원 이상 </label></input></dd>
				</dl>
				<dl class="check4 clear">
					<dt>투자성향</dt>
					<dd><input type="radio" name="area2" id="type1" value="안정형"><label for="type1">안정형</label></input></dd>
					<dd><input type="radio" name="area2" id="type2" value="안정 추구형"><label for="type2">안정 추구형</label></input></dd>
					<dd><input type="radio" name="area2" id="type3" value="위험 추구형"><label for="type3">위험 추구형</label></input></dd>
					<dd><input type="radio" name="area2" id="type4" value="적극 투자형"><label for="type4">적극 투자형</label></input></dd>
					<dd><input type="radio" name="area2" id="type5" value="공격 투자형"><label for="type5">공격 투자형</label></input></dd>
				</dl>
				</div>
        
        </div>
        </div>
                </div>
                    </form>
		</article>
                    
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

export default App5;

