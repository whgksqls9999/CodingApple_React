import './App.css';
import { useState } from 'react'

function App() {
  let [title, setTitle] = useState(['Title1', 'Title2', 'Title3'])
  let [modalIdx, setModalIdx] = useState(0)
  let [like, setLike] = useState([0, 0, 0])
  let [modal, setModal] = useState(false);

  
  let [titleInput, setTitleInput] = useState('')

  // 게시글 등록
  const updateBoard = ((titleInput)=>{
    if (titleInput.trim()){
      let tmp = [...title]
      tmp.push(titleInput)
      setTitle(tmp)

      tmp = [...like]
      tmp.push(0)
      setLike(tmp)
    }
  })

  // 게시글 삭제
  const deleteBoard = ((idx) => {
    let tmp = [...title]
    tmp.splice(idx,1)
    setTitle(tmp)
  })

  // 좋아요 업데이트
  const updateLike = ((i) => {
    let tmp = [...like]
    tmp[i]++
    setLike(tmp)
  })

  return (
    <>
      <div className="App">
        <div className="nav">
          My Blog
        </div>
        {
          title.map((element, i) => {
            return (
              <div className="list">
                <h4 onClick={() => { setModal(!modal); setModalIdx(i) }}>{element}
                  <span className="like-btn" onClick={(e) => { e.stopPropagation(); updateLike(i) }}>
                    Like
                  </span>
                  {like[i]}
                </h4>
                <p>Some description,,,</p>
                <button className="btn" onClick={()=>{deleteBoard(i)}}>삭제하기</button>
              </div>
            )
          })
        }
        <div className="input">
          <input type="text" onChange={(e)=>{setTitleInput(e.target.value)}}></input>
          <button className="btn" onClick={()=>{updateBoard(titleInput)}}>등록하기</button>
        </div>
      </div>
      {
        modal ? <div className="modal-container"><Modal title={title} idx={modalIdx} /></div> : null
      }
    </>
  );
}


function Modal(props) {
  return (
    <>
      <div className="Modal">
        <h4>{props.title[props.idx]}</h4>
        <p>CONTENT</p>
      </div>
    </>
  )
}

export default App;