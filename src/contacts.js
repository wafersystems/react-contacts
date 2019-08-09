import React, {PureComponent} from 'react';
import {Card, Checkbox, Col, Form, Input, List, Pagination, Row, Tree, Spin, Tag, Icon} from 'antd';
import {makeTreeNode} from './utils';

import styles from './contacts.less';

const {Search} = Input;

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
  })
};

class Contacts extends PureComponent {

  state = {
    selectedKeys: null,
    onSearch: false,
    deptTreeNode: [],
    selectUser: [],
    deptSearchResult: [],
    onDeptSearch: false
  };

  /**
   *  点击查询回调，会把name key 和 dept id 回传，外部调用查询用
   * @param nameKey 名字搜索关键字
   * @param deptId 部门id
   */
  handleSearch = (nameKey = null, deptId = null) => {
    const {handleSearchUser} = this.props;
    if(handleSearchUser){
      handleSearchUser(nameKey, deptId);
      this.setState({onSearch: true})
    }
  };

  /**
   * 点击部门树时传递部门id到回调里面
   * @param selectedKeys 选择的部门id
   */
  onTreeSelect = (selectedKeys) => {
    const {handleSearchUser} = this.props;
    const [deptId] = selectedKeys;
    handleSearchUser(null, deptId);
    this.setState({onSearch: true})
  };

  /**
   * 点击树的check box 回调
   * @param checkedKeys
   * @param checked
   * @param checkedNodes
   * @param node
   */
  onDeptTreeCheck = (checkedKeys, {checked, checkedNodes, node}) => {
    const tmp = [];
    const {deptTreeNode} = this.state;
    if (checked) {
      const [one] = checkedNodes;
      const {props: {data}} = one;
      tmp.push(data);
      this.setState({deptTreeNode: deptTreeNode.concat(tmp)})
    } else {
      const {props: {data}} = node;
      const result = deptTreeNode.filter(value => value.id !== data.id);
      this.setState({deptTreeNode: result.concat(tmp)});
    }
  };

  /**
   * 点击用户列表的回调
   * @param e
   */
  onUserCheck = (e) => {
    const {target: {checked, data}} = e;
    const {selectUser} = this.state;
    const tmp = [];
    if (checked) {
      tmp.push(data);
      this.setState({selectUser: selectUser.concat(tmp)})
    } else {
      const result = selectUser.filter(value => value.id !== data.id);
      this.setState({selectUser: result.concat(tmp)});
    }
  };

  /**
   * 点击用户全选的回调
   * @param e
   */
  onCheckAll = (e) => {
    const {target: {checked}} = e;
    const tmp = [];
    if (checked) {
      const {onSearch} = this.state;
      const {users, searchResult} = this.props;
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
    this.setState({selectUser: tmp});
  };

  /**
   * 生成显示的部门Tag
   * @param v
   * @return {*}
   */
  makeDeptTag = (v) => {
    return (<Tag
      className={styles.deptTag}
      onClick={e => {
                   e.preventDefault();
                   this.unCheckDept(v);
                 }}
    >{v.name} <Icon
      type="close-circle"
      theme="filled"
    />
    </Tag>)
  };

  /**
   *
   * @param data
   */
  unCheckDept = (data) => {
    const tmp = [];
    const {deptTreeNode} = this.state;
    const result = deptTreeNode.filter(value => value.id !== data.id);
    this.setState({deptTreeNode: result.concat(tmp)});
  };

  /**
   * 生成显示的用户Tag
   * @param v
   * @return {*}
   */
  makeUserTag = (v) => {
    return (<Tag
      className={styles.userTag}
      onClick={e => {
                   e.preventDefault();
                   this.unCHeckUser(v);
                 }}
    >{v.username} <Icon
      type="close-circle"
      theme="filled"
    />
    </Tag>)
  };

  /**
   * 点击用户Tag时取消选择
   * @param data
   */
  unCHeckUser = (data) => {
    const tmp = [];
    const {selectUser} = this.state;
    const result = selectUser.filter(value => value.id !== data.id);
    this.setState({selectUser: result.concat(tmp)});
  };

  /**
   * 判断用户是否选择
   * @param data
   * @return {boolean}
   */
  isUserCheck = (data) => {
    const {selectUser} = this.state;
    const result = selectUser.find(value => value.id === data.id);
    return !!result
  };

  /**
   * 判断部门是否选择
   * @param data
   * @return {boolean}
   */
  isDeptCheck = (data) => {
    const {deptTreeNode} = this.state;
    const result = deptTreeNode.find(value => value.id === data.id);
    return !!result
  };

  /**
   * 生成选择树
   * @param data
   * @return {*}
   */
  makeCheckedKeys = (data) => {
    return data.map(v => v.id);
  };

  /**
   * 根据关键字搜索部门
   * @param e
   */
  onSearchDept = e => {
    const {value} = e.target;
    if (!value) {
      this.setState({deptSearchResult: [], onDeptSearch: !!value});
    } else {
      const {deptTree = []} = this.props;
      const dataList = [];
      searchByKey(value, deptTree, dataList);
      this.setState({deptSearchResult: dataList, onDeptSearch: !!value});
    }
  };

  /**
   * 点击部门查询结果后，传递部门ID给外部查询
   * @param item
   */
  onDeptSelect = (item) => {
    this.handleSearch(null, item.id);
    this.setState({onSearch: true})
  };

  /**
   * 部门查询结果点击checkbox
   * @param e
   */
  onDeptCheck = (e) => {
    const {target: {checked, data}} = e;
    const {deptTreeNode} = this.state;
    const tmp = [];
    if (checked) {
      tmp.push(data);
      this.setState({deptTreeNode: deptTreeNode.concat(tmp)})
    } else {
      const result = deptTreeNode.filter(value => value.id !== data.id);
      this.setState({deptTreeNode: result.concat(tmp)});
    }
  };

  render() {
    const {deptTree = [], users, loading = false, searchResult, deptSearch=false,userSearch=false,deptCheckBox=false} = this.props;
    const {deptTreeNode, selectUser, onSearch, onDeptSearch, deptSearchResult} = this.state;
    let userData;
    console.log(styles)
    if (onSearch) {
      userData = searchResult;
    } else {
      userData = users;
    }
    return (
      <div style={{height: '100%'}}>
        <Spin spinning={loading}>
          {userSearch && <Row>
            <Search placeholder="请输入搜索姓名" onSearch={value => this.handleSearch(value)} />
          </Row>}
          {userSearch && <br />}
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card className={styles.card}>
                {deptSearch && <Search placeholder="请输入搜索部门" onChange={this.onSearchDept} />}
                {deptSearch && <br />}
                {!onDeptSearch && <Tree
                  checkable={deptCheckBox}
                  checkedKeys={this.makeCheckedKeys(deptTreeNode)}
                  onSelect={this.onTreeSelect}
                  onCheck={this.onDeptTreeCheck}
                >
                  {makeTreeNode(deptTree)}
                </Tree>}
                {onDeptSearch && <List
                  size="small"
                  bordered={false}
                  dataSource={deptSearchResult}
                  split={false}
                  renderItem={item => {
                    return <List.Item>
                      <div className={styles.itemDiv}>
                        <Checkbox
                          className={styles.checkbox}
                          data={item}
                          checked={this.isDeptCheck(item)}
                          onChange={this.onDeptCheck}
                        /><span onClick={() => this.onDeptSelect(item)}>{item.name}</span>
                      </div>
                    </List.Item>
                  }
                  }
                />}
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className={styles.treeLeft}>
              <Card className={styles.card}>
                {deptSearch && <Search placeholder="请输入搜索姓名" onSearch={this.handleSearch} />}
                {deptSearch &&  <br />}
                <List
                  size="small"
                  bordered={false}
                  dataSource={userData.records}
                  split={false}
                  renderItem={item => {
                    return <List.Item>
                      <div className={styles.itemDiv}>
                        <Checkbox
                          className={styles.checkbox}
                          data={item}
                          checked={this.isUserCheck(item)}
                          onChange={this.onUserCheck}
                        >{item.username}
                        </Checkbox>
                        <div className={styles.deptName}>{item.deptName}</div>
                      </div>
                    </List.Item>
                  }
                  }
                />
              </Card>
              <div className={styles.pagination}>
                <Checkbox onChange={this.onCheckAll} className={styles.checkbox}>全选</Checkbox>
                <Pagination
                  className={styles.pageNoe}
                  simple
                  current={userData.current}
                  pageSize={userData.size}
                  total={userData.total}
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Form colon={false}>
                <Form.Item label={`共选择了${deptTreeNode.length+selectUser.length}个`}>
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

Contacts.propTypes = {};

export default Contacts;
