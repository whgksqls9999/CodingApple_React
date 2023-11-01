import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [title, b] = useState(['강남 우동 맛집', '게시글 제목2', '게시글 제목 3']);
  let [like, likeState] = useState(0)
  let [modal, setModal] = useState(false)

  const sort = function () {
    let copy = [...title];
    copy.sort();
    b(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button onClick={sort}>asdfasf</button>
      <div className="list">
        <h4>{title[0]}<span onClick={() => { likeState(like + 1) }}> LIKE </span>{like}</h4>
        <p> 11월 1일 발행 </p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p> 11월 1일 발행 </p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}>{title[2]}</h4>
        <p> 11월 1일 발행 </p>
      </div>
      {
        modal ? <Modal/> : null
      }

    </div>
  );
}

const Modal = () => {
  return (
    <>
      <div>
        <h3>동적 UI</h3>
      </div>
      <div>
        Made By Bin
      </div>
    </>
  )
}

export default App;
