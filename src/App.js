import './App.css';
import React, { useEffect, useState } from 'react';
import customAxios from './customAxios';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
            <li>
              <Link to="/summoner">소환사 검색</Link>
            </li>
            <li>
              <Link to="/team">팀계산기</Link>
            </li>
            <li>
              <Link to="/board">게시판</Link>
            </li>
          </ul>
        </nav>

        {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/summoner">
            <SummonerSearch />
          </Route>
          <Route path="/team">
            <TeamSearch />
          </Route>
          <Route path="/board">
            <Board />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  // IP주소 변수 선언
  const [ip, setIp] = useState('');

  // IP주소 값을 설정합니다.
  function callback(data) {
    setIp(data);
  }

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
      // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
      customAxios('/myip', callback);
    }, []
  );

  return (
    <header className="App-header">
      이 기기의 IP주소는 {ip}입니다.
    </header>
  );
}

function About() {
  return (
    <div>
      <hr />
      <h2>소개 페이지</h2>
    </div>
  );
}

function SummonerSearch() {
  return (
    <div>
      <hr />
      <h2>소환사 검색</h2>
    </div>
  );
}

function TeamSearch() {
  return (
    <div>
      <hr />
      <h2>팀 계산기, 팀 검색</h2>
    </div>
  );
}

function Board() {
  return (
    <div>
      <hr />
      <h2>게시판 페이지</h2>
    </div>
  );
}
export default App;
