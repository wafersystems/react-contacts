'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('antd/es/spin/style');
var _Spin = _interopDefault(require('antd/es/spin'));
require('antd/es/form/style');
var _Form = _interopDefault(require('antd/es/form'));
require('antd/es/pagination/style');
var _Pagination = _interopDefault(require('antd/es/pagination'));
require('antd/es/col/style');
var _Col = _interopDefault(require('antd/es/col'));
require('antd/es/card/style');
var _Card = _interopDefault(require('antd/es/card'));
require('antd/es/list/style');
var _List = _interopDefault(require('antd/es/list'));
require('antd/es/checkbox/style');
var _Checkbox = _interopDefault(require('antd/es/checkbox'));
require('antd/es/tree/style');
var _Tree = _interopDefault(require('antd/es/tree'));
require('antd/es/row/style');
var _Row = _interopDefault(require('antd/es/row'));
require('antd/es/tag/style');
var _Tag = _interopDefault(require('antd/es/tag'));
require('antd/es/icon/style');
var _Icon = _interopDefault(require('antd/es/icon'));
require('antd/es/message/style');
var _message = _interopDefault(require('antd/es/message'));
require('antd/es/input/style');
var _Input = _interopDefault(require('antd/es/input'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
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

var TreeNode = _Tree.TreeNode;
/**
 *
 * @param nodes
 * @returns {*} tree nodes.
 */

function makeTreeNode(nodes) {
  return nodes.map(function (v) {
    var nodeKey = v.id;
    return React__default.createElement(TreeNode, {
      data: v,
      title: v.name,
      key: nodeKey
    }, v.children.length > 0 && makeTreeNode(v.children));
  });
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

var css = ".contacts_rightAlign__1mttw {\n  text-align: right;\n}\n.contacts_treeLeft__9KVxi {\n  padding-left: 10px;\n}\n.contacts_card__Ep1tT {\n  min-height: 452px;\n  max-height: 452px;\n  overflow-y: auto;\n}\n.contacts_deptInfo__2Cm6N {\n  height: 21px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.contacts_itemDiv__3duTh {\n  width: 100%;\n}\n.contacts_itemDiv__3duTh .contacts_checkbox__1wE1n {\n  float: left;\n}\n.contacts_itemDiv__3duTh .contacts_deptName__1OpqT {\n  float: right;\n}\n.contacts_itemDiv__3duTh:hover {\n  background: #E6F7FF;\n}\n.contacts_pagination__YKURI {\n  width: 100%;\n  margin-top: 9px;\n}\n.contacts_pagination__YKURI .contacts_checkbox__1wE1n {\n  padding-left: 24px;\n  float: left;\n}\n.contacts_pagination__YKURI .contacts_pageNoe__2lx4q {\n  float: right;\n}\n.contacts_resultDiv__lIHQW {\n  border: 1px solid #d9d9d9;\n  background: white;\n  width: 100%;\n  min-height: 100px;\n  max-height: 123px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.contacts_resultDiv__lIHQW .contacts_deptTag__3X662 {\n  color: #1890FF;\n  background-color: #E6F7FF;\n  border: 1px solid #91D5FF;\n  margin-left: 10px;\n}\n.contacts_resultDiv__lIHQW .contacts_userTag__1nUBr {\n  color: #375EEE;\n  background-color: rgba(55, 94, 238, 0.09);\n  border-radius: 4px;\n  border: 1px solid #375EEE;\n  margin-left: 10px;\n}\n";
var styles = {"rightAlign":"contacts_rightAlign__1mttw","treeLeft":"contacts_treeLeft__9KVxi","card":"contacts_card__Ep1tT","deptInfo":"contacts_deptInfo__2Cm6N","itemDiv":"contacts_itemDiv__3duTh","checkbox":"contacts_checkbox__1wE1n","deptName":"contacts_deptName__1OpqT","pagination":"contacts_pagination__YKURI","pageNoe":"contacts_pageNoe__2lx4q","resultDiv":"contacts_resultDiv__lIHQW","deptTag":"contacts_deptTag__3X662","userTag":"contacts_userTag__1nUBr"};
styleInject(css);

var Search = _Input.Search;
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

var Contacts =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Contacts, _PureComponent);

  function Contacts() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Contacts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Contacts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      deptId: null,
      nameKey: null,
      onSearch: false,
      deptTreeNode: [],
      selectUser: [],
      deptSearchResult: [],
      onDeptSearch: false
    });

    _defineProperty(_assertThisInitialized(_this), "onPageChange", function (page) {
      var _this$props = _this.props,
          handleSearchUser = _this$props.handleSearchUser,
          debug = _this$props.debug;

      if (debug) {
        window.console.log(page);
      }

      var _this$state = _this.state,
          deptId = _this$state.deptId,
          nameKey = _this$state.nameKey;

      if (handleSearchUser) {
        handleSearchUser(page - 1, nameKey, deptId);

        _this.setState({
          onSearch: true
        });
      } else {
        _message.error('搜索function not found.');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (e) {
      if (!e.target.value) {
        var handleSearchUser = _this.props.handleSearchUser;
        var deptId = _this.state.deptId;

        if (handleSearchUser) {
          handleSearchUser(0, null, deptId);

          _this.setState({
            onSearch: true,
            nameKey: null
          });
        } else {
          _message.error('搜索function not found.');
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      var nameKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var handleSearchUser = _this.props.handleSearchUser;
      var deptId = _this.state.deptId;

      if (handleSearchUser) {
        handleSearchUser(0, nameKey, deptId);

        _this.setState({
          onSearch: true,
          nameKey: nameKey
        });
      } else {
        _message.error('搜索function not found.');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTreeSelect", function (selectedKeys) {
      var handleSearchUser = _this.props.handleSearchUser;

      if (handleSearchUser) {
        var _selectedKeys = _slicedToArray(selectedKeys, 1),
            deptId = _selectedKeys[0];

        handleSearchUser(0, null, deptId);

        _this.setState({
          onSearch: true,
          deptId: deptId
        });
      } else {
        _message.error('搜索function not found.');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDeptTreeCheck", function (checkedKeys, _ref) {
      var checked = _ref.checked,
          checkedNodes = _ref.checkedNodes,
          node = _ref.node;
      var tmp = [];
      var deptTreeNode = _this.state.deptTreeNode;

      if (checked) {
        var _checkedNodes = _slicedToArray(checkedNodes, 1),
            one = _checkedNodes[0];

        var data = one.props.data;
        tmp.push(data);

        _this.setState({
          deptTreeNode: deptTreeNode.concat(tmp)
        });
      } else {
        var _data = node.props.data;
        var result = deptTreeNode.filter(function (value) {
          return value.id !== _data.id;
        });

        _this.setState({
          deptTreeNode: result.concat(tmp)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onUserCheck", function (e) {
      var updateSelectUsers = _this.props.updateSelectUsers;
      var _e$target = e.target,
          checked = _e$target.checked,
          data = _e$target.data;
      var selectUser = _this.state.selectUser;
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

      _this.setState({
        selectUser: newSelectUser
      });

      updateSelectUsers(newSelectUser);
    });

    _defineProperty(_assertThisInitialized(_this), "onCheckAll", function (e) {
      var checked = e.target.checked;
      var tmp = [];

      if (checked) {
        var onSearch = _this.state.onSearch;
        var _this$props2 = _this.props,
            users = _this$props2.users,
            searchResult = _this$props2.searchResult;
        var userData;

        if (onSearch) {
          userData = searchResult;
        } else {
          userData = users;
        }

        userData.records.forEach(function (value) {
          tmp.push(value);
        });
      }

      _this.setState({
        selectUser: tmp
      });
    });

    _defineProperty(_assertThisInitialized(_this), "makeDeptTag", function (v) {
      return React__default.createElement(_Tag, {
        key: v.id,
        className: styles.deptTag,
        onClick: function onClick(e) {
          e.preventDefault();

          _this.unCheckDept(v);
        }
      }, v.name, " ", React__default.createElement(_Icon, {
        type: "close-circle",
        theme: "filled"
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "unCheckDept", function (data) {
      var tmp = [];
      var deptTreeNode = _this.state.deptTreeNode;
      var result = deptTreeNode.filter(function (value) {
        return value.id !== data.id;
      });

      _this.setState({
        deptTreeNode: result.concat(tmp)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "makeUserTag", function (v) {
      return React__default.createElement(_Tag, {
        key: v.userId,
        className: styles.userTag,
        onClick: function onClick(e) {
          e.preventDefault();

          _this.unCHeckUser(v);
        }
      }, v.username, " ", React__default.createElement(_Icon, {
        type: "close-circle",
        theme: "filled"
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "unCHeckUser", function (data) {
      var tmp = [];
      var selectUser = _this.state.selectUser;
      var result = selectUser.filter(function (value) {
        return value.userId !== data.userId;
      });

      _this.setState({
        selectUser: result.concat(tmp)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isUserCheck", function (data) {
      var selectUser = _this.state.selectUser;
      var result = selectUser.find(function (value) {
        return value.userId === data.userId;
      });
      return !!result;
    });

    _defineProperty(_assertThisInitialized(_this), "isDeptCheck", function (data) {
      var deptTreeNode = _this.state.deptTreeNode;
      var result = deptTreeNode.find(function (value) {
        return value.id === data.id;
      });
      return !!result;
    });

    _defineProperty(_assertThisInitialized(_this), "makeCheckedKeys", function (data) {
      return data.map(function (v) {
        return v.id;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchDept", function (value) {
      if (!value) {
        _this.setState({
          deptSearchResult: [],
          onDeptSearch: !!value
        });
      } else {
        var _this$props$deptTree = _this.props.deptTree,
            deptTree = _this$props$deptTree === void 0 ? [] : _this$props$deptTree;
        var dataList = [];
        searchByKey(value.trim(), deptTree, dataList);

        _this.setState({
          deptSearchResult: dataList,
          onDeptSearch: !!value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchDeptChange", function (e) {
      if (!e.target.value) {
        _this.setState({
          deptSearchResult: [],
          onDeptSearch: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDeptSelect", function (item) {
      _this.handleSearch(null, item.id);

      _this.setState({
        onSearch: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDeptCheck", function (e) {
      var _e$target2 = e.target,
          checked = _e$target2.checked,
          data = _e$target2.data;
      var deptTreeNode = _this.state.deptTreeNode;
      var tmp = [];

      if (checked) {
        tmp.push(data);

        _this.setState({
          deptTreeNode: deptTreeNode.concat(tmp)
        });
      } else {
        var result = deptTreeNode.filter(function (value) {
          return value.id !== data.id;
        });

        _this.setState({
          deptTreeNode: result.concat(tmp)
        });
      }
    });

    return _this;
  }

  _createClass(Contacts, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var userInfRole = nextProps.userInfRole;
      var selectUser = this.state.selectUser;

      if (selectUser.length === 0 && userInfRole.length > 0) {
        this.setState({
          selectUser: userInfRole
        });
      }
    }
    /**
     * 翻页查询处理
     * @param page
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          _this$props3$deptTree = _this$props3.deptTree,
          deptTree = _this$props3$deptTree === void 0 ? [] : _this$props3$deptTree,
          users = _this$props3.users,
          _this$props3$loading = _this$props3.loading,
          loading = _this$props3$loading === void 0 ? false : _this$props3$loading,
          searchResult = _this$props3.searchResult,
          _this$props3$deptSear = _this$props3.deptSearch,
          deptSearch = _this$props3$deptSear === void 0 ? false : _this$props3$deptSear,
          _this$props3$userSear = _this$props3.userSearch,
          userSearch = _this$props3$userSear === void 0 ? false : _this$props3$userSear,
          _this$props3$deptChec = _this$props3.deptCheckBox,
          deptCheckBox = _this$props3$deptChec === void 0 ? false : _this$props3$deptChec,
          searchDeptPlaceholder = _this$props3.searchDeptPlaceholder,
          searchUserPlaceholder = _this$props3.searchUserPlaceholder;
      var _this$state2 = this.state,
          deptTreeNode = _this$state2.deptTreeNode,
          selectUser = _this$state2.selectUser,
          onSearch = _this$state2.onSearch,
          onDeptSearch = _this$state2.onDeptSearch,
          deptSearchResult = _this$state2.deptSearchResult,
          debug = _this$state2.debug;
      var userData;

      if (onSearch) {
        userData = searchResult;
      } else {
        userData = users;
      }

      if (debug) {
        window.console.log(userData);
      }

      return React__default.createElement("div", {
        style: {
          height: '100%'
        }
      }, React__default.createElement(_Spin, {
        spinning: loading
      }, userSearch && React__default.createElement(_Row, null, React__default.createElement(Search, {
        placeholder: searchUserPlaceholder,
        onSearch: this.handleSearch
      })), userSearch && React__default.createElement("br", null), React__default.createElement(_Row, null, React__default.createElement(_Col, {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
      }, React__default.createElement(_Card, {
        className: styles.card
      }, deptSearch && React__default.createElement(Search, {
        placeholder: searchDeptPlaceholder,
        onSelect: this.onSearchDeptChange,
        onSearch: this.onSearchDept
      }), deptSearch && React__default.createElement("br", null), !onDeptSearch && React__default.createElement(_Tree, {
        checkable: deptCheckBox,
        checkedKeys: this.makeCheckedKeys(deptTreeNode),
        onSelect: this.onTreeSelect,
        onCheck: this.onDeptTreeCheck
      }, makeTreeNode(deptTree)), onDeptSearch && React__default.createElement(_List, {
        size: "small",
        bordered: false,
        dataSource: deptSearchResult,
        split: false,
        renderItem: function renderItem(item) {
          return React__default.createElement(_List.Item, null, React__default.createElement("div", {
            className: styles.itemDiv
          }, React__default.createElement(_Checkbox, {
            className: styles.checkbox,
            data: item,
            checked: _this2.isDeptCheck(item),
            onChange: _this2.onDeptCheck
          }), React__default.createElement("span", {
            onClick: function onClick() {
              return _this2.onDeptSelect(item);
            }
          }, item.name)));
        }
      }))), React__default.createElement(_Col, {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        className: styles.treeLeft
      }, React__default.createElement(_Card, {
        className: styles.card
      }, deptSearch && React__default.createElement(Search, {
        placeholder: searchUserPlaceholder,
        onSearch: this.handleSearch,
        onChange: this.handleSearchChange
      }), deptSearch && React__default.createElement("br", null), React__default.createElement(_List, {
        size: "small",
        bordered: false,
        dataSource: userData.records,
        split: false,
        renderItem: function renderItem(item) {
          return React__default.createElement(_List.Item, null, React__default.createElement("div", {
            className: styles.itemDiv
          }, React__default.createElement(_Checkbox, {
            className: styles.checkbox,
            data: item,
            checked: _this2.isUserCheck(item),
            onChange: _this2.onUserCheck
          }, item.username), React__default.createElement("div", {
            className: styles.deptName
          }, item.deptName)));
        }
      })), React__default.createElement("div", {
        className: styles.pagination
      }, React__default.createElement(_Checkbox, {
        onChange: this.onCheckAll,
        className: styles.checkbox
      }, "\u5168\u9009"), React__default.createElement(_Pagination, {
        className: styles.pageNoe,
        simple: true,
        current: userData.current || userData.current === 0 ? userData.current + 1 : 0,
        pageSize: userData.size,
        total: userData.total,
        onChange: this.onPageChange
      }))), React__default.createElement(_Col, {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24
      }, React__default.createElement(_Form, {
        colon: false
      }, React__default.createElement(_Form.Item, {
        label: "\u5171\u9009\u62E9\u4E86".concat(deptTreeNode.length + selectUser.length, "\u4E2A")
      }, React__default.createElement("div", {
        className: styles.resultDiv
      }, deptTreeNode && deptTreeNode.map(function (v) {
        return _this2.makeDeptTag(v);
      }), selectUser && selectUser.map(function (v) {
        return _this2.makeUserTag(v);
      }))))))));
    }
  }]);

  return Contacts;
}(React.PureComponent);

Contacts.propTypes = {
  deptTree: PropTypes.array.isRequired,
  users: PropTypes.object,
  loading: PropTypes.bool,
  searchResult: PropTypes.object,
  handleSearchUser: PropTypes.func.isRequired,
  deptSearch: PropTypes.bool,
  updateSelectUsers: PropTypes.func.isRequired,
  deptCheckBox: PropTypes.bool,
  searchDeptPlaceholder: PropTypes.string,
  searchUserPlaceholder: PropTypes.string,
  debug: PropTypes.bool
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
  debug: false
};

module.exports = Contacts;
//# sourceMappingURL=index.js.map
