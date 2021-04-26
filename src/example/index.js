import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from '../components/contacts';
import { deptTree,userList, u2} from '../mockData';

const updateSelectUsers = userList => {
  console.log(userList)
};

const updateSelectDept = deptList => {
  console.log(deptList)
};

const users = [
  { userId: 101,username:'admin1' }, { userId: 11,username: 'admin01' }
];

const dept = [{"id":1,"parentId":0,name:"山东农信"},
  {"id":1,"parentId":0,name:"山东农信"},
  {"id":12,"parentId":0,name:"山东农信"},
  {"id":13,"parentId":0,name:"山东农信"},
  {"id":14,"parentId":0,name:"山东农信"},
  {"id":15,"parentId":0,name:"山东农信"},
  {"id":16,"parentId":0,name:"山东农信"},
  {"id":17,"parentId":0,name:"山东农信"},
  {"id":18,"parentId":0,name:"山东农信"},
];

const handleSearchUser = (a,b,c)=>{
  console.log(a,b,c)
  return userList;
}

ReactDOM.render(<div className="App"
                     style={{ 'padding': '10px', 'margin': '10px', height: '100%' }}>
  <header className="App-header">
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
  <div style={{ 'padding': '10px', 'margin': '10px', height: '100%' }}>
    <Contacts deptTree={deptTree} users={u2} loading={false}
              defaultUserSelected={users}
              deptSearch={true} userSearch={true} deptCheckBox={true} searchUserPlaceholder={'HI'}
              updateSelectUsers={updateSelectUsers} handleSearchUser={handleSearchUser} updateSelectDept={updateSelectDept}
              defaultDeptSelected={dept} radio={false}
    />
  </div>
</div>, document.getElementById('root'));
