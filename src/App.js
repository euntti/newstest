import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="sub">
        <div className="App">
          <img
            src={"/img/logo.png"}
            style={{ width: 800, height: 1023, marginLeft: 20 }}
            alt="BigCo Inc.  "
          />
          <div>
            <input type="text" className="username" placeholder="이름"></input>
          </div>
          <div className="phone">
            <select>
              <option key="1" value="1">
                010
              </option>
            </select>{" "}
            -{"\t"}
            <input type="text" className="phone" placeholder="연락처"></input> -
            {"\t"}
            <input type="text" className="phone" placeholder="연락처"></input>
          </div>
          <div className="btnArea">
            <button>신청하기 </button>
          </div>
        </div>
        <div className="footerInfo">
          <div>상호명:(주)SB Global 대표자: 허한솔 </div>
          <div>
            소재지: 고양시 대자동 업종:증권정보교육 프로그램개발 및 판매
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
