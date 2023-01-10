import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        src={"/img/vs.jpeg"}
        style={{ width: 800, height: 1023 }}
        alt="BigCo Inc.  "
      />
      <div>
        <input type="text" className="username" placeholder="이름"></input>
      </div>
      <div className="phone">
        <input type="text" className="username" placeholder="이름"></input> -
        {"\t"}
        <input type="text" className="username" placeholder="연락처"></input> -
        {"\t"}
        <input type="text" className="username" placeholder="연락처"></input>
      </div>
      <div className="btnArea">
        <button>신청하기 </button>
      </div>
    </div>
  );
}

export default App;
