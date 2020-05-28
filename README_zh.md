# react-contacts
contacts  &amp; department select

威发微服务选人组件/Wafer microservice selection component

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wafersystems/react-contacts)
[![npm](https://img.shields.io/npm/v/react-contacts.svg)](https://www.npmjs.com/package/react-contacts)
[![NPM downloads](https://img.shields.io/npm/dm/react-contacts.svg)](https://www.npmjs.com/package/react-contacts)

## 示例图片

![Example](./example.png)

## 如何使用

### 安装

`yarn add react-contacts`

### React 

```js
import Contacts from 'react-contacts'

<Contacts {...props}/>

```

属性  | 描述 | 类型 | 默认值
------------- | ------------- | --------------| ------------- 
deptTree  | 部门树数据（[数据](###部门树数据)） | array | []
users  | 用户数据 （[数据](### 用户和搜索结果数据)） | object | { records: []}
loading | 加载状态 | bool | false
searchResult | 用户查询结果 （[数据](### 用户和搜索结果数据)） | object | { records: []}
handleSearchUser | 搜索用户和反应回调 | func | function(page,nameKey,depId)，三个参数，page（页码），nameKey（用户名搜索关键字），depId（部门id）
deptSearch | 部门搜索框显示 | bool | tree
updateSelectUsers | 更新选定用户数据 | func | function(userSelected)
updateSelectDept | 更新选定部门数据 | func | function(deptSelected)
deptCheckBox | 部门checkbox显示 | bool | true
searchDeptPlaceholder | 搜索部门输入框提示 | string | '请输入搜索部门'
searchUserPlaceholder | 搜索用户输入框提示 | string | '请输入搜索姓名'
defaultUserSelected   | 默认选择用户 | array | [{userId:'abc',username:'CCC'}] 
defaultDeptSelected   | 默认选择部门节点 | array | [{id:1,name:'ABC'}] 
numberColor   | 选择的总数字颜色 | sring | #1B9AFF 
selectAllText   | 全选框描述文字 | string | 全选 
totalShowText   | 选择的总数文字 | string | 共选择了$个 
userNameKey   | 取用户名称和选中的key | string | 'username'
deptNameKey   | 取部门树和选中名称的key | string | 'name' 
radio   | 控制用户单选开关 | bool | false
radioShowText   | 用户选择为radio时，显示文字内容 | string | '已经选择' 
checkStrictly   | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | bool | false
showAllDeptTags   | Tags是否显示所有节点 | bool | false


### 部门树数据

````
[
      {
        id: 1,
        parentId: 0,
        children: [
          {
            id: 3,
            parentId: 1,
            children: [
              {
                id: 4,
                parentId: 3,
                children: [
                  {
                    id: 5,
                    parentId: 4,
                    children: [],
                    name: '院校农信',
                  },
                ],
                name: '高新农信',
              },
            ],
            name: '潍坊农信',
          },
        ],
        name: '山东农信',
      },
  ]
````

### 用户和搜索结果数据

```

 {
      records: [
        {
          userId: 1,
          username: 'admin',
          password: '$2a$10$QOfWxxFyAMmEEmnuw9UI/..1s4B4eF/u9PzE2ZaGO.ij9YfmcUy.u',
          salt: null,
          wxOpenid: 'o_0FT0uyg_H1vVy2H0JpSwlVGhWQ',
          qqOpenid: null,
          createTime: '2018-04-20 07:15:18',
          updateTime: '2019-03-12 16:04:42',
          mail: 'a@a.com',
          delFlag: '0',
          lockFlag: '0',
          phone: '17034642888',
          avatar: 'lengleng-0d2a7b025da14d8d93f595b3fa082d82.jpg',
          deptId: 1,
          tenantId: 1,
          deptName: '真理部',
          roleList: [
            {
              roleId: 1,
              roleName: '管理员',
              roleCode: 'ROLE_ADMIN',
              roleDesc: '管理员',
              dsType: 2,
              dsScope: '2',
              createTime: '2017-10-29 15:45:51',
              updateTime: '2018-12-26 14:09:11',
              delFlag: '0',
            },
          ],
        },
	   ......
      ],
      total: 11,
      size: 10,
      current: 1,
      searchCount: true,
      pages: 1,
    },

```

### 开发

````
$ git clone https://github.com/wafersystems/react-contacts.git
$ yarn
$ yarn start

````
