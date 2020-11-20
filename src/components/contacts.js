import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Form,
  Row,
  Spin,
  Tag,
  Icon,
  message, Pagination,
} from 'antd';

import Right from './right';
import Left from './left';
import styles from './contacts.less';

const Contacts = (props) => {

  const {
    users,
    loading = false,
    searchResult,
    numberColor, totalShowText, handleSearchUser, updateSelectUsers, defaultUserSelected,
    defaultDeptSelected, updateSelectDept, userNameKey, deptNameKey, radio,
    checkStrictly, nameText, workNumberNumber, tableColumnsKey, tableRowKey, emptyTip,debug=false,
    tableCheckboxDisabled
  } = props;

  const [deptTreeNode, setDeptTreeNode] = useState([]);
  const [selectUser, setSelectUser] = useState([]);
  const [onSearch, setOnSearch] = useState(false);
  const [deptId, setDeptId] = useState(null);
  const [nameKey, setNameKey] = useState(null);

  useEffect(() => {
    updateSelectUsers(defaultUserSelected);
    setSelectUser(defaultUserSelected);
  }, [defaultUserSelected, updateSelectUsers]);

  useEffect(() => {
    updateSelectDept(defaultDeptSelected);
    setDeptTreeNode(defaultDeptSelected);
  }, [defaultDeptSelected, updateSelectDept]);

  /**
   *  点击查询回调，会把name key 和 dept id 回传，外部调用查询用
   * @param nameKey 名字搜索关键字
   * @param deptId 部门id
   */
  const handleSearch = (nameKey = null) => {
    if (handleSearchUser) {
      handleSearchUser(0, nameKey, null);
      setOnSearch(true);
      setNameKey(nameKey);
    } else {
      message.error('search function not found.');
    }
  };

  /**
   * 生成显示的用户Tag
   * @param v
   * @return {*}
   */
  const makeUserTag = v => {
    return (
      <Tag
        key={v[tableRowKey]}
        className={styles.userTag2}
        onClick={e => {
          e.preventDefault();
          unCheckUser(v);
        }}
      >
        {v[tableColumnsKey[0]]} <Icon type="close-circle" theme="filled"
                                      style={{width: 14, height: 14, color: '#E65653'}}/>
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


  /**
   * 翻页查询处理
   * @param page
   */
  const onPageChange = page => {
    if (debug) {
      window.console.log(page)
    }
    if (handleSearchUser) {
      handleSearchUser(page, nameKey, deptId);
      setOnSearch(true);
    } else {
      message.error('search function not found.');
    }
  };

  const makeShowMsg = () => {
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
      <div>{font} <span
        style={{color: numberColor}}>{selectUser.length}</span> {end}
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
    <div style={{height: '', width: 690}}>
      <Spin spinning={loading}>
        <div style={{height: 350}}>
          <Left {...props} setDeptId={setDeptId} setOnSearch={setOnSearch}
                deptTreeNode={deptTreeNode} setDeptTreeNode={setDeptTreeNode}
                handleSearchUser={handleSearchUser} checkStrictly={checkStrictly}
                updateSelectDept={updateSelectDept} deptNameKey={deptNameKey} radio={radio}/>
          <Right {...props} userData={userData} onSearch={onSearch} setOnSearch={setOnSearch}
                 nameKey={nameKey} setNameKey={setNameKey} selectUser={selectUser}
                 handleSearch={handleSearch} userNameKey={userNameKey} deptId={deptId}
                 setSelectUser={setSelectUser} radio={radio} nameText={nameText}
                 workNumberNumber={workNumberNumber} tableColumnsKey={tableColumnsKey} tableRowKey={tableRowKey}
                 emptyTip={emptyTip} tableCheckboxDisabled={tableCheckboxDisabled}/>
        </div>
        <div className={styles.pagination2}>
          <Pagination
            className={styles.pageNoe2}
            simple
            current={userData.current || 1}
            pageSize={userData.size}
            total={userData.total}
            onChange={onPageChange}
          />
        </div>
        <Row style={{height: 150}}>
          <Col span={24} style={{paddingTop: 8, paddingBottom: 0}}>
            <Form colon={false}>
              <Form.Item className={styles.label2} label={makeShowMsg()}>
                {!radio &&
                <div className={styles.resultDiv2}>
                  {selectUser && selectUser.map(v => makeUserTag(v))}
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
  tableCheckboxDisabled: PropTypes.array
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
  numberColor: '#E65653',
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
  nameText: '姓名',
  workNumberNumber: '工号',
  tableColumnsKey: ['chsName', 'accountName'],
  tableRowKey: 'accountName',
  emptyTip: '什么都没有哦~',
  tableCheckboxDisabled:[]
};

export default Contacts;
