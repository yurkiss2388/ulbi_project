import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ТЕкст пон', body: 'Бибизяны ' },
    { id: 2, title: 'ТЕкст пон 2', body: 'Бибизяны ' },
    { id: 3, title: 'ТЕкст пон 3', body: 'Бибизяны ' },
  ])
  const [title,setTitle] = useState('ПОН')

  const addNewPost = (e) =>{
    e.preventDefault()
  }

  return (
    
    <div className="App">
      <form>
      <MyInput
      value={title} 
      onChange={e => setTitle(e.target.value)}
      type="text" 
      placeholder="название Бибизяна" 
      />
      <MyInput type="text" placeholder="описание БиБизяна" />
      <MyButton onClick={addNewPost} >  Создать БиБизЯну  </MyButton> 
      <PostList posts={posts} title="Список БиБизЯн " />
      </form>
    </div> 
  );
}

export default App;
