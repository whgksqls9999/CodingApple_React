import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['첫번째 게시글', '두번째 게시글', '세번째 게시글'])

  let [idx, setIdx] = useState(0)
  
  let [like, setLike] = useState([0,0,0])
  const updateLike = ((i)=>{
      let tmp = [...like]
      tmp[i]++
      setLike(tmp)
  })

  let[modal, setModal] = useState(false)

  let[write, setWrite] = useState('')

  const addArticle = ((article)=>{
    if (article == '') return;
    
    // 게시글 목록에 게시글 추가
    let tmp = [...title]
    tmp.unshift(article)
    setTitle(tmp)

    // 좋아요 목록도 추가
    tmp = [...like]
    tmp.unshift(0)
    setLike(tmp)
  })

  const deleteArticle = ((idx)=>{
    let tmp = [...title]
    tmp.splice(idx,1)
    setTitle(tmp)
  })

  return (
    <>
      <div className="App">
        <div className="App-nav">
          blog
        </div>
      </div>
      {
        title.map((element, i) => {
          return (
            <div className="article">
              <h3 onClick={()=>{setModal(!modal); setIdx(i)}}>{title[i]}<span className="like" onClick={(e)=>{e.stopPropagation(); updateLike(i)}}>Like👍🏻</span>{like[i]}</h3>
              <div> 11월 3일 발행</div>
              <button onClick={()=>{deleteArticle(i)}}>게시글 삭제</button>
            </div>
          )
        })
      }
      <div>
        <input type="text" onChange={(e) => {setWrite(e.target.value)}}></input>
        <button onClick={()=>{addArticle(write)}}>등록하기</button>
        <div>{write}</div>
      </div>
      {
        modal ? <Modal title={title} setTitle={setTitle} idx={idx}/> : null
      }
    </>
  )
}

const Modal = function(props){
  const modifyTitle = (()=>{
    let tmp = [...props.title]
    tmp[0] = '수정된 게시글'
    props.setTitle(tmp)
  })

  return(
    <>
      <div class="modal">
        <div>
          <h3>{props.title[props.idx]}</h3>
        </div>
        <div>
          <button onClick={()=>{modifyTitle()}}>글 수정하기</button>
        </div>
      </div>
    </>
  )
}



export default App;
