import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from './contacts';
import {deptTree, userList} from "./mockData";

const updateSelectUsers = userList => {
  console.log(userList)
};

ReactDOM.render(<div className="App" style={{'padding': '10px', 'margin': '10px', height: '100%'}}>
  <header className="App-header">
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
  <div style={{'padding': '10px', 'margin': '10px', height: '100%'}}>
    <Contacts deptTree={deptTree} users={userList} loading={false} searchResult={[]}
              deptSearch={true} userSearch={true} deptCheckBox={false} searchUserPlaceholder={'HI'}
              updateSelectUsers={updateSelectUsers} handleSearchUser={()=>userList} />
  </div>
</div>, document.getElementById('root'));
