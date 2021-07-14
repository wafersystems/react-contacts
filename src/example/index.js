import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from '../components/contacts';
import {deptTree, userList} from '../mockData';

const updateSelectUsers = userList => {
    console.log(userList)
};

const updateSelectDept = deptList => {
    console.log(deptList)
};

const users = [
    {userId: 101, username: 'admin1'}, {userId: 11, username: 'admin01'}
];

const dept = [{"id": 5, "parentId": 4, name: "院校农信"}, {"id": 6, "parentId": 4, name: "院校农信222"}];

ReactDOM.render(<div className="App"
                     style={{'padding': '10px', 'margin': '10px', height: '100%'}}>
    <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <div style={{'padding': '10px', 'margin': '10px', height: '100%'}}>
        <Contacts deptTree={deptTree} users={userList} loading={false}
            // defaultUserSelected={users}
                  deptSearch={true} userSearch={true} deptCheckBox={true} searchUserPlaceholder={'HI'}
                  updateSelectUsers={updateSelectUsers}
                  handleSearchUser={(page, nameKey, depId) => {
                      console.log(page, nameKey, depId);
                      return userList;
                  }
                  }
                  hideRight={true}
                  updateSelectDept={updateSelectDept}
                  defaultDeptSelected={dept} radio={false}
                  returnReducedNode={false}
        />
    </div>
</div>, document.getElementById('root'));
