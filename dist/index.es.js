import 'antd/es/spin/style';
import _Spin from 'antd/es/spin';
import 'antd/es/col/style';
import _Col from 'antd/es/col';
import 'antd/es/form/style';
import _Form from 'antd/es/form';
import 'antd/es/row/style';
import _Row from 'antd/es/row';
import 'antd/es/tag/style';
import _Tag from 'antd/es/tag';
import 'antd/es/icon/style';
import _Icon from 'antd/es/icon';
import 'antd/es/message/style';
import _message from 'antd/es/message';
import 'antd/es/input/style';
import _Input from 'antd/es/input';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'antd/es/pagination/style';
import _Pagination from 'antd/es/pagination';
import 'antd/es/card/style';
import _Card from 'antd/es/card';
import 'antd/es/list/style';
import _List from 'antd/es/list';
import 'antd/es/checkbox/style';
import _Checkbox from 'antd/es/checkbox';
import 'antd/es/tree/style';
import _Tree from 'antd/es/tree';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".contacts_rightAlign__2DAXJ {\n  text-align: right;\n}\n.contacts_treeLeft__zvPEq {\n  padding-left: 10px;\n}\n.contacts_card__9kiRW {\n  min-height: 452px;\n  max-height: 452px;\n  overflow-y: auto;\n}\n.contacts_card__9kiRW .ant-card-body {\n  padding-left: 8px;\n  padding-top: 16px;\n  padding-right: 7px;\n}\n.contacts_deptInfo__3e5E7 {\n  height: 21px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.contacts_itemDiv__3FGhc {\n  width: 100%;\n}\n.contacts_itemDiv__3FGhc .contacts_checkbox__tJaOX {\n  float: left;\n}\n.contacts_itemDiv__3FGhc .contacts_deptName__29k1a {\n  float: right;\n}\n.contacts_itemDiv__3FGhc:hover {\n  background: #E6F7FF;\n}\n.contacts_pagination__XYaLU {\n  width: 100%;\n  margin-top: 9px;\n}\n.contacts_pagination__XYaLU .contacts_checkbox__tJaOX {\n  padding-left: 10px;\n  float: left;\n}\n.contacts_pagination__XYaLU .contacts_pageNoe__1EStH {\n  float: right;\n}\n.contacts_label__VCr20 .ant-form-item-label {\n  line-height: 1;\n}\n.contacts_resultDiv__2wcEb {\n  border: 1px solid #d9d9d9;\n  background: white;\n  width: 100%;\n  min-height: 100px;\n  max-height: 123px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.contacts_resultDiv__2wcEb .contacts_deptTag__3mANU {\n  color: #1890FF;\n  background-color: #E6F7FF;\n  border: 1px solid #91D5FF;\n  margin-left: 10px;\n}\n.contacts_resultDiv__2wcEb .contacts_userTag__20MmI {\n  color: #375EEE;\n  background-color: rgba(55, 94, 238, 0.09);\n  border-radius: 4px;\n  border: 1px solid #375EEE;\n  margin-left: 10px;\n}\n";
var styles = {"rightAlign":"contacts_rightAlign__2DAXJ","treeLeft":"contacts_treeLeft__zvPEq","card":"contacts_card__9kiRW","deptInfo":"contacts_deptInfo__3e5E7","itemDiv":"contacts_itemDiv__3FGhc","checkbox":"contacts_checkbox__tJaOX","deptName":"contacts_deptName__29k1a","pagination":"contacts_pagination__XYaLU","pageNoe":"contacts_pageNoe__1EStH","label":"contacts_label__VCr20","resultDiv":"contacts_resultDiv__2wcEb","deptTag":"contacts_deptTag__3mANU","userTag":"contacts_userTag__20MmI"};
styleInject(css);

var Search = _Input.Search;
var Right = (function (_ref) {
  var selectAllText = _ref.selectAllText,
      searchUserPlaceholder = _ref.searchUserPlaceholder,
      deptSearch = _ref.deptSearch,
      userData = _ref.userData,
      searchResult = _ref.searchResult,
      users = _ref.users,
      handleSearch = _ref.handleSearch,
      handleSearchUser = _ref.handleSearchUser,
      deptId = _ref.deptId,
      updateSelectUsers = _ref.updateSelectUsers,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug,
      onSearch = _ref.onSearch,
      setOnSearch = _ref.setOnSearch,
      nameKey = _ref.nameKey,
      setNameKey = _ref.setNameKey,
      selectUser = _ref.selectUser,
      setSelectUser = _ref.setSelectUser;

  /**
   * 姓名搜索为空时处理
   * @param e
   */
  var handleSearchChange = function handleSearchChange(e) {
    console.log(e.target.value);

    if (!e.target.value) {
      setOnSearch(false);
      setNameKey(null); // if (handleSearchUser) {
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


  var isUserCheck = function isUserCheck(data) {
    var result = selectUser.find(function (value) {
      return value.userId === data.userId;
    });
    return !!result;
  };
  /**
   * 点击用户列表的回调
   * @param e
   */


  var onUserCheck = function onUserCheck(e) {
    var _e$target = e.target,
        checked = _e$target.checked,
        data = _e$target.data;
    var tmp = [];
    var newSelectUser = [];

    if (checked) {
      tmp.push(data);
      newSelectUser = selectUser.concat(tmp);
    } else {
      var result = selectUser.filter(function (value) {
        return value.userId !== data.userId;
      });
      newSelectUser = result.concat(tmp);
    }

    setSelectUser(newSelectUser);
    updateSelectUsers(newSelectUser);
  };
  /**
   * 翻页查询处理
   * @param page
   */


  var onPageChange = function onPageChange(page) {
    if (debug) {
      window.console.log(page);
    }

    if (handleSearchUser) {
      handleSearchUser(page - 1, nameKey, deptId);
      setOnSearch(true);
    } else {
      _message.error('search function not found.');
    }
  };
  /**
   * 点击用户全选的回调
   * @param e
   */


  var onCheckAll = function onCheckAll(e) {
    var checked = e.target.checked;
    var tmp = [];

    if (checked) {
      var _userData;

      if (onSearch) {
        _userData = searchResult;
      } else {
        _userData = users;
      }

      _userData.records.forEach(function (value) {
        tmp.push(value);
      });
    }

    updateSelectUsers(tmp);
    setSelectUser(tmp);
  };

  return React.createElement(_Col, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    className: styles.treeLeft
  }, React.createElement(_Card, {
    className: styles.card
  }, deptSearch && React.createElement(Search, {
    placeholder: searchUserPlaceholder,
    onSearch: handleSearch,
    onChange: handleSearchChange
  }), deptSearch && React.createElement("br", null), React.createElement(_List, {
    size: "small",
    bordered: false,
    dataSource: userData.records,
    split: false,
    renderItem: function renderItem(item) {
      return React.createElement(_List.Item, null, React.createElement("div", {
        className: styles.itemDiv
      }, React.createElement(_Checkbox, {
        className: styles.checkbox,
        data: item,
        checked: isUserCheck(item),
        onChange: onUserCheck
      }, item.username), React.createElement("div", {
        className: styles.deptName
      }, item.deptName)));
    }
  })), React.createElement("div", {
    className: styles.pagination
  }, React.createElement(_Checkbox, {
    onChange: onCheckAll,
    className: styles.checkbox
  }, selectAllText), React.createElement(_Pagination, {
    className: styles.pageNoe,
    simple: true,
    current: userData.current || userData.current === 0 ? userData.current + 1 : 0,
    pageSize: userData.size,
    total: userData.total,
    onChange: onPageChange
  })));
});

var TreeNode = _Tree.TreeNode;
/**
 *
 * @param nodes
 * @returns {*} tree nodes.
 */

function makeTreeNode(nodes) {
  return nodes.map(function (v) {
    var nodeKey = v.id;
    return React.createElement(TreeNode, {
      data: v,
      title: v.name,
      key: nodeKey
    }, v.children.length > 0 && makeTreeNode(v.children));
  });
}

var Search$1 = _Input.Search;
var Left = (function (_ref) {
  var searchDeptPlaceholder = _ref.searchDeptPlaceholder,
      deptSearch = _ref.deptSearch,
      handleSearch = _ref.handleSearch,
      deptCheckBox = _ref.deptCheckBox,
      _ref$deptTree = _ref.deptTree,
      deptTree = _ref$deptTree === void 0 ? [] : _ref$deptTree,
      handleSearchUser = _ref.handleSearchUser,
      setDeptId = _ref.setDeptId,
      setOnSearch = _ref.setOnSearch,
      deptTreeNode = _ref.deptTreeNode,
      setDeptTreeNode = _ref.setDeptTreeNode,
      updateSelectDept = _ref.updateSelectDept;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      deptSearchResult = _useState2[0],
      setDeptSearchResult = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      onDeptSearch = _useState4[0],
      setOnDeptSearch = _useState4[1];

  var onSearchDeptChange = function onSearchDeptChange(e) {
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


  var searchByKey = function searchByKey(key, deptTree, dataList) {
    deptTree.forEach(function (item) {
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


  var onSearchDept = function onSearchDept(value) {
    if (!value) {
      setDeptSearchResult([]);
      setOnDeptSearch(!!value);
    } else {
      var dataList = [];
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


  var makeCheckedKeys = function makeCheckedKeys(data) {
    return data.map(function (v) {
      return v.id;
    });
  };
  /**
   * 点击部门树时传递部门id到回调里面
   * @param selectedKeys 选择的部门id
   */


  var onTreeSelect = function onTreeSelect(selectedKeys) {
    if (handleSearchUser) {
      var _selectedKeys = _slicedToArray(selectedKeys, 1),
          deptId = _selectedKeys[0];

      handleSearchUser(0, null, deptId);
      setOnSearch(true);
      setDeptId(deptId);
    } else {
      _message.error('search function not found.');
    }
  };
  /**
   * 点击树的check box 回调
   * @param checkedKeys
   * @param checked
   * @param checkedNodes
   * @param node
   */


  var onDeptTreeCheck = function onDeptTreeCheck(checkedKeys, _ref2) {
    var checked = _ref2.checked,
        checkedNodes = _ref2.checkedNodes,
        node = _ref2.node;
    var tmp = [];

    if (checked) {
      var _checkedNodes = _slicedToArray(checkedNodes, 1),
          one = _checkedNodes[0];

      var data = one.props.data;
      tmp.push(data);
      updateSelectDept(deptTreeNode.concat(tmp));
      setDeptTreeNode(deptTreeNode.concat(tmp));
    } else {
      var _data = node.props.data;
      var result = deptTreeNode.filter(function (value) {
        return value.id !== _data.id;
      });
      updateSelectDept(result.concat(tmp));
      setDeptTreeNode(result.concat(tmp));
    }
  };
  /**
   * 判断部门是否选择
   * @param data
   * @return {boolean}
   */


  var isDeptCheck = function isDeptCheck(data) {
    var result = deptTreeNode.find(function (value) {
      return value.id === data.id;
    });
    return !!result;
  };
  /**
   * 部门查询结果点击checkbox
   * @param e
   */


  var onDeptCheck = function onDeptCheck(e) {
    var _e$target = e.target,
        checked = _e$target.checked,
        data = _e$target.data;
    var tmp = [];

    if (checked) {
      tmp.push(data);
      updateSelectDept(deptTreeNode.concat(tmp));
      setDeptTreeNode(deptTreeNode.concat(tmp));
    } else {
      var result = deptTreeNode.filter(function (value) {
        return value.id !== data.id;
      });
      updateSelectDept(result.concat(tmp));
      setDeptTreeNode(result.concat(tmp));
    }
  };
  /**
   * 点击部门查询结果后，传递部门ID给外部查询
   * @param item
   */


  var onDeptSelect = function onDeptSelect(item) {
    handleSearch(null, item.id);
    setOnSearch(true);
  };

  return React.createElement(_Col, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12
  }, React.createElement(_Card, {
    className: styles.card
  }, deptSearch && React.createElement(Search$1, {
    placeholder: searchDeptPlaceholder,
    onSelect: onSearchDeptChange,
    onSearch: onSearchDept
  }), deptSearch && React.createElement("br", null), !onDeptSearch && React.createElement(_Tree, {
    checkable: deptCheckBox,
    checkedKeys: makeCheckedKeys(deptTreeNode),
    onSelect: onTreeSelect,
    onCheck: onDeptTreeCheck
  }, makeTreeNode(deptTree)), onDeptSearch && React.createElement(_List, {
    size: "small",
    bordered: false,
    dataSource: deptSearchResult,
    split: false,
    renderItem: function renderItem(item) {
      return React.createElement(_List.Item, null, React.createElement("div", {
        className: styles.itemDiv
      }, React.createElement(_Checkbox, {
        className: styles.checkbox,
        data: item,
        checked: isDeptCheck(item),
        onChange: onDeptCheck
      }), React.createElement("span", {
        onClick: function onClick() {
          return onDeptSelect(item);
        }
      }, item.name)));
    }
  })));
});

var Search$2 = _Input.Search;

var Contacts = function Contacts(props) {
  var users = props.users,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      searchResult = props.searchResult,
      _props$userSearch = props.userSearch,
      userSearch = _props$userSearch === void 0 ? false : _props$userSearch,
      searchUserPlaceholder = props.searchUserPlaceholder,
      numberColor = props.numberColor,
      totalShowText = props.totalShowText,
      handleSearchUser = props.handleSearchUser,
      updateSelectUsers = props.updateSelectUsers,
      defaultUserSelected = props.defaultUserSelected,
      updateSelectDept = props.updateSelectDept;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      deptTreeNode = _useState2[0],
      setDeptTreeNode = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectUser = _useState4[0],
      setSelectUser = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      onSearch = _useState6[0],
      setOnSearch = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      deptId = _useState8[0],
      setDeptId = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      nameKey = _useState10[0],
      setNameKey = _useState10[1];

  useEffect(function () {
    setSelectUser(defaultUserSelected);
  }, [defaultUserSelected]);
  /**
   *  点击查询回调，会把name key 和 dept id 回传，外部调用查询用
   * @param nameKey 名字搜索关键字
   */

  var handleSearch = function handleSearch() {
    var nameKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (handleSearchUser) {
      handleSearchUser(0, nameKey, deptId);
      setOnSearch(true);
      setNameKey(nameKey);
    } else {
      _message.error('search function not found.');
    }
  };
  /**
   * 生成显示的部门Tag
   * @param v
   * @return {*}
   */


  var makeDeptTag = function makeDeptTag(v) {
    return React.createElement(_Tag, {
      key: v.id,
      className: styles.deptTag,
      onClick: function onClick(e) {
        e.preventDefault();
        unCheckDept(v);
      }
    }, v.name, " ", React.createElement(_Icon, {
      type: "close-circle",
      theme: "filled"
    }));
  };
  /**
   *
   * @param data
   */


  var unCheckDept = function unCheckDept(data) {
    var tmp = [];
    var result = deptTreeNode.filter(function (value) {
      return value.id !== data.id;
    });
    var dept = result.concat(tmp);
    updateSelectDept(dept);
    setDeptTreeNode(dept);
  };
  /**
   * 生成显示的用户Tag
   * @param v
   * @return {*}
   */


  var makeUserTag = function makeUserTag(v) {
    return React.createElement(_Tag, {
      key: v.userId,
      className: styles.userTag,
      onClick: function onClick(e) {
        e.preventDefault();
        unCheckUser(v);
      }
    }, v.username, " ", React.createElement(_Icon, {
      type: "close-circle",
      theme: "filled"
    }));
  };
  /**
   * 点击用户Tag时取消选择
   * @param data
   */


  var unCheckUser = function unCheckUser(data) {
    var tmp = [];
    var result = selectUser.filter(function (value) {
      return value.userId !== data.userId;
    });
    var userList = result.concat(tmp);
    updateSelectUsers(userList);
    setSelectUser(userList);
  };

  var userData;

  if (onSearch) {
    userData = searchResult;
  } else {
    userData = users;
  }

  var tmp = totalShowText.split('$');
  var font = '';
  var end = '';

  if (tmp.length === 2) {
    font = tmp[0];
    end = tmp[1];
  } else {
    font = totalShowText;
  }

  return React.createElement("div", {
    style: {
      height: '100%'
    }
  }, React.createElement(_Spin, {
    spinning: loading
  }, userSearch && React.createElement(_Row, null, React.createElement(Search$2, {
    placeholder: searchUserPlaceholder,
    onSearch: handleSearch
  })), userSearch && React.createElement("br", null), React.createElement(_Row, null, React.createElement(Left, _extends({}, props, {
    setDeptId: setDeptId,
    setOnSearch: setOnSearch,
    deptTreeNode: deptTreeNode,
    setDeptTreeNode: setDeptTreeNode,
    updateSelectDept: updateSelectDept
  })), React.createElement(Right, _extends({}, props, {
    userData: userData,
    onSearch: onSearch,
    setOnSearch: setOnSearch,
    nameKey: nameKey,
    setNameKey: setNameKey,
    selectUser: selectUser,
    handleSearch: handleSearch,
    setSelectUser: setSelectUser
  })), React.createElement(_Col, {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24
  }, React.createElement(_Form, {
    colon: false
  }, React.createElement(_Form.Item, {
    className: styles.label,
    label: React.createElement("div", null, font, " ", React.createElement("span", {
      style: {
        color: numberColor
      }
    }, deptTreeNode.length + selectUser.length), " ", end)
  }, React.createElement("div", {
    className: styles.resultDiv
  }, deptTreeNode && deptTreeNode.map(function (v) {
    return makeDeptTag(v);
  }), selectUser && selectUser.map(function (v) {
    return makeUserTag(v);
  }))))))));
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
    records: []
  },
  loading: false,
  searchResult: {
    records: []
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
//# sourceMappingURL=index.es.js.map
