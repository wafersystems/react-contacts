import {
  Card,
  Checkbox,
  Col,
  Input,
  List,
  message,
  Pagination,
  Radio,
  Popover,
} from 'antd'
import React, { useEffect, useState } from 'react'
import styles from './contacts.less'

let timeout
const { Search } = Input

export default ({
  selectAllText,
  searchUserPlaceholder,
  deptSearch,
  userData,
  handleSearch,
  handleSearchUser,
  deptId,
  updateSelectUsers,
  debug = false,
  setOnSearch,
  nameKey,
  setNameKey,
  selectUser,
  setSelectUser,
  userNameKey,
  radio,
  showLeft,
  enNameKey,
  disableUsers,
  isSelectedOfMeeting,
  allowQueryNow,
  showUserAccount = false,
  colSpan = 12,
  showUserPopover = false,
  showUserAvatar = false,
  pinyinKey = '',
  parentStyle = '',
  defaultAvatar = '',
  canFrequent = false,
  setFreText = '', // 设为常用
  cancelFreText = '',
}) => {
  const [selectAll, setSelectAll] = useState(false)

  // 当列表数据发生变化时，重新计算全选
  useEffect(() => {
    calculateSelectAll(selectUser)
  }, [userData])

  // 当选中人数据发生变化，重新计算全选
  useEffect(() => {
    calculateSelectAll(selectUser)
  }, [selectUser])

  /**
   * 姓名搜索为空时处理
   * @param e
   */
  const handleSearchChange = (e) => {
    const str = e.target.value.replace(/\s*/g, '')
    if (allowQueryNow && str && handleSearch) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      timeout = setTimeout(() => {
        handleSearch(str)
      }, 300)
    }

    if (!e.target.value) {
      setOnSearch(false)
      setNameKey(null)
      handleSearch('')
    }
  }

  /**
   * 判断用户是否选择
   * @param data
   * @return {boolean}
   */
  const isUserCheck = (data) => {
    const result = selectUser.find((value) => value.userId === data.userId)
    return !!result
  }

  /**
   * 点击用户列表的回调
   * @param e
   */
  const onUserCheck = (e) => {
    const {
      target: { checked, data },
    } = e
    const tmp = []
    let newSelectUser
    if (checked) {
      tmp.push(data)
      newSelectUser = selectUser.concat(tmp)
    } else {
      const result = selectUser.filter((value) => value.userId !== data.userId)
      newSelectUser = result.concat(tmp)
    }
    setSelectUser(newSelectUser)
    updateSelectUsers(newSelectUser)
    if (checked) {
      calculateSelectAll(newSelectUser)
    } else {
      setSelectAll(false)
    }
  }

  /**
   * Radio时点击用户列表的回调
   * @param e
   */
  const onUserRadioCheck = (e) => {
    const {
      target: { checked, data },
    } = e
    let newSelectUser = []
    if (checked) {
      newSelectUser.push(data)
    } else {
    }
    setSelectUser(newSelectUser)
    updateSelectUsers(newSelectUser)
  }

  /**
   * 翻页查询处理
   * @param page
   */
  const onPageChange = (page) => {
    if (debug) {
      window.console.log(page)
    }
    if (handleSearchUser) {
      handleSearchUser(page, nameKey, deptId, isSelectedOfMeeting)
      if (isSelectedOfMeeting) {
        setOnSearch(false)
      } else {
        setOnSearch(true)
      }
    } else {
      message.error('search function not found.')
    }
  }

  /**
   * 计算是否全部选中
   * @param newSelectUser
   */
  const calculateSelectAll = (newSelectUser) => {
    let tmp = []
    console.log(disableUsers, '+== console.log(disableUsers)=')
    userData.records.forEach((value) => {
      if (!disableUsers.includes(value.userId)) {
        tmp.push(value)
      }
    })
    if (tmp.length === 0) {
      setSelectAll(false)
      return
    }
    let count = 0
    tmp.forEach((val) => {
      const result = newSelectUser.find(
        (valUser) => val.userId === valUser.userId,
      )
      if (result) {
        count += 1
      }
    })
    setSelectAll(count === tmp.length)
  }

  /**
   * 点击用户全选的回调
   * @param e
   */
  const onCheckAll = (e) => {
    const {
      target: { checked },
    } = e
    setSelectAll(checked)
    const tmp = []
    userData.records.forEach((value) => {
      tmp.push(value)
    })
    let newSelectUser = []
    console.log(checked, '+===checked===')
    if (checked) {
      // 如果是选中，遍历添加，重复的不添加
      tmp.forEach((val) => {
        const result = selectUser.find(
          (valUser) => val.userId === valUser.userId,
        )
        if (!result && disableUsers.indexOf(val.userId) === -1) {
          newSelectUser.push(val)
        }
      })
      newSelectUser = selectUser.concat(newSelectUser)
    } else {
      // 不选中的遍历删除
      selectUser.forEach((val) => {
        const result = tmp.find((valUser) => val.userId === valUser.userId)
        if (!result) {
          newSelectUser.push(val)
        }
      })
    }
    updateSelectUsers(newSelectUser)
    setSelectUser(newSelectUser)
  }
  const colWidth = showLeft ? colSpan : 24;
  console.log(userData, '===userData==')
  return (
    <Col
      xs={colWidth}
      sm={colWidth}
      md={colWidth}
      lg={colWidth}
      xl={colWidth}
      className={styles.treeLeft}
    >
      <Card
        style={{
          borderBottomRightRadius: '6px',
          borderBottomLeftRadius: 0,
          borderTopRightRadius: '6px',
          borderTopLeftRadius: 0,
          borderLeft: 0,
        }}
        className={styles.card}
      >
        {deptSearch && (
          <Search
            placeholder={searchUserPlaceholder}
            onSearch={handleSearch}
            onChange={handleSearchChange}
          />
        )}
        {deptSearch && <br />}
        <List
          className={
            userData.records.length === 0 ? styles.listEmpty : styles.list
          }
          size="small"
          bordered={false}
          dataSource={userData.records}
          split={false}
          renderItem={(item) => {
            const { avatar = '' } = item;
            return (
              <List.Item>
                <div className={styles.itemDiv}>
                  <div className={styles.checkbox} title={item[userNameKey]}>
                    {radio && (
                      <Radio
                        className={styles.checkbox}
                        checked={isUserCheck(item)}
                        data={item}
                        onChange={onUserRadioCheck}
                        disabled={disableUsers.includes(item.userId)}
                      >
                        {showUserPopover ? (
                          <Popover
                            placement="right"
                            content={
                              <div className={parentStyle.userInfo}>
                                {showUserAvatar && <img src={avatar || defaultAvatar} alt="" />}
                                <div className={parentStyle.name}>{item[userNameKey]}</div>
                                <div className={parentStyle.nameEn}>{item[enNameKey]}</div>
                              </div>
                            }
                            overlayClassName={parentStyle.avatarPopover}
                            // getPopupContainer={(triggerNode) => triggerNode}
                          >
                            {item[userNameKey]}
                          </Popover>
                        ) : (
                          item[userNameKey]
                        )}
                      </Radio>
                    )}
                    {!radio && (
                      <Checkbox
                        className={styles.checkbox}
                        data={item}
                        checked={isUserCheck(item)}
                        onChange={onUserCheck}
                        title={item[userNameKey]}
                        disabled={disableUsers.includes(item.userId)}
                      >
                        {showUserPopover ? (
                          <Popover
                            placement="right"
                            content={
                              <div className={parentStyle.userInfo}>
                                {showUserAvatar && <img src={avatar || defaultAvatar} alt="" />}
                                <div className={parentStyle.name}>{item[userNameKey]}</div>
                                <div className={parentStyle.nameEn}>{item[enNameKey]}</div>
                              </div>
                            }
                            overlayClassName={parentStyle.avatarPopover}
                          >
                            {item[userNameKey]}
                          </Popover>
                        ) : (
                          item[userNameKey]
                        )}
                      </Checkbox>
                    )}
                  </div>

                  {/* 拼音 */}
                  {pinyinKey && (
                    <div
                      style={{ paddingLeft: '10px' }}
                      title={item[pinyinKey]}
                      className={
                        disableUsers.includes(item.userId)
                          ? styles.deptName_disabled
                          : styles.deptName
                      }
                    >
                      {item[pinyinKey]}
                    </div>
                  )}

                  {/* 英文名 */}
                  {/* {enNameKey && (
                    <div
                      style={{ paddingLeft: '10px' }}
                      title={item[enNameKey]}
                      className={
                        disableUsers.includes(item.userId)
                          ? styles.deptName_disabled
                          : styles.deptName
                      }
                    >
                      {item[enNameKey]}
                    </div>
                  )} */}

                  {/* 新加userName区分同名用户 */}
                  {showUserAccount && (
                    <div
                      className={
                        disableUsers.includes(item.userId)
                          ? styles.userName_disabled
                          : styles.userName
                      }
                    >
                      {item.username || ''}
                    </div>
                  )}

                  {/* 部门 */}
                  <div
                    className={
                      disableUsers.includes(item.userId)
                        ? styles.deptName_disabled
                        : styles.deptName
                    }
                    title={item.deptName}
                  >
                    {item.deptName}
                  </div>

                  {/* 常用人员操作 */}
                  {canFrequent && (
                    <div
                      style={
                        disableUsers.includes(item.userId) ? {} : { color: 'rgb(28, 82, 151)' }
                      }
                      className={
                        disableUsers.includes(item.userId)
                          ? styles.deptName_disabled
                          : styles.deptName
                      }
                    >
                      {item.userId > 9 ? cancelFreText : setFreText}
                    </div>
                  )}
                </div>
              </List.Item>
            )
          }}
        />
      </Card>
      <div className={styles.pagination}>
        {!radio && (
          <Checkbox
            onChange={onCheckAll}
            className={styles.checkbox}
            checked={selectAll}
          >
            {selectAllText}
          </Checkbox>
        )}
        <Pagination
          className={styles.pageNoe}
          simple
          current={userData.current || 1}
          pageSize={userData.size}
          total={userData.total}
          onChange={onPageChange}
        />
      </div>
    </Col>
  )
}
