import React, {useEffect, useState} from 'react';
import {Table, Col, Input} from 'antd';
import styles from './contacts.less';

import emptyImg from "./meeting_attendee_default.png";

const {Search} = Input;

export default ({
                  searchUserPlaceholder, deptSearch, userData,
                  handleSearch, updateSelectUsers,
                  setOnSearch, setNameKey, selectUser, setSelectUser,
                  nameText, workNumberNumber, tableColumnsKey, tableRowKey, emptyTip,tableCheckboxDisabled
                }) => {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    const users = [];
    userData.records.forEach((v, index) => {
      const tmp = selectUser.find(user => user[tableRowKey] === v[tableRowKey]);
      if (tmp) {
        users.push(tmp[tableRowKey]);
      }
    });
    setSelectedRowKeys(users);
  }, [selectUser, tableRowKey, userData.records]);

  /**
   * 姓名搜索为空时处理
   * @param e
   */
  const handleSearchChange = e => {
    if (!e.target.value) {
      setOnSearch(false);
      setNameKey(null);
    }
  };

  const onSelectAll = (selected, selectedRows, changeRows) => {
    if (selected) {
      const tmp = [];
      changeRows.forEach(record => {
        tmp.push(record);
      })
      const newList = selectUser.concat(tmp);
      setSelectUser(newList);
      updateSelectUsers(newList);
    } else {
      let result = selectUser;
      changeRows.forEach(record => {
        result = result.filter(value => value[tableRowKey] !== record[tableRowKey]);
      })
      setSelectUser(result);
      updateSelectUsers(result)
    }
  }

  const onSelect = (record, selected) => {
    if (selected) {
      const tmp = [];
      tmp.push(record);
      const newList = selectUser.concat(tmp);
      setSelectUser(newList);
      updateSelectUsers(newList);
    } else {
      const result = selectUser.filter(value => value[tableRowKey] !== record[tableRowKey]);
      setSelectUser(result);
      updateSelectUsers(result)
    }
  }


  const rowSelection = {
    selectedRowKeys,
    onSelect: onSelect,
    onSelectAll: onSelectAll,
    columnWidth: 20,
    getCheckboxProps: record => {
      if (tableCheckboxDisabled.length === 0) {
        return {disabled: false}
      }
      return {disabled: tableCheckboxDisabled.indexOf(record[tableRowKey]) !== -1}
    }
  };

  const columns = [
    {
      title: nameText,
      dataIndex: tableColumnsKey[0],
      width: 200
    },
    {
      title: workNumberNumber,
      dataIndex: tableColumnsKey[1],
    },
  ];


  return (
    <Col xs={12} sm={12} md={12} lg={12} xl={12} className={styles.treeLeft2}>
      <div className={styles.tableDiv2}>
        {deptSearch && (
          <Search style={{marginTop: 24, marginLeft: 12, width: 322}}
                  placeholder={searchUserPlaceholder}
                  onSearch={handleSearch}
                  onChange={handleSearchChange}
          />
        )}
        <Table size={'small'} rowSelection={rowSelection} columns={columns} style={{marginTop: 2, height: 288}}
               dataSource={userData.records} pagination={false} rowKey={record => record[tableRowKey]}
               locale={{
                 emptyText: <div style={{marginTop: 24}}><img alt={'f'} style={{width: 80, height: 80}} src={emptyImg}/><br/>
                   <div style={{height: 10}}/>
                   <span style={{marginTop: 10}}>{emptyTip}</span></div>
               }}
        />
      </div>

    </Col>)
}
