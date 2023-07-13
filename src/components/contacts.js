import { createFromIconfontCN } from '@ant-design/icons'
import { Col, Form, Input, message, Row, Spin, Tag } from 'antd'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { filterDeptTagShow } from '../utils'
import styles from './contacts.less'
import DndWrapper from './dnd/index'
import Left from './left'
import Right from './right'

const { Search } = Input

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1596018_xkmgoaljpq.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
  ],
})

const Contacts = (props) => {
  const {
    users,
    loading = false,
    searchResult,
    userSearch = false,
    searchUserPlaceholder,
    totalShowText,
    handleSearchUser,
    updateSelectUsers,
    defaultUserSelected,
    defaultDeptSelected,
    updateSelectDept,
    userNameKey,
    deptNameKey,
    radio,
    radioShowText,
    checkStrictly,
    showAllDeptTags,
    Drag,
    showLeft,
    loadData,
    disableUsers,
    disableDept,
    commonUserTextOfSmt,
    isShowUserOfSmt,
    commonUserData,
    allowQueryNow,
    showUserAccount,
    layoutSize,
  } = props

  const [deptTreeNode, setDeptTreeNode] = useState([])
  const [selectUser, setSelectUser] = useState([])
  const [onSearch, setOnSearch] = useState(false)
  const [deptId, setDeptId] = useState(null)
  const [nameKey, setNameKey] = useState(null)
  const [isSelectedOfMeeting, setIsSelectedOfMeeting] = useState(false)

  useEffect(() => {
    updateSelectUsers(defaultUserSelected)
    setSelectUser(defaultUserSelected)
  }, [defaultUserSelected])

  useEffect(() => {
    updateSelectDept(defaultDeptSelected)
    setDeptTreeNode(defaultDeptSelected)
  }, [defaultDeptSelected])

  /**
   *  点击查询回调，会把name key 和 dept id 回传，外部调用查询用
   * @param nameKey 名字搜索关键字
   * @param deptId 部门id
   */
  const handleSearch = (nameKey = null) => {
    if (handleSearchUser) {
      handleSearchUser(0, nameKey, deptId, isSelectedOfMeeting)
      if (isSelectedOfMeeting) {
        setOnSearch(false)
      } else {
        setOnSearch(true)
      }
      setNameKey(nameKey)
    } else {
      message.error('search function not found.')
    }
  }

  /**
   * 生成显示的部门Tag
   * @param v
   * @return {*}
   */
  const makeDeptTag = (v) => (
    <Tag
      key={v.id}
      className={styles.deptTag}
      onClick={(e) => {
        e.preventDefault()
        unCheckDept(v)
      }}
    >
      {v[deptNameKey]}{' '}
      <IconFont type="icon-delete2" style={{ color: '#D8D8D8' }} />
    </Tag>
  )

  /**
   *
   * @param object
   * @param key
   */
  const delObjProperty = (object, key) => {
    const t = object[key]
    if (t) {
      delete object[key]
      delObjProperty(object, t.parentId)
    }
  }

  /**
   *
   * @param data
   */
  const unCheckDept = (data) => {
    console.log(data, '删除')
    const dept = []
    const obj = {}
    deptTreeNode.forEach((value) => {
      obj[value.id] = value
    })
    delObjProperty(obj, data.id)
    Object.keys(obj).forEach((key) => {
      dept.push(obj[key])
    })
    updateSelectDept(dept)
    setDeptTreeNode(dept)
  }

  /**
   * 生成显示的用户Tag
   * @param v
   * @return {*}
   */
  const makeUserTag = (v) => {
    return (
      <Tag
        key={v.userId}
        className={styles.userTag}
        onClick={(e) => {
          e.preventDefault()
          unCheckUser(v)
        }}
      >
        {v[userNameKey]}{' '}
        <IconFont type="icon-delete2" style={{ color: '#D8D8D8' }} />
      </Tag>
    )
  }

  /**
   * 点击用户Tag时取消选择
   * @param data
   */
  const unCheckUser = (data) => {
    const tmp = []
    const result = selectUser.filter((value) => value.userId !== data.userId)
    const userList = result.concat(tmp)
    updateSelectUsers(userList)
    setSelectUser(userList)
  }

  const makeShowMsg = () => {
    if (!radio) {
      const tmp = totalShowText.split('$')
      let font = ''
      let end = ''
      if (tmp.length === 2) {
        font = tmp[0]
        end = tmp[1]
      } else {
        font = totalShowText
      }
      let length = 0
      if (!showAllDeptTags) {
        length = filterDeptTagShow(deptTreeNode).length + selectUser.length
      } else {
        length = deptTreeNode.length + selectUser.length
      }
      return (
        <div>
          {font} <span className={styles.number}>{length}</span> {end}
        </div>
      )
    }
    let name = ''
    if (selectUser.length > 0) {
      const [use] = selectUser
      name = use[userNameKey]
    }
    return (
      <div>
        {radioShowText} <span className={styles.number}>{name}</span>
      </div>
    )
  }

  let userData
  if (onSearch) {
    userData = searchResult
  } else if (isSelectedOfMeeting) {
    userData = commonUserData
  } else {
    userData = users
  }
  return (
    <div style={{ height: '100%' }}>
      <Spin spinning={loading}>
        {userSearch && (
          <Row>
            <Search
              placeholder={searchUserPlaceholder}
              onSearch={handleSearch}
            />
          </Row>
        )}
        {userSearch && <br />}
        <Row>
          {showLeft && (
            <Left
              {...props}
              setDeptId={setDeptId}
              setOnSearch={setOnSearch}
              deptTreeNode={deptTreeNode}
              setDeptTreeNode={setDeptTreeNode}
              handleSearchUser={handleSearchUser}
              checkStrictly={checkStrictly}
              updateSelectDept={updateSelectDept}
              deptNameKey={deptNameKey}
              radio={radio}
              nameKey={nameKey}
              disableDept={disableDept}
              commonUserTextOfSmt={commonUserTextOfSmt}
              isSelectedOfMeeting={isSelectedOfMeeting}
              setIsSelectedOfMeeting={setIsSelectedOfMeeting}
              isShowUserOfSmt={isShowUserOfSmt}
              colSpan={layoutSize[0] || 12}
            />
          )}
          <Right
            {...props}
            userData={userData}
            onSearch={onSearch}
            setOnSearch={setOnSearch}
            loadData={loadData}
            nameKey={nameKey}
            setNameKey={setNameKey}
            selectUser={selectUser}
            handleSearch={handleSearch}
            userNameKey={userNameKey}
            deptId={deptId}
            isSelectedOfMeeting={isSelectedOfMeeting}
            setSelectUser={setSelectUser}
            radio={radio}
            showLeft={showLeft}
            disableUsers={disableUsers}
            allowQueryNow={allowQueryNow}
            colSpan={layoutSize[1] || 12}
          />
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form colon={false} layout="vertical">
              <Form.Item className={styles.label} label={makeShowMsg()}>
                {!radio && (
                  <div className={styles.resultDiv}>
                    {!showAllDeptTags &&
                      deptTreeNode &&
                      filterDeptTagShow(deptTreeNode).map((v) =>
                        makeDeptTag(v),
                      )}
                    {showAllDeptTags &&
                      deptTreeNode &&
                      deptTreeNode.map((v) => makeDeptTag(v))}
                    {Drag
                      ? selectUser.length > 0 && (
                          <DndWrapper
                            updateSelectUsers={updateSelectUsers}
                            data={selectUser}
                            unCheckUser={unCheckUser}
                            userNameKey={userNameKey}
                          />
                        )
                      : selectUser && selectUser.map((v) => makeUserTag(v))}
                  </div>
                )}
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Spin>
    </div>
  )
}

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
  enNameKey: PropTypes.string,
  // 不可选择用户id列表
  disableUsers: PropTypes.array,
  // 不可选择部门id列表
  disableDept: PropTypes.array,
  // 会议常用联系人文字
  // 是否显示会议常用联系人
  isShowUserOfSmt: PropTypes.bool,
  commonUserTextOfSmt: PropTypes.string,
  commonUserData: PropTypes.object,
  // 是否允许输入后直接立刻查询用户数据（不用点按钮）
  allowQueryNow: PropTypes.bool,
  // 是否显示人员账号
  showUserAccount: PropTypes.bool,
  // 自定义左右布局，栅格
  layoutSize: PropTypes.array,
  // 是否显示用户头像
  showUserAvatar: PropTypes.bool,
  // 是否显示用户弹窗
  showUserPopover: PropTypes.bool,
  // 显示拼音名key
  pinyinKey: PropTypes.string,
  // 父组件样式
  parentStyle: PropTypes.string,
  // 默认头像
  defaultAvatar: PropTypes.string,
  // 是否可以操作常用
  canFrequent: PropTypes.bool,
  // 设为常用文字
  setFreText: PropTypes.string,
  // 取消常用文字
  cancelFreText: PropTypes.string,
  // 更新常用联系人
  updateFrequentUser:PropTypes.func,
  // 禁用人员是否可以设置/取消常用
  canDisableUpdate: PropTypes.bool,
}

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
  enNameKey: '',
  disableUsers: [],
  disableDept: [],
  commonUserTextOfSmt: '常用联系人',
  isShowUserOfSmt: true,
  commonUserData: {
    records: [],
  },
  allowQueryNow: false,
  showUserAccount: false,
  layoutSize: [12, 12],
  showUserPopover: false,
  showUserAvatar: false,
  pinyinKey: '',
  parentStyle: '',
  defaultAvatar: '',
  canFrequent: false,
  setFreText: '', // 设为常用
  cancelFreText: '',
  canDisableUpdate:false,
}

export default Contacts
