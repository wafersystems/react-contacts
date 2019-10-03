import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  List,
  Pagination,
  Row,
  Tree,
  Spin,
  Tag,
  Icon,
  message,
} from 'antd';
import { makeTreeNode } from './utils';

import styles from './contacts.less';

const { Search } = Input;

/**
 * 根据关键字搜索部门树
 * @param key
 * @param deptTree
 * @param dataList
 */
const searchByKey = (key, deptTree, dataList) => {
  deptTree.forEach(item => {
    if (item.name.indexOf(key) > -1) {
      dataList.push(item);
    }
    if (item.children && item.children.length > 0) {
      searchByKey(key, item.children, dataList);
    }
  });
};

class Contacts extends PureComponent {
  state = {
    deptId: null,
    nameKey: null,
    onSearch: false,
    deptTreeNode: [],
    selectUser: this.props.defaultUserSelected,
    deptSearchResult: [],
    onDeptSearch: false,
  };

  componentWillReceiveProps(nextProps) {
    const { defaultUserSelected } = nextProps;
    const { selectUser } = this.state;
    if (selectUser.length === 0 && defaultUserSelected.length > 0) {
      this.setState({ selectUser: defaultUserSelected });
    }
  }

  /**
   * 翻页查询处理
   * @param page
   */
  onPageChange = page => {
    const { handleSearchUser, debug } = this.props;
    if (debug) {
      window.console.log(page)
    }
    const { deptId, nameKey } = this.state;
    if (handleSearchUser) {
      handleSearchUser(page - 1, nameKey, deptId);
      this.setState({ onSearch: true });
    } else {
      message.error('search function not found.');
    }
  };

  /**
   * 姓名搜索为空时处理
   * @param e
   */
  handleSearchChange = e => {
    if (!e.target.value) {
      const { handleSearchUser } = this.props;
      const { deptId } = this.state;
      if (handleSearchUser) {
        handleSearchUser(0, null, deptId);
        this.setState({ onSearch: true, nameKey: null });
      } else {
        message.error('search function not found.');
      }
    }
  };

  /**
   *  点击查询回调，会把name key 和 dept id 回传，外部调用查询用
   * @param nameKey 名字搜索关键字
   * @param deptId 部门id
   */
  handleSearch = (nameKey = null) => {
    const { handleSearchUser } = this.props;
    const { deptId } = this.state;
    if (handleSearchUser) {
      handleSearchUser(0, nameKey, deptId);
      this.setState({ onSearch: true, nameKey });
    } else {
      message.error('search function not found.');
    }
  };

  /**
   * 点击部门树时传递部门id到回调里面
   * @param selectedKeys 选择的部门id
   */
  onTreeSelect = selectedKeys => {
    const { handleSearchUser } = this.props;
    if (handleSearchUser) {
      const [deptId] = selectedKeys;
      handleSearchUser(0, null, deptId);
      this.setState({ onSearch: true, deptId });
    } else {
      message.error('search function not found.');
    }
  };

  /**
   * 点击树的check box 回调
   * @param checkedKeys
   * @param checked
   * @param checkedNodes
   * @param node
   */
  onDeptTreeCheck = (checkedKeys, { checked, checkedNodes, node }) => {
    const tmp = [];
    const { deptTreeNode } = this.state;
    if (checked) {
      const [one] = checkedNodes;
      const {
        props: { data },
      } = one;
      tmp.push(data);
      this.setState({ deptTreeNode: deptTreeNode.concat(tmp) });
    } else {
      const {
        props: { data },
      } = node;
      const result = deptTreeNode.filter(value => value.id !== data.id);
      this.setState({ deptTreeNode: result.concat(tmp) });
    }
  };

  /**
   * 点击用户列表的回调
   * @param e
   */
  onUserCheck = e => {
    const { updateSelectUsers } = this.props;
    const {
      target: { checked, data },
    } = e;
    const { selectUser } = this.state;
    const tmp = [];
    let newSelectUser = [];
    if (checked) {
      tmp.push(data);
      newSelectUser = selectUser.concat(tmp);
    } else {
      const result = selectUser.filter(value => value.userId !== data.userId);
      newSelectUser = result.concat(tmp);
    }
    this.setState({ selectUser: newSelectUser });
    updateSelectUsers(newSelectUser);
  };

  /**
   * 点击用户全选的回调
   * @param e
   */
  onCheckAll = e => {
    const {
      target: { checked },
    } = e;
    const tmp = [];
    if (checked) {
      const { onSearch } = this.state;
      const { users, searchResult } = this.props;
      let userData;
      if (onSearch) {
        userData = searchResult;
      } else {
        userData = users;
      }
      userData.records.forEach(value => {
        tmp.push(value);
      });
    }
    const { updateSelectUsers } = this.props;
    updateSelectUsers(tmp);
    this.setState({ selectUser: tmp });
  };

  /**
   * 生成显示的部门Tag
   * @param v
   * @return {*}
   */
  makeDeptTag = v => (
    <Tag
      key={v.id}
      className={styles.deptTag}
      onClick={e => {
        e.preventDefault();
        this.unCheckDept(v);
      }}
    >
      {v.name} <Icon type="close-circle" theme="filled" />
    </Tag>
  );

  /**
   *
   * @param data
   */
  unCheckDept = data => {
    const tmp = [];
    const { deptTreeNode } = this.state;
    const result = deptTreeNode.filter(value => value.id !== data.id);
    this.setState({ deptTreeNode: result.concat(tmp) });
  };

  /**
   * 生成显示的用户Tag
   * @param v
   * @return {*}
   */
  makeUserTag = v => {
    return (
      <Tag
        key={v.userId}
        className={styles.userTag}
        onClick={e => {
          e.preventDefault();
          this.unCHeckUser(v);
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
  unCHeckUser = data => {
    const tmp = [];
    const { selectUser } = this.state;
    const result = selectUser.filter(value => value.userId !== data.userId);
    const { updateSelectUsers } = this.props;
    const userList = result.concat(tmp);
    updateSelectUsers(userList);
    this.setState({ selectUser: userList });
  };

  /**
   * 判断用户是否选择
   * @param data
   * @return {boolean}
   */
  isUserCheck = data => {
    const { selectUser } = this.state;
    const result = selectUser.find(value => value.userId === data.userId);
    return !!result;
  };

  /**
   * 判断部门是否选择
   * @param data
   * @return {boolean}
   */
  isDeptCheck = data => {
    const { deptTreeNode } = this.state;
    const result = deptTreeNode.find(value => value.id === data.id);
    return !!result;
  };

  /**
   * 生成选择树
   * @param data
   * @return {*}
   */
  makeCheckedKeys = data => {
    return data.map(v => v.id);
  };

  /**
   * 根据关键字搜索部门
   * @param value
   */
  onSearchDept = value => {
    if (!value) {
      this.setState({ deptSearchResult: [], onDeptSearch: !!value });
    } else {
      const { deptTree = [] } = this.props;
      const dataList = [];
      searchByKey(value.trim(), deptTree, dataList);
      this.setState({ deptSearchResult: dataList, onDeptSearch: !!value });
    }
  };

  onSearchDeptChange = e => {
    if (!e.target.value) {
      this.setState({ deptSearchResult: [], onDeptSearch: false });
    }
  };

  /**
   * 点击部门查询结果后，传递部门ID给外部查询
   * @param item
   */
  onDeptSelect = item => {
    this.handleSearch(null, item.id);
    this.setState({ onSearch: true });
  };

  /**
   * 部门查询结果点击checkbox
   * @param e
   */
  onDeptCheck = e => {
    const {
      target: { checked, data },
    } = e;
    const { deptTreeNode } = this.state;
    const tmp = [];
    if (checked) {
      tmp.push(data);
      this.setState({ deptTreeNode: deptTreeNode.concat(tmp) });
    } else {
      const result = deptTreeNode.filter(value => value.id !== data.id);
      this.setState({ deptTreeNode: result.concat(tmp) });
    }
  };

  render() {
    const {
      deptTree = [],
      users,
      loading = false,
      searchResult,
      deptSearch = false,
      userSearch = false,
      deptCheckBox = false,
      searchDeptPlaceholder,
      searchUserPlaceholder,
      numberColor, selectAllText, totalShowText
    } = this.props;
    const { deptTreeNode, selectUser, onSearch, onDeptSearch, deptSearchResult, debug } = this.state;
    let userData;
    if (onSearch) {
      userData = searchResult;
    } else {
      userData = users;
    }
    if (debug) {
      window.console.log(userData)
    }
    const tmp = totalShowText.split('$');
    let font = '';
    let end = '';
    if (tmp.length === 2) {
      font = tmp[0];
      end = tmp[1];
    }else {
      font=totalShowText;
    }
    return (
      <div style={{ height: '100%' }}>
        <Spin spinning={loading}>
          {userSearch && (
            <Row>
              <Search placeholder={searchUserPlaceholder} onSearch={this.handleSearch} />
            </Row>
          )}
          {userSearch && <br />}
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card className={styles.card}>
                {deptSearch &&
                <Search placeholder={searchDeptPlaceholder} onSelect={this.onSearchDeptChange}
                        onSearch={this.onSearchDept} />}
                {deptSearch && <br />}
                {!onDeptSearch && (
                  <Tree
                    checkable={deptCheckBox}
                    checkedKeys={this.makeCheckedKeys(deptTreeNode)}
                    onSelect={this.onTreeSelect}
                    onCheck={this.onDeptTreeCheck}
                  >
                    {makeTreeNode(deptTree)}
                  </Tree>
                )}
                {onDeptSearch && (
                  <List
                    size="small"
                    bordered={false}
                    dataSource={deptSearchResult}
                    split={false}
                    renderItem={item => {
                      return (
                        <List.Item>
                          <div className={styles.itemDiv}>
                            <Checkbox
                              className={styles.checkbox}
                              data={item}
                              checked={this.isDeptCheck(item)}
                              onChange={this.onDeptCheck}
                            />
                            <span onClick={() => this.onDeptSelect(item)}>{item.name}</span>
                          </div>
                        </List.Item>
                      );
                    }}
                  />
                )}
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className={styles.treeLeft}>
              <Card className={styles.card}>
                {deptSearch && (
                  <Search
                    placeholder={searchUserPlaceholder}
                    onSearch={this.handleSearch}
                    onChange={this.handleSearchChange}
                  />
                )}
                {deptSearch && <br />}
                <List
                  size="small"
                  bordered={false}
                  dataSource={userData.records}
                  split={false}
                  renderItem={item => {
                    return (
                      <List.Item>
                        <div className={styles.itemDiv}>
                          <Checkbox
                            className={styles.checkbox}
                            data={item}
                            checked={this.isUserCheck(item)}
                            onChange={this.onUserCheck}
                          >
                            {item.username}
                          </Checkbox>
                          <div className={styles.deptName}>{item.deptName}</div>
                        </div>
                      </List.Item>
                    );
                  }}
                />
              </Card>
              <div className={styles.pagination}>
                <Checkbox onChange={this.onCheckAll} className={styles.checkbox}>
                  {selectAllText}
                </Checkbox>
                <Pagination
                  className={styles.pageNoe}
                  simple
                  current={userData.current || userData.current === 0 ? userData.current + 1 : 0}
                  pageSize={userData.size}
                  total={userData.total}
                  onChange={this.onPageChange}
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Form colon={false}>
                <Form.Item label={(
                  <div>{font} <span
                    style={{ color: numberColor }}>{deptTreeNode.length + selectUser.length}</span> {end}
                  </div>
                )}>
                  <div className={styles.resultDiv}>
                    {deptTreeNode && deptTreeNode.map(v => this.makeDeptTag(v))}
                    {selectUser && selectUser.map(v => this.makeUserTag(v))}
                  </div>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}

Contacts.propTypes = {
  deptTree: PropTypes.array.isRequired,
  users: PropTypes.object,
  loading: PropTypes.bool,
  searchResult: PropTypes.object,
  handleSearchUser: PropTypes.func.isRequired,
  deptSearch: PropTypes.bool,
  updateSelectUsers: PropTypes.func.isRequired,
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
