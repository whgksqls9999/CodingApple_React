import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['강남 우동 맛집', '게시글 제목2', '게시글 제목 3']);
  let [like, setLike] = useState([0, 0, 0])
  let [modal, setModal] = useState(false)
  let [selectTitle, setSelecTitle] = useState(0);

  const sort = function () {
    let copy = [...title];
    copy.sort();
    setTitle(copy);
  }

  const doLike = (i) => {
    let tmp = [...like]
    tmp[i]++
    setLike(tmp);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button onClick={sort}>sort</button>
      {
        title.map(function (a, i) {
          return (
            <div className="list">
              <h4>{a}<span onClick={() => { doLike(i) }}> LIKE☹ </span>{like[i]}</h4>
              <p onClick={() => { setModal(!modal); setSelecTitle(i) }}> 11월 1일 발행 </p>
            </div>
          )
        })
      }

      {
        modal ? <Modal titles={title} setTitle={setTitle} selectTitle={selectTitle} /> : null
      }
    </div>
  );
}

const Modal = (props) => {
  return (
    <>
      <div>
        <h3>{props.titles[props.selectTitle]}</h3>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => { updateName(props) }}>수정</button>
      </div>
    </>
  )
}

const updateName = ((props) => {
  let tmp = [...props.titles]
  tmp[0] = '수정'
  props.setTitle(tmp)
})

export default App;
