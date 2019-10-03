import React from 'react';
import { Card, Checkbox, Col, Input, List, message, Pagination } from 'antd';
import styles from './contacts.less';

const { Search } = Input;

export default ({ selectAllText, searchUserPlaceholder, deptSearch, userData, searchResult, users, handleSearch, handleSearchUser, deptId, updateSelectUsers, debug = false, onSearch, setOnSearch, nameKey, setNameKey, selectUser, setSelectUser }) => {

  /**
   * 姓名搜索为空时处理
   * @param e
   */
  const handleSearchChange = e => {
    console.log(e.target.value)
    if (!e.target.value) {
      setOnSearch(false);
      setNameKey(null);
      // if (handleSearchUser) {
      //   handleSearchUser(0, null, deptId);
      //   setOnSearch(true);
      //   setNameKey(null);
      // } else {
      //   message.error('search function not found.');
      // }
    }
  };

  /**
   * 判断用户是否选择
   * @param data
   * @return {boolean}
   */
  const isUserCheck = data => {
    const result = selectUser.find(value => value.userId === data.userId);
    return !!result;
  };

  /**
   * 点击用户列表的回调
   * @param e
   */
  const onUserCheck = e => {
    const {
      target: { checked, data },
    } = e;
    const tmp = [];
    let newSelectUser = [];
    if (checked) {
      tmp.push(data);
      newSelectUser = selectUser.concat(tmp);
    } else {
      const result = selectUser.filter(value => value.userId !== data.userId);
      newSelectUser = result.concat(tmp);
    }
    setSelectUser(newSelectUser);
    updateSelectUsers(newSelectUser);
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
      handleSearchUser(page - 1, nameKey, deptId);
      setOnSearch(true);
    } else {
      message.error('search function not found.');
    }
  };

  /**
   * 点击用户全选的回调
   * @param e
   */
  const onCheckAll = e => {
    const {
      target: { checked },
    } = e;
    const tmp = [];
    if (checked) {
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
    updateSelectUsers(tmp);
    setSelectUser(tmp);
  };

  return (
    <Col xs={12} sm={12} md={12} lg={12} xl={12} className={styles.treeLeft}>
      <Card className={styles.card}>
        {deptSearch && (
          <Search
            placeholder={searchUserPlaceholder}
            onSearch={handleSearch}
            onChange={handleSearchChange}
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
                    checked={isUserCheck(item)}
                    onChange={onUserCheck}
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
        <Checkbox onChange={onCheckAll} className={styles.checkbox}>
          {selectAllText}
        </Checkbox>
        <Pagination
          className={styles.pageNoe}
          simple
          current={userData.current || userData.current === 0 ? userData.current + 1 : 0}
          pageSize={userData.size}
          total={userData.total}
          onChange={onPageChange}
        />
      </div>
    </Col>)
}
