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
import 'antd/es/radio/style';
import _Radio from 'antd/es/radio';
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

var css_248z = ".contacts_rightAlign__2DAXJ {\n  text-align: right;\n}\n.contacts_treeLeft__zvPEq {\n  padding-left: 10px;\n}\n.contacts_card__9kiRW {\n  min-height: 347px;\n  max-height: 347px;\n  overflow-y: auto;\n}\n.contacts_card__9kiRW .ant-card-body {\n  padding: 16px 7px 7px 8px;\n}\n.contacts_card__9kiRW .ant-list-sm .ant-list-item {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.contacts_list__2oGRy {\n  width: max-content;\n  padding-right: 5px;\n}\n.contacts_deptInfo__3e5E7 {\n  height: 21px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.contacts_itemDiv__3FGhc {\n  width: 100%;\n}\n.contacts_itemDiv__3FGhc .contacts_checkbox__tJaOX {\n  float: left;\n}\n.contacts_itemDiv__3FGhc .contacts_deptName__29k1a {\n  float: right;\n}\n.contacts_itemDiv__3FGhc:hover {\n  background: #E6F7FF;\n}\n.contacts_pagination__XYaLU {\n  width: 100%;\n  margin-top: 9px;\n}\n.contacts_pagination__XYaLU .contacts_checkbox__tJaOX {\n  padding-left: 10px;\n  float: left;\n}\n.contacts_pagination__XYaLU .contacts_pageNoe__1EStH {\n  float: right;\n}\n.contacts_label__VCr20 .ant-form-item-label {\n  line-height: 1;\n}\n.contacts_resultDiv__2wcEb {\n  border: 1px solid var(--border-color);\n  background: var(--bg-color);\n  width: 100%;\n  min-height: 100px;\n  max-height: 123px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-top: 8px;\n}\n.contacts_resultDiv__2wcEb .contacts_deptTag__3mANU {\n  color: #1890FF;\n  background-color: #E6F7FF;\n  border: 1px solid #91D5FF;\n  margin-left: 10px;\n}\n.contacts_resultDiv__2wcEb .contacts_userTag__20MmI {\n  color: #375EEE;\n  background-color: rgba(55, 94, 238, 0.09);\n  border-radius: 4px;\n  border: 1px solid #375EEE;\n  margin-left: 10px;\n}\n.contacts_resultDiv__2wcEb .ant-form-item {\n  margin-bottom: 2px;\n}\n";
var styles = {"rightAlign":"contacts_rightAlign__2DAXJ","treeLeft":"contacts_treeLeft__zvPEq","card":"contacts_card__9kiRW","list":"contacts_list__2oGRy","deptInfo":"contacts_deptInfo__3e5E7","itemDiv":"contacts_itemDiv__3FGhc","checkbox":"contacts_checkbox__tJaOX","deptName":"contacts_deptName__29k1a","pagination":"contacts_pagination__XYaLU","pageNoe":"contacts_pageNoe__1EStH","label":"contacts_label__VCr20","resultDiv":"contacts_resultDiv__2wcEb","deptTag":"contacts_deptTag__3mANU","userTag":"contacts_userTag__20MmI"};
styleInject(css_248z);

var Search = _Input.Search;
var Right = (function (_ref) {
  var selectAllText = _ref.selectAllText,
      searchUserPlaceholder = _ref.searchUserPlaceholder,
      deptSearch = _ref.deptSearch,
      userData = _ref.userData,
      handleSearch = _ref.handleSearch,
      handleSearchUser = _ref.handleSearchUser,
      deptId = _ref.deptId,
      updateSelectUsers = _ref.updateSelectUsers,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug,
      setOnSearch = _ref.setOnSearch,
      nameKey = _ref.nameKey,
      setNameKey = _ref.setNameKey,
      selectUser = _ref.selectUser,
      setSelectUser = _ref.setSelectUser,
      userNameKey = _ref.userNameKey,
      radio = _ref.radio;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      selectAll = _useState2[0],
      setSelectAll = _useState2[1]; // 当列表数据发生变化时，重新计算全选


  useEffect(function () {
    calculateSelectAll(selectUser);
  }, [userData]); // 当选中人数据发生变化，重新计算全选

  useEffect(function () {
    calculateSelectAll(selectUser);
  }, [selectUser]);
  /**
   * 姓名搜索为空时处理
   * @param e
   */

  var handleSearchChange = function handleSearchChange(e) {
    if (!e.target.value) {
      setOnSearch(false);
      setNameKey(null);
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
    var newSelectUser;

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

    if (checked) {
      calculateSelectAll(newSelectUser);
    } else {
      setSelectAll(false);
    }
  };
  /**
   * Radio时点击用户列表的回调
   * @param e
   */


  var onUserRadioCheck = function onUserRadioCheck(e) {
    var _e$target2 = e.target,
        checked = _e$target2.checked,
        data = _e$target2.data;
    var newSelectUser = [];

    if (checked) {
      newSelectUser.push(data);
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
      handleSearchUser(page, nameKey, deptId);
      setOnSearch(true);
    } else {
      _message.error('search function not found.');
    }
  };
  /**
   * 计算是否全部选中
   * @param newSelectUser
   */


  var calculateSelectAll = function calculateSelectAll(newSelectUser) {
    var tmp = [];
    userData.records.forEach(function (value) {
      tmp.push(value);
    });

    if (tmp.length === 0) {
      setSelectAll(false);
      return;
    }

    var count = 0;
    tmp.forEach(function (val) {
      var result = newSelectUser.find(function (valUser) {
        return val.userId === valUser.userId;
      });

      if (result) {
        count += 1;
      }
    });
    setSelectAll(count === tmp.length);
  };
  /**
   * 点击用户全选的回调
   * @param e
   */


  var onCheckAll = function onCheckAll(e) {
    var checked = e.target.checked;
    setSelectAll(checked);
    var tmp = [];
    userData.records.forEach(function (value) {
      tmp.push(value);
    });
    var newSelectUser = [];

    if (checked) {
      // 如果是选中，遍历添加，重复的不添加
      tmp.forEach(function (val) {
        var result = selectUser.find(function (valUser) {
          return val.userId === valUser.userId;
        });

        if (!result) {
          newSelectUser.push(val);
        }
      });
      newSelectUser = selectUser.concat(newSelectUser);
    } else {
      // 不选中的遍历删除
      selectUser.forEach(function (val) {
        var result = tmp.find(function (valUser) {
          return val.userId === valUser.userId;
        });

        if (!result) {
          newSelectUser.push(val);
        }
      });
    }

    updateSelectUsers(newSelectUser);
    setSelectUser(newSelectUser);
  };

  return /*#__PURE__*/React.createElement(_Col, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    className: styles.treeLeft
  }, /*#__PURE__*/React.createElement(_Card, {
    className: styles.card
  }, deptSearch && /*#__PURE__*/React.createElement(Search, {
    placeholder: searchUserPlaceholder,
    onSearch: handleSearch,
    onChange: handleSearchChange
  }), deptSearch && /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_List, {
    className: styles.list,
    size: "small",
    bordered: false,
    dataSource: userData.records,
    split: false,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/React.createElement(_List.Item, null, /*#__PURE__*/React.createElement("div", {
        className: styles.itemDiv
      }, radio && /*#__PURE__*/React.createElement(_Radio, {
        className: styles.checkbox,
        checked: isUserCheck(item),
        data: item,
        onChange: onUserRadioCheck
      }, item[userNameKey]), !radio && /*#__PURE__*/React.createElement(_Checkbox, {
        className: styles.checkbox,
        data: item,
        checked: isUserCheck(item),
        onChange: onUserCheck
      }, item[userNameKey]), /*#__PURE__*/React.createElement("div", {
        className: styles.deptName
      }, item.deptName)));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.pagination
  }, !radio && /*#__PURE__*/React.createElement(_Checkbox, {
    onChange: onCheckAll,
    className: styles.checkbox,
    checked: selectAll
  }, selectAllText), /*#__PURE__*/React.createElement(_Pagination, {
    className: styles.pageNoe,
    simple: true,
    current: userData.current || 1,
    pageSize: userData.size,
    total: userData.total,
    onChange: onPageChange
  })));
});

var TreeNode = _Tree.TreeNode;
/**
 *
 * @param nodes
 * @param deptNameKey
 * @returns {*} tree nodes.
 */

function makeTreeNode(nodes, deptNameKey) {
  return nodes.map(function (v) {
    var nodeKey = v.id;
    return /*#__PURE__*/React.createElement(TreeNode, {
      data: v,
      title: v[deptNameKey],
      key: nodeKey
    }, v.children.length > 0 && makeTreeNode(v.children, deptNameKey));
  });
}
/**
 * 过滤dept节点,如果父节点选中不显示子节点
 * @param list
 * @returns {[]}
 */

var filterDeptTagShow = function filterDeptTagShow(list) {
  /**
   *
   * @param object
   * @param node
   */
  var removeDescendants = function removeDescendants(object, node) {
    if (node.children && node.children.length > 0) {
      node.children.forEach(function (v) {
        removeDescendants(object, v);
        delete object[v.id];
      });
    }
  };

  var obj = {};
  list.forEach(function (value) {
    obj[value.id] = value;
  });
  list.forEach(function (value) {
    removeDescendants(obj, value);
  });
  var dept = [];
  Object.keys(obj).forEach(function (key) {
    dept.push(obj[key]);
  });
  return dept;
};

var Search$1 = _Input.Search;
var Left = (function (_ref) {
  var searchDeptPlaceholder = _ref.searchDeptPlaceholder,
      deptSearch = _ref.deptSearch,
      deptCheckBox = _ref.deptCheckBox,
      _ref$deptTree = _ref.deptTree,
      deptTree = _ref$deptTree === void 0 ? [] : _ref$deptTree,
      handleSearchUser = _ref.handleSearchUser,
      setDeptId = _ref.setDeptId,
      setOnSearch = _ref.setOnSearch,
      deptTreeNode = _ref.deptTreeNode,
      setDeptTreeNode = _ref.setDeptTreeNode,
      updateSelectDept = _ref.updateSelectDept,
      deptNameKey = _ref.deptNameKey,
      radio = _ref.radio,
      checkStrictly = _ref.checkStrictly,
      returnReducedNode = _ref.returnReducedNode,
      nameKey = _ref.nameKey;

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
      return v.id.toString();
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

      handleSearchUser(0, nameKey, deptId);
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
    checkedNodes.forEach(function (v) {
      var data = v.data;
      tmp.push(data);
    });

    if (returnReducedNode) {
      updateSelectDept(filterDeptTagShow(tmp));
    } else {
      updateSelectDept(tmp);
    }

    setDeptTreeNode(tmp);
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

      if (returnReducedNode) {
        updateSelectDept(filterDeptTagShow(deptTreeNode.concat(tmp)));
      } else {
        updateSelectDept(deptTreeNode.concat(tmp));
      }

      setDeptTreeNode(deptTreeNode.concat(tmp));
    } else {
      var result = deptTreeNode.filter(function (value) {
        return value.id !== data.id;
      });

      if (returnReducedNode) {
        updateSelectDept(filterDeptTagShow(result.concat(tmp)));
      } else {
        updateSelectDept(result.concat(tmp));
      }

      setDeptTreeNode(result.concat(tmp));
    }
  };
  /**
   * 点击部门查询结果后，传递部门ID给外部查询
   * @param item
   */


  var onDeptSelect = function onDeptSelect(item) {
    if (handleSearchUser) {
      handleSearchUser(0, null, item.id);
      setOnSearch(true);
      setDeptId(item.id);
    } else {
      _message.error('search function not found.');
    }
  };

  console.log(deptTreeNode);
  return /*#__PURE__*/React.createElement(_Col, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12
  }, /*#__PURE__*/React.createElement(_Card, {
    className: styles.card
  }, deptSearch && /*#__PURE__*/React.createElement(Search$1, {
    placeholder: searchDeptPlaceholder,
    onSelect: onSearchDeptChange,
    onSearch: onSearchDept
  }), deptSearch && /*#__PURE__*/React.createElement("br", null), !onDeptSearch && /*#__PURE__*/React.createElement(_Tree, {
    checkable: deptCheckBox && !radio,
    checkedKeys: makeCheckedKeys(deptTreeNode),
    onSelect: onTreeSelect,
    onCheck: onDeptTreeCheck,
    checkStrictly: checkStrictly
  }, makeTreeNode(deptTree, deptNameKey)), onDeptSearch && /*#__PURE__*/React.createElement(_List, {
    size: "small",
    bordered: false,
    dataSource: deptSearchResult,
    split: false,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/React.createElement(_List.Item, null, /*#__PURE__*/React.createElement("div", {
        className: styles.itemDiv
      }, deptCheckBox && /*#__PURE__*/React.createElement(_Checkbox, {
        className: styles.checkbox,
        data: item,
        checked: isDeptCheck(item),
        onChange: onDeptCheck
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: '10px'
        },
        onClick: function onClick() {
          return onDeptSelect(item);
        }
      }, item[deptNameKey])));
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
      defaultDeptSelected = props.defaultDeptSelected,
      updateSelectDept = props.updateSelectDept,
      userNameKey = props.userNameKey,
      deptNameKey = props.deptNameKey,
      radio = props.radio,
      radioShowText = props.radioShowText,
      checkStrictly = props.checkStrictly,
      showAllDeptTags = props.showAllDeptTags;

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
    updateSelectUsers(defaultUserSelected);
    setSelectUser(defaultUserSelected);
  }, [defaultUserSelected]);
  useEffect(function () {
    updateSelectDept(defaultDeptSelected);
    setDeptTreeNode(defaultDeptSelected);
  }, [defaultDeptSelected]);
  /**
   *  点击查询回调，会把name key 和 dept id 回传，外部调用查询用
   * @param nameKey 名字搜索关键字
   * @param deptId 部门id
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
    return /*#__PURE__*/React.createElement(_Tag, {
      key: v.id,
      className: styles.deptTag,
      onClick: function onClick(e) {
        e.preventDefault();
        unCheckDept(v);
      }
    }, v[deptNameKey], " ", /*#__PURE__*/React.createElement(_Icon, {
      type: "close-circle",
      theme: "filled"
    }));
  };
  /**
   *
   * @param object
   * @param key
   */


  var delObjProperty = function delObjProperty(object, key) {
    var t = object[key];

    if (t) {
      delete object[key];
      delObjProperty(object, t.parentId);
    }
  };
  /**
   *
   * @param data
   */


  var unCheckDept = function unCheckDept(data) {
    var dept = [];
    var obj = {};
    deptTreeNode.forEach(function (value) {
      obj[value.id] = value;
    });
    delObjProperty(obj, data.id);
    Object.keys(obj).forEach(function (key) {
      dept.push(obj[key]);
    });
    updateSelectDept(dept);
    setDeptTreeNode(dept);
  };
  /**
   * 生成显示的用户Tag
   * @param v
   * @return {*}
   */


  var makeUserTag = function makeUserTag(v) {
    return /*#__PURE__*/React.createElement(_Tag, {
      key: v.userId,
      className: styles.userTag,
      onClick: function onClick(e) {
        e.preventDefault();
        unCheckUser(v);
      }
    }, v[userNameKey], " ", /*#__PURE__*/React.createElement(_Icon, {
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

  var makeShowMsg = function makeShowMsg() {
    if (!radio) {
      var tmp = totalShowText.split('$');
      var font = '';
      var end = '';

      if (tmp.length === 2) {
        font = tmp[0];
        end = tmp[1];
      } else {
        font = totalShowText;
      }

      var length = 0;

      if (!showAllDeptTags) {
        length = filterDeptTagShow(deptTreeNode).length + selectUser.length;
      } else {
        length = deptTreeNode.length + selectUser.length;
      }

      return /*#__PURE__*/React.createElement("div", null, font, " ", /*#__PURE__*/React.createElement("span", {
        style: {
          color: numberColor
        }
      }, length), " ", end);
    } else {
      var name = '';

      if (selectUser.length > 0) {
        var _selectUser = _slicedToArray(selectUser, 1),
            use = _selectUser[0];

        name = use[userNameKey];
      }

      return /*#__PURE__*/React.createElement("div", null, radioShowText, " ", /*#__PURE__*/React.createElement("span", {
        style: {
          color: numberColor
        }
      }, name));
    }
  };

  var userData;

  if (onSearch) {
    userData = searchResult;
  } else {
    userData = users;
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(_Spin, {
    spinning: loading
  }, userSearch && /*#__PURE__*/React.createElement(_Row, null, /*#__PURE__*/React.createElement(Search$2, {
    placeholder: searchUserPlaceholder,
    onSearch: handleSearch
  })), userSearch && /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Row, null, /*#__PURE__*/React.createElement(Left, _extends({}, props, {
    setDeptId: setDeptId,
    setOnSearch: setOnSearch,
    deptTreeNode: deptTreeNode,
    setDeptTreeNode: setDeptTreeNode,
    handleSearchUser: handleSearchUser,
    checkStrictly: checkStrictly,
    updateSelectDept: updateSelectDept,
    deptNameKey: deptNameKey,
    radio: radio,
    nameKey: nameKey
  })), /*#__PURE__*/React.createElement(Right, _extends({}, props, {
    userData: userData,
    onSearch: onSearch,
    setOnSearch: setOnSearch,
    nameKey: nameKey,
    setNameKey: setNameKey,
    selectUser: selectUser,
    handleSearch: handleSearch,
    userNameKey: userNameKey,
    deptId: deptId,
    setSelectUser: setSelectUser,
    radio: radio
  })), /*#__PURE__*/React.createElement(_Col, {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24
  }, /*#__PURE__*/React.createElement(_Form, {
    colon: false,
    layout: "vertical"
  }, /*#__PURE__*/React.createElement(_Form.Item, {
    className: styles.label,
    label: makeShowMsg()
  }, !radio && /*#__PURE__*/React.createElement("div", {
    className: styles.resultDiv
  }, !showAllDeptTags && deptTreeNode && filterDeptTagShow(deptTreeNode).map(function (v) {
    return makeDeptTag(v);
  }), showAllDeptTags && deptTreeNode && deptTreeNode.map(function (v) {
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
  returnReducedNode: PropTypes.bool
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
  returnReducedNode: false
};

export default Contacts;
//# sourceMappingURL=index.es.js.map
