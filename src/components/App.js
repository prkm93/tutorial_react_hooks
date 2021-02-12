import React, {useState} from 'react';
import ResourceList from './ResourceList';
import Users from './Users';

const App = () => {

  const [resources, setResources] = useState('');
  const [comments, setComments] = useState('');
  return (
    <React.Fragment>
      <button onClick={() => setResources('posts')}>Posts</button>
      <button onClick={() => setResources('todos')}>Todos</button>
      <button onClick={() => setComments('users')}>Users</button>
      <ResourceList resourceName={resources}/>
      <Users comments={comments}/>
    </React.Fragment>
  )
}

export default App;