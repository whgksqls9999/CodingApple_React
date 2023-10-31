import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [title, b] = useState(['강남 우동 맛집', '게시글 제목2', '게시글 제목 3']);

  return (
   <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>{ title[0] }</h4>
        <p> 11월 1일 발행 </p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p> 11월 1일 발행 </p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p> 11월 1일 발행 </p>
      </div>
   </div>
  );
}

export default App;
