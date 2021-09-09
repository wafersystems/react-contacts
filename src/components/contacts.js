import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Form,
  Input,
  Row,
  Spin,
  Tag,
  Icon,
  message,
} from 'antd';

import Right from './right';
import Left from './left';
import DndWrapper from './dnd/index'
import { filterDeptTagShow } from '../utils';
import styles from './contacts.less';

const { Search } = Input;



const Contacts = (props) => {

  const {
    users,
    loading = false,
    searchResult,
    userSearch = false,
    searchUserPlaceholder,
    numberColor, totalShowText, handleSearchUser, updateSelectUsers, defaultUserSelected,
    defaultDeptSelected, updateSelectDept, userNameKey, deptNameKey, radio, radioShowText,
    checkStrictly, showAllDeptTags, Drag, showLeft, loadData, disableUsers
  } = props;

  const [deptTreeNode, setDeptTreeNode] = useState([]);
  const [selectUser, setSelectUser] = useState([]);
  const [onSearch, setOnSearch] = useState(false);
  const [deptId, setDeptId] = useState(null);
  const [nameKey, setNameKey] = useState(null);

  useEffect(() => {
    updateSelectUsers(defaultUserSelected);
    setSelectUser(defaultUserSelected);
  }, [defaultUserSelected]);

  useEffect(() => {
    updateSelectDept(defaultDeptSelected);
    setDeptTreeNode(defaultDeptSelected);
  }, [defaultDeptSelected]);

  /**
   *  点击查询回调，会把name key 和 dept id 回传，外部调用查询用
   * @param nameKey 名字搜索关键字
   * @param deptId 部门id
   */
  const handleSearch = (nameKey = null) => {
    if (handleSearchUser) {
      handleSearchUser(0, nameKey, deptId);
      setOnSearch(true);
      setNameKey(nameKey);
    } else {
      message.error('search function not found.');
    }
  };

  /**
   * 生成显示的部门Tag
   * @param v
   * @return {*}
   */
  const makeDeptTag = v => (
    <Tag
      key={v.id}
      className={styles.deptTag}
      onClick={e => {
        e.preventDefault();
        unCheckDept(v);
      }}
    >
      {v[deptNameKey]} <Icon type="close-circle" theme="filled" />
    </Tag>
  );

  /**
   *
   * @param object
   * @param key
   */
  const delObjProperty = (object, key) => {
    const t = object[key];
    if (t) {
      delete object[key];
      delObjProperty(object, t.parentId);
    }
  }

  /**
   *
   * @param data
   */
  const unCheckDept = data => {
    console.log(data, '删除')
    const dept = [];
    const obj = {};
    deptTreeNode.forEach(value => {
      obj[value.id] = value;
    });
    delObjProperty(obj, data.id);
    Object.keys(obj).forEach(key => {
      dept.push(obj[key]);
    })
    updateSelectDept(dept);
    setDeptTreeNode(dept);
  };

  /**
   * 生成显示的用户Tag
   * @param v
   * @return {*}
   */
  const makeUserTag = v => {
    return (
      <Tag
        key={v.userId}
        className={styles.userTag}
        onClick={e => {
          e.preventDefault();
          unCheckUser(v);
        }}
      >
        {v[userNameKey]} <Icon type="close-circle" theme="filled" />
      </Tag>
    );
  };

  /**
   * 点击用户Tag时取消选择
   * @param data
   */
  const unCheckUser = data => {
    const tmp = [];
    const result = selectUser.filter(value => value.userId !== data.userId);
    const userList = result.concat(tmp);
    updateSelectUsers(userList);
    setSelectUser(userList);
  };

  const makeShowMsg = () => {
    if (!radio) {
      const tmp = totalShowText.split('$');
      let font = '';
      let end = '';
      if (tmp.length === 2) {
        font = tmp[0];
        end = tmp[1];
      } else {
        font = totalShowText;
      }
      let length = 0;
      if (!showAllDeptTags) {
        length = filterDeptTagShow(deptTreeNode).length + selectUser.length
      } else {
        length = deptTreeNode.length + selectUser.length
      }
      return (
        <div>{font} <span
          style={{ color: numberColor }}>{length}</span> {end}
        </div>
      );
    }
    let name = '';
    if (selectUser.length > 0) {
      const [use] = selectUser;
      name = use[userNameKey];
    }
    return (
      <div>{radioShowText} <span
        style={{ color: numberColor }}>{name}</span>
      </div>
    );

  };

  let userData;
  if (onSearch) {
    userData = searchResult;
  } else {
    userData = users;
  }
  return (
    <div style={{ height: '100%' }}>
      <Spin spinning={loading}>
        {userSearch && (
          <Row>
            <Search placeholder={searchUserPlaceholder} onSearch={handleSearch} />
          </Row>
        )}
        {userSearch && <br />}
        <Row>
          {showLeft && <Left {...props} setDeptId={setDeptId} setOnSearch={setOnSearch}
            deptTreeNode={deptTreeNode} setDeptTreeNode={setDeptTreeNode}
            handleSearchUser={handleSearchUser} checkStrictly={checkStrictly}
            updateSelectDept={updateSelectDept} deptNameKey={deptNameKey} radio={radio} nameKey={nameKey} />}
          <Right {...props} userData={userData} onSearch={onSearch} setOnSearch={setOnSearch} loadData={loadData}
            nameKey={nameKey} setNameKey={setNameKey} selectUser={selectUser}
            handleSearch={handleSearch} userNameKey={userNameKey} deptId={deptId}
            setSelectUser={setSelectUser} radio={radio} showLeft={showLeft} disableUsers={disableUsers} />
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form colon={false} layout='vertical'>
              <Form.Item className={styles.label} label={makeShowMsg()}>
                {!radio &&
                  <div className={styles.resultDiv}>
                    {!showAllDeptTags && deptTreeNode && filterDeptTagShow(deptTreeNode).map(v => makeDeptTag(v))}
                    {showAllDeptTags && deptTreeNode && deptTreeNode.map(v => makeDeptTag(v))}
                    {
                      Drag ? (
                        selectUser.length > 0 && (
                          <DndWrapper
                            updateSelectUsers={updateSelectUsers}
                            data={selectUser}
                            unCheckUser={unCheckUser}
                            userNameKey={userNameKey}
                          />
                        )

                      ) : (
                        selectUser && selectUser.map(v => makeUserTag(v))
                      )
                    }
                  </div>
                }
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Spin>
    </div>
  )

};

Contacts.propTypes = {
  deptTree: PropTypes.array.isRequired,
  users: PropTypes.object,
  loading: PropTypes.bool,
  searchResult: PropTypes.object,
  handleSearchUser: PropTypes.func.isRequired,
  deptSearch: PropTypes.bool,
  updateSelectUsers: PropTypes.func.isRequired,
  updateSelectDept: PropTypes.func.isRequired,
  deptCheckBox: PropTypes.bool,
  searchDeptPlaceholder: PropTypes.string,
  searchUserPlaceholder: PropTypes.string,
  defaultUserSelected: PropTypes.array,
  defaultDeptSelected: PropTypes.array,
  debug: PropTypes.bool,
  numberColor: PropTypes.string,
  selectAllText: PropTypes.string,
  totalShowText: PropTypes.string,
  userNameKey: PropTypes.string,
  deptNameKey: PropTypes.string,
  radio: PropTypes.bool,
  radioShowText: PropTypes.string,
  checkStrictly: PropTypes.bool,
  showAllDeptTags: PropTypes.bool,
  // 返回精简节点，如果为true，只返回精简的节点，比如子节点全部选中，只返回父节点一个node
  returnReducedNode: PropTypes.bool,
  Drag: PropTypes.bool,
  // 显示左边部门树
  showLeft: PropTypes.bool,
  // 异步加载数据
  loadData: PropTypes.func,
  // 显示英文名key
  enNameKey:PropTypes.string,
  // 不可选择用户id列表
  disableUsers:PropTypes.array
};

Contacts.defaultProps = {
  users: {
    records: [],
  },
  loading: false,
  searchResult: {
    records: [],
  },
  deptSearch: true,
  deptCheckBox: true,
  searchDeptPlaceholder: '请输入搜索部门',
  searchUserPlaceholder: '请输入搜索姓名',
  defaultUserSelected: [],
  defaultDeptSelected: [],
  numberColor: '#1B9AFF',
  debug: false,
  selectAllText: '全选',
  totalShowText: '共选择了$个',
  userNameKey: 'username',
  deptNameKey: 'name',
  radio: false,
  radioShowText: '已经选择',
  checkStrictly: false,
  showAllDeptTags: false,
  returnReducedNode: false,
  Drag: false,
  // 显示左边部门树，默认显示
  showLeft: true,
  loadData: false,
  enNameKey: 'username',
  disableUsers: []
};

export default Contacts;
