import React, { useState } from 'react';
import { Card, Checkbox, Col, List, message, Tree, Input } from 'antd';
import styles from './contacts.less';
import { makeTreeNode } from '../utils';

const { Search } = Input;

export default ({ searchDeptPlaceholder, deptSearch, handleSearch, deptCheckBox, deptTree = [], handleSearchUser, setDeptId, setOnSearch, deptTreeNode, setDeptTreeNode,updateSelectDept }) => {

  const [deptSearchResult, setDeptSearchResult] = useState([]);
  const [onDeptSearch, setOnDeptSearch] = useState(false);

  const onSearchDeptChange = e => {
    if (!e.target.value) {
      setDeptSearchResult([]);
      setOnDeptSearch(false);
    }
  };

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

  /**
   * 根据关键字搜索部门
   * @param value
   */
  const onSearchDept = value => {
    if (!value) {
      setDeptSearchResult([]);
      setOnDeptSearch(!!value);
    } else {
      const dataList = [];
      searchByKey(value.trim(), deptTree, dataList);
      setDeptSearchResult(dataList);
      setOnDeptSearch(!!value);
    }
  };

  /**
   * 生成选择树
   * @param data
   * @return {*}
   */
  const makeCheckedKeys = data => {
    return data.map(v => v.id);
  };

  /**
   * 点击部门树时传递部门id到回调里面
   * @param selectedKeys 选择的部门id
   */
  const onTreeSelect = selectedKeys => {
    if (handleSearchUser) {
      const [deptId] = selectedKeys;
      handleSearchUser(0, null, deptId);
      setOnSearch(true);
      setDeptId(deptId);
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
  const onDeptTreeCheck = (checkedKeys, { checked, checkedNodes, node }) => {
    const tmp = [];
    if (checked) {
      const [one] = checkedNodes;
      const {
        props: { data },
      } = one;
      tmp.push(data);
      updateSelectDept(deptTreeNode.concat(tmp));
      setDeptTreeNode(deptTreeNode.concat(tmp));
    } else {
      const {
        props: { data },
      } = node;
      const result = deptTreeNode.filter(value => value.id !== data.id);
      updateSelectDept(result.concat(tmp));
      setDeptTreeNode(result.concat(tmp));
    }
  };

  /**
   * 判断部门是否选择
   * @param data
   * @return {boolean}
   */
  const isDeptCheck = data => {
    const result = deptTreeNode.find(value => value.id === data.id);
    return !!result;
  };

  /**
   * 部门查询结果点击checkbox
   * @param e
   */
  const onDeptCheck = e => {
    const {
      target: { checked, data },
    } = e;
    const tmp = [];
    if (checked) {
      tmp.push(data);
      updateSelectDept(deptTreeNode.concat(tmp));
      setDeptTreeNode(deptTreeNode.concat(tmp));
    } else {
      const result = deptTreeNode.filter(value => value.id !== data.id);
      updateSelectDept(result.concat(tmp));
      setDeptTreeNode(result.concat(tmp));
    }
  };

  /**
   * 点击部门查询结果后，传递部门ID给外部查询
   * @param item
   */
  const onDeptSelect = item => {
    handleSearch(null, item.id);
    setOnSearch(true);
  };

  return (
    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
      <Card className={styles.card}>
        {deptSearch &&
        <Search placeholder={searchDeptPlaceholder} onSelect={onSearchDeptChange}
                onSearch={onSearchDept} />}
        {deptSearch && <br />}
        {!onDeptSearch && (
          <Tree
            checkable={deptCheckBox}
            checkedKeys={makeCheckedKeys(deptTreeNode)}
            onSelect={onTreeSelect}
            onCheck={onDeptTreeCheck}
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
                      checked={isDeptCheck(item)}
                      onChange={onDeptCheck}
                    />
                    <span onClick={() => onDeptSelect(item)}>{item.name}</span>
                  </div>
                </List.Item>
              );
            }}
          />
        )}
      </Card>
    </Col>
  )
}
