'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('antd/es/spin/style');
var _Spin = _interopDefault(require('antd/es/spin'));
require('antd/es/row/style');
var _Row = _interopDefault(require('antd/es/row'));
require('antd/es/col/style');
var _Col = _interopDefault(require('antd/es/col'));
require('antd/es/form/style');
var _Form = _interopDefault(require('antd/es/form'));
require('antd/es/pagination/style');
var _Pagination = _interopDefault(require('antd/es/pagination'));
require('antd/es/tag/style');
var _Tag = _interopDefault(require('antd/es/tag'));
require('antd/es/icon/style');
var _Icon = _interopDefault(require('antd/es/icon'));
require('antd/es/message/style');
var _message = _interopDefault(require('antd/es/message'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
require('antd/es/table/style');
var _Table = _interopDefault(require('antd/es/table'));
require('antd/es/input/style');
var _Input = _interopDefault(require('antd/es/input'));
require('antd/es/list/style');
var _List = _interopDefault(require('antd/es/list'));
require('antd/es/checkbox/style');
var _Checkbox = _interopDefault(require('antd/es/checkbox'));
require('antd/es/tree/style');
var _Tree = _interopDefault(require('antd/es/tree'));

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

var css_248z = ".contacts_rightAlign2__1Vi0R {\n  text-align: right;\n}\n.contacts_treeLeft2__10-iA {\n  border-left: 0;\n}\n.contacts_card2__3mLH8 {\n  min-height: 350px;\n  max-height: 350px;\n  overflow-y: hidden;\n  border: 1px solid #CCCCCC;\n  border-bottom-left-radius: 4px;\n}\n::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n  background-color: lightgray;\n  background-clip: padding-box;\n}\n/* 定义滑块 */\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.45);\n  border-radius: 19px;\n}\n/* 定义滚动条轨道 */\n::-webkit-scrollbar-track {\n  background: #fff;\n}\n.contacts_tableDiv2__2tjtF {\n  min-height: 350px;\n  max-height: 350px;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  border-top: 1px solid #CCCCCC;\n  border-bottom: 1px solid #CCCCCC;\n  border-right: 1px solid #CCCCCC;\n  border-bottom-right-radius: 4px;\n}\n.contacts_deptInfo2__1pZoZ {\n  height: 21px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.contacts_itemDiv2__1zZ2m {\n  width: 100%;\n}\n.contacts_itemDiv2__1zZ2m .contacts_checkbox2__qm5UD {\n  float: left;\n}\n.contacts_itemDiv2__1zZ2m .contacts_deptName2__1n2Vb {\n  float: right;\n}\n.contacts_itemDiv2__1zZ2m:hover {\n  background: #E6F7FF;\n}\n.contacts_pagination2__SYInS {\n  width: 100%;\n  margin-top: 8px;\n  height: 24px;\n}\n.contacts_pagination2__SYInS .contacts_checkbox2__qm5UD {\n  padding-left: 10px;\n  float: left;\n}\n.contacts_pagination2__SYInS .contacts_pageNoe2__1v8d2 {\n  float: right;\n}\n.contacts_label2__17Eqn .ant-form-item-label {\n  line-height: 1;\n  height: 24px !important;\n}\n.contacts_resultDiv2__ToBcz {\n  border: 1px solid #d9d9d9;\n  background: white;\n  width: 100%;\n  min-height: 113px;\n  max-height: 113px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.contacts_resultDiv2__ToBcz .contacts_deptTag2__sIxiX {\n  border-radius: 4px;\n  border: 1px solid rgba(230, 86, 83, 0.2);\n  margin-left: 10px;\n  background: rgba(230, 86, 83, 0.2);\n}\n.contacts_resultDiv2__ToBcz .contacts_userTag2__2kmhX {\n  border-radius: 4px;\n  border: 1px solid rgba(230, 86, 83, 0.2);\n  margin-left: 10px;\n  background: rgba(230, 86, 83, 0.2);\n}\n.contacts_resultDiv2__ToBcz .ant-form-item {\n  margin-bottom: 2px;\n}\n.ant-table-thead > tr > th {\n  padding: 6px 6px 5px !important;\n  border-bottom: 0 !important;\n  background: #F5F5F5 !important;\n  font-size: 14px !important;\n  color: #666666 !important;\n  font-weight: normal !important;\n}\n.ant-table-tbody > tr > td {\n  padding: 6px 6px 5px !important;\n  border-bottom: 0 !important;\n}\n.ant-table-small {\n  border: 0 !important;\n}\n.ant-pagination-simple-pager input {\n  width: 24px;\n}\n.ant-select-dropdown-menu-item-selected {\n  color: #E65653;\n}\n.ant-tree-node-selected {\n  width: 83%;\n}\n.ant-tree-node-selected span {\n  color: #fff;\n}\n";
var styles = {"rightAlign2":"contacts_rightAlign2__1Vi0R","treeLeft2":"contacts_treeLeft2__10-iA","card2":"contacts_card2__3mLH8","tableDiv2":"contacts_tableDiv2__2tjtF","deptInfo2":"contacts_deptInfo2__1pZoZ","itemDiv2":"contacts_itemDiv2__1zZ2m","checkbox2":"contacts_checkbox2__qm5UD","deptName2":"contacts_deptName2__1n2Vb","pagination2":"contacts_pagination2__SYInS","pageNoe2":"contacts_pageNoe2__1v8d2","label2":"contacts_label2__17Eqn","resultDiv2":"contacts_resultDiv2__ToBcz","deptTag2":"contacts_deptTag2__sIxiX","userTag2":"contacts_userTag2__2kmhX"};
styleInject(css_248z);

var emptyImg = "data:image/png;base64,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";

var Search = _Input.Search;
var Right = (function (_ref) {
  var searchUserPlaceholder = _ref.searchUserPlaceholder,
      deptSearch = _ref.deptSearch,
      userData = _ref.userData,
      handleSearch = _ref.handleSearch,
      updateSelectUsers = _ref.updateSelectUsers,
      setOnSearch = _ref.setOnSearch,
      setNameKey = _ref.setNameKey,
      selectUser = _ref.selectUser,
      setSelectUser = _ref.setSelectUser,
      nameText = _ref.nameText,
      workNumberNumber = _ref.workNumberNumber,
      tableColumnsKey = _ref.tableColumnsKey,
      tableRowKey = _ref.tableRowKey,
      emptyTip = _ref.emptyTip;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedRowKeys = _useState2[0],
      setSelectedRowKeys = _useState2[1];

  React.useEffect(function () {
    var users = [];
    userData.records.forEach(function (v, index) {
      var tmp = selectUser.find(function (user) {
        return user[tableRowKey] === v[tableRowKey];
      });

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

  var handleSearchChange = function handleSearchChange(e) {
    if (!e.target.value) {
      setOnSearch(false);
      setNameKey(null);
    }
  };

  var onSelectAll = function onSelectAll(selected, selectedRows, changeRows) {
    if (selected) {
      var tmp = [];
      changeRows.forEach(function (record) {
        tmp.push(record);
      });
      var newList = selectUser.concat(tmp);
      setSelectUser(newList);
      updateSelectUsers(newList);
    } else {
      var result = selectUser;
      changeRows.forEach(function (record) {
        result = result.filter(function (value) {
          return value[tableRowKey] !== record[tableRowKey];
        });
      });
      setSelectUser(result);
      updateSelectUsers(result);
    }
  };

  var onSelect = function onSelect(record, selected) {
    if (selected) {
      var tmp = [];
      tmp.push(record);
      var newList = selectUser.concat(tmp);
      setSelectUser(newList);
      updateSelectUsers(newList);
    } else {
      var result = selectUser.filter(function (value) {
        return value[tableRowKey] !== record[tableRowKey];
      });
      setSelectUser(result);
      updateSelectUsers(result);
    }
  };

  var rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onSelect: onSelect,
    onSelectAll: onSelectAll,
    columnWidth: 20
  };
  var columns = [{
    title: nameText,
    dataIndex: tableColumnsKey[0],
    width: 200
  }, {
    title: workNumberNumber,
    dataIndex: tableColumnsKey[1]
  }];
  return /*#__PURE__*/React__default.createElement(_Col, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    className: styles.treeLeft2
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.tableDiv2
  }, deptSearch && /*#__PURE__*/React__default.createElement(Search, {
    style: {
      marginTop: 24,
      marginLeft: 12,
      width: 322
    },
    placeholder: searchUserPlaceholder,
    onSearch: handleSearch,
    onChange: handleSearchChange
  }), /*#__PURE__*/React__default.createElement(_Table, {
    size: 'small',
    rowSelection: rowSelection,
    columns: columns,
    style: {
      marginTop: 2,
      height: 200
    },
    dataSource: userData.records,
    pagination: false,
    rowKey: function rowKey(record) {
      return record[tableRowKey];
    },
    locale: {
      emptyText: /*#__PURE__*/React__default.createElement("div", {
        style: {
          marginTop: 24
        }
      }, /*#__PURE__*/React__default.createElement("img", {
        alt: 'f',
        style: {
          width: 80,
          height: 80
        },
        src: emptyImg
      }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("div", {
        style: {
          height: 10
        }
      }), /*#__PURE__*/React__default.createElement("span", {
        style: {
          marginTop: 10
        }
      }, emptyTip))
    }
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
    return /*#__PURE__*/React__default.createElement(TreeNode, {
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
      returnReducedNode = _ref.returnReducedNode;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      deptSearchResult = _useState2[0],
      setDeptSearchResult = _useState2[1];

  var _useState3 = React.useState(false),
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
    checkedNodes.forEach(function (v) {
      var data = v.props.data;
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

  return /*#__PURE__*/React__default.createElement(_Col, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.card2
  }, deptSearch && /*#__PURE__*/React__default.createElement(Search$1, {
    placeholder: searchDeptPlaceholder,
    onSelect: onSearchDeptChange,
    onSearch: onSearchDept,
    style: {
      marginTop: 24,
      marginLeft: 12,
      width: 322
    }
  }), deptSearch && /*#__PURE__*/React__default.createElement("br", null), !onDeptSearch && /*#__PURE__*/React__default.createElement(_Tree, {
    style: {
      paddingLeft: 5,
      overflow: "auto",
      height: 285
    },
    checkable: deptCheckBox && !radio,
    checkedKeys: makeCheckedKeys(deptTreeNode),
    onSelect: onTreeSelect,
    onCheck: onDeptTreeCheck,
    checkStrictly: checkStrictly
  }, makeTreeNode(deptTree, deptNameKey)), onDeptSearch && /*#__PURE__*/React__default.createElement(_List, {
    size: "small",
    bordered: false,
    dataSource: deptSearchResult,
    split: false,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/React__default.createElement(_List.Item, null, /*#__PURE__*/React__default.createElement("div", {
        className: styles.itemDiv2
      }, deptCheckBox && /*#__PURE__*/React__default.createElement(_Checkbox, {
        className: styles.checkbox2,
        data: item,
        checked: isDeptCheck(item),
        onChange: onDeptCheck
      }), /*#__PURE__*/React__default.createElement("span", {
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

var Contacts = function Contacts(props) {
  var users = props.users,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      searchResult = props.searchResult,
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
      checkStrictly = props.checkStrictly,
      nameText = props.nameText,
      workNumberNumber = props.workNumberNumber,
      tableColumnsKey = props.tableColumnsKey,
      tableRowKey = props.tableRowKey,
      emptyTip = props.emptyTip,
      _props$debug = props.debug,
      debug = _props$debug === void 0 ? false : _props$debug;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      deptTreeNode = _useState2[0],
      setDeptTreeNode = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectUser = _useState4[0],
      setSelectUser = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      onSearch = _useState6[0],
      setOnSearch = _useState6[1];

  var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      deptId = _useState8[0],
      setDeptId = _useState8[1];

  var _useState9 = React.useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      nameKey = _useState10[0],
      setNameKey = _useState10[1];

  React.useEffect(function () {
    updateSelectUsers(defaultUserSelected);
    setSelectUser(defaultUserSelected);
  }, [defaultUserSelected, updateSelectUsers]);
  React.useEffect(function () {
    updateSelectDept(defaultDeptSelected);
    setDeptTreeNode(defaultDeptSelected);
  }, [defaultDeptSelected, updateSelectDept]);
  /**
   *  点击查询回调，会把name key 和 dept id 回传，外部调用查询用
   * @param nameKey 名字搜索关键字
   * @param deptId 部门id
   */

  var handleSearch = function handleSearch() {
    var nameKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (handleSearchUser) {
      handleSearchUser(0, nameKey, null);
      setOnSearch(true);
      setNameKey(nameKey);
    } else {
      _message.error('search function not found.');
    }
  };
  /**
   * 生成显示的用户Tag
   * @param v
   * @return {*}
   */


  var makeUserTag = function makeUserTag(v) {
    return /*#__PURE__*/React__default.createElement(_Tag, {
      key: v[tableRowKey],
      className: styles.userTag2,
      onClick: function onClick(e) {
        e.preventDefault();
        unCheckUser(v);
      }
    }, v[tableColumnsKey[0]], " ", /*#__PURE__*/React__default.createElement(_Icon, {
      type: "close-circle",
      theme: "filled",
      style: {
        width: 14,
        height: 14,
        color: '#E65653'
      }
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

  var makeShowMsg = function makeShowMsg() {
    var tmp = totalShowText.split('$');
    var font = '';
    var end = '';

    if (tmp.length === 2) {
      font = tmp[0];
      end = tmp[1];
    } else {
      font = totalShowText;
    }

    return /*#__PURE__*/React__default.createElement("div", null, font, " ", /*#__PURE__*/React__default.createElement("span", {
      style: {
        color: numberColor
      }
    }, selectUser.length), " ", end);
  };

  var userData;

  if (onSearch) {
    userData = searchResult;
  } else {
    userData = users;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      height: '',
      width: 690
    }
  }, /*#__PURE__*/React__default.createElement(_Spin, {
    spinning: loading
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      height: 350
    }
  }, /*#__PURE__*/React__default.createElement(Left, _extends({}, props, {
    setDeptId: setDeptId,
    setOnSearch: setOnSearch,
    deptTreeNode: deptTreeNode,
    setDeptTreeNode: setDeptTreeNode,
    handleSearchUser: handleSearchUser,
    checkStrictly: checkStrictly,
    updateSelectDept: updateSelectDept,
    deptNameKey: deptNameKey,
    radio: radio
  })), /*#__PURE__*/React__default.createElement(Right, _extends({}, props, {
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
    radio: radio,
    nameText: nameText,
    workNumberNumber: workNumberNumber,
    tableColumnsKey: tableColumnsKey,
    tableRowKey: tableRowKey,
    emptyTip: emptyTip
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: styles.pagination2
  }, /*#__PURE__*/React__default.createElement(_Pagination, {
    className: styles.pageNoe2,
    simple: true,
    current: userData.current || 1,
    pageSize: userData.size,
    total: userData.total,
    onChange: onPageChange
  })), /*#__PURE__*/React__default.createElement(_Row, {
    style: {
      height: 150
    }
  }, /*#__PURE__*/React__default.createElement(_Col, {
    span: 24,
    style: {
      paddingTop: 8,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React__default.createElement(_Form, {
    colon: false
  }, /*#__PURE__*/React__default.createElement(_Form.Item, {
    className: styles.label2,
    label: makeShowMsg()
  }, !radio && /*#__PURE__*/React__default.createElement("div", {
    className: styles.resultDiv2
  }, selectUser && selectUser.map(function (v) {
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
  numberColor: '#E65653',
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
  nameText: '姓名',
  workNumberNumber: '工号',
  tableColumnsKey: ['chsName', 'accountName'],
  tableRowKey: 'accountName',
  emptyTip: '什么都没有哦~'
};

module.exports = Contacts;
//# sourceMappingURL=index.js.map
