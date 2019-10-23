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
import styles from './contacts.less';

const { Search } = Input;

const Contacts = (props) => {

  const {
    users,
    loading = false,
    searchResult,
    userSearch = false,
    searchUserPlaceholder,
    numberColor, totalShowText, handleSearchUser, updateSelectUsers, defaultUserSelected, updateSelectDept
  } = props;

  const [deptTreeNode, setDeptTreeNode] = useState([]);
  const [selectUser, setSelectUser] = useState([]);
  const [onSearch, setOnSearch] = useState(false);
  const [deptId, setDeptId] = useState(null);
  const [nameKey, setNameKey] = useState(null);

  useEffect(() => {
    setSelectUser(defaultUserSelected);
  }, [defaultUserSelected]);

  /**
   *  点击查询回调，会把name key 和 dept id 回传，外部调用查询用
   * @param nameKey 名字搜索关键字
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
      {v.name} <Icon type="close-circle" theme="filled" />
    </Tag>
  );

  /**
   *
   * @param data
   */
  const unCheckDept = data => {
    const tmp = [];
    const result = deptTreeNode.filter(value => value.id !== data.id);
    const dept = result.concat(tmp);
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
        {v.username} <Icon type="close-circle" theme="filled" />
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

  let userData;
  if (onSearch) {
    userData = searchResult;
  } else {
    userData = users;
  }
  const tmp = totalShowText.split('$');
  let font = '';
  let end = '';
  if (tmp.length === 2) {
    font = tmp[0];
    end = tmp[1];
  } else {
    font = totalShowText;
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
          <Left {...props} setDeptId={setDeptId} setOnSearch={setOnSearch}
                deptTreeNode={deptTreeNode} setDeptTreeNode={setDeptTreeNode} updateSelectDept={updateSelectDept} />
          <Right {...props} userData={userData} onSearch={onSearch} setOnSearch={setOnSearch}
                 nameKey={nameKey} setNameKey={setNameKey} selectUser={selectUser}
                 handleSearch={handleSearch}
                 setSelectUser={setSelectUser} />
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form colon={false}>
              <Form.Item className={styles.label} label={(
                <div>{font} <span
                  style={{ color: numberColor }}>{deptTreeNode.length + selectUser.length}</span> {end}
                </div>
              )}>
                <div className={styles.resultDiv}>
                  {deptTreeNode && deptTreeNode.map(v => makeDeptTag(v))}
                  {selectUser && selectUser.map(v => makeUserTag(v))}
                </div>
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
  updateSelectDept: PropTypes.func,
  deptCheckBox: PropTypes.bool,
  searchDeptPlaceholder: PropTypes.string,
  searchUserPlaceholder: PropTypes.string,
  defaultUserSelected: PropTypes.array,
  debug: PropTypes.bool,
  numberColor: PropTypes.string,
  selectAllText: PropTypes.string,
  totalShowText: PropTypes.string
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
  numberColor: '#1B9AFF',
  debug: false,
  selectAllText: '全选',
  totalShowText: '共选择了$个'
};

export default Contacts;
