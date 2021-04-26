import React, { useState } from 'react';
import { Card, Checkbox, Col, List, message, Tree, Input } from 'antd';
import styles from './contacts.less';
import { makeTreeNode,filterDeptTagShow } from '../utils';

const { Search } = Input;

export default ({
                  searchDeptPlaceholder, deptSearch, deptCheckBox, deptTree = [],
                  handleSearchUser, setDeptId, setOnSearch, deptTreeNode, setDeptTreeNode,
                  updateSelectDept, deptNameKey, radio, checkStrictly, returnReducedNode, nameKey
                }) => {

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
    return data.map(v => v.id.toString());
  };

  /**
   * 点击部门树时传递部门id到回调里面
   * @param selectedKeys 选择的部门id
   */
  const onTreeSelect = selectedKeys => {
    if (handleSearchUser) {
      const [deptId] = selectedKeys;
      handleSearchUser(0, nameKey, deptId);
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
    checkedNodes.forEach(v => {
      const {
        data
      } = v;
      tmp.push(data);
    });
    if(returnReducedNode){
      updateSelectDept(filterDeptTagShow(tmp));
    }else {
      updateSelectDept(tmp);
    }

    setDeptTreeNode(tmp);
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
      if(returnReducedNode){
        updateSelectDept(filterDeptTagShow(deptTreeNode.concat(tmp)));
      }else {
        updateSelectDept(deptTreeNode.concat(tmp));
      }
      setDeptTreeNode(deptTreeNode.concat(tmp));
    } else {
      const result = deptTreeNode.filter(value => value.id !== data.id);
      if(returnReducedNode){
        updateSelectDept(filterDeptTagShow(result.concat(tmp)));
      }else {
        updateSelectDept(result.concat(tmp));
      }
      setDeptTreeNode(result.concat(tmp));
    }
  };

  /**
   * 点击部门查询结果后，传递部门ID给外部查询
   * @param item
   */
  const onDeptSelect = item => {
    if (handleSearchUser) {
      handleSearchUser(0, null, item.id);
      setOnSearch(true);
      setDeptId(item.id);
    } else {
      message.error('search function not found.');
    }
  };
  console.log(deptTreeNode)

  return (
    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
      <Card className={styles.card}>
        {deptSearch &&
        <Search placeholder={searchDeptPlaceholder} onSelect={onSearchDeptChange}
                onSearch={onSearchDept} />}
        {deptSearch && <br />}
        {!onDeptSearch && (
          <Tree
              // style={{paddingTop:5}}
            checkable={deptCheckBox && !radio}
            checkedKeys={makeCheckedKeys(deptTreeNode)}
            onSelect={onTreeSelect}
            onCheck={onDeptTreeCheck}
            checkStrictly={checkStrictly}
          >
            {makeTreeNode(deptTree, deptNameKey)}
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
                    {deptCheckBox &&
                    <Checkbox
                      className={styles.checkbox}
                      data={item}
                      checked={isDeptCheck(item)}
                      onChange={onDeptCheck}
                    />}
                    <span style={{ marginLeft: '10px' }}
                          onClick={() => onDeptSelect(item)}>{item[deptNameKey]}</span>
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
