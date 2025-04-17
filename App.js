import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import {List, Paper} from '@mui/material'

function App() {
//하나의 할 일을 객체로 관리할 것이다
//id, title, done
const [items, setItem] = useState([
  {
  id:"0",
  title:"Hello world 1",
  done: true
},
{
  id:"1",
  title:"Hello world 2",
  done: false
}])

//react는 key속성에 들어있는 값을 참고해서, 리스트의 요소가 변경될 경우
//어떤 요소가 변경되었는지 빠르게 파악할 수 있다.
const todoItems = items.length > 0 && 
//Paper컴포넌트
//종이 같은 표면 효과를 제공하는 컨테이너 컴포넌트
//elecation(그림자깊이)를 통해 높낮이를 표현하고
//배경색과 그림자 효과로 콘텐츠를 돋보이게 한다.
<Paper style={{margin: 16}}>
<List> {/* 일련의 항목을 세로로 나열하는 컨테이너 역할 */}
          {items.map((item) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
</Paper>
//items.map(item => <Todo item={item} key={item.id} />)


  return (
    <div className="App">
      {todoItems}
    </div>
  );
}


export default App;
