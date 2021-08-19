import React from 'react';
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;

/**
 *
 * @param nodes
 * @param deptNameKey
 * @returns {*} tree nodes.
 */
export function makeTreeNode(nodes, deptNameKey) {
  return nodes.map(v => {
    const nodeKey = v.id;
    return (
      <TreeNode data={v} title={v[deptNameKey]} key={nodeKey}>
        {v.children.length > 0 && makeTreeNode(v.children, deptNameKey)}
      </TreeNode>
    );
  });
}

/**
 * 过滤dept节点,如果父节点选中不显示子节点
 * @param list
 * @returns {[]}
 */
export const filterDeptTagShow = (list) => {
  /**
   *
   * @param object
   * @param node
   */
  const removeDescendants = (object, node) => {
    if (node.children && node.children.length > 0) {
      node.children.forEach(v => {
        removeDescendants(object, v)
        delete object[v.id];
      })
    }
  }
  const obj = {};
  list.forEach(value => {
    obj[value.id] = value;
  });
  list.forEach(value => {
    removeDescendants(obj, value);
  });
  const dept = [];
  Object.keys(obj).forEach(key => {
    dept.push(obj[key]);
  })
  return dept;
}

/**
 *  格式化树数据
 * @param treeData
 * @param deptNameKey
 * @returns {*}
 */
export const formatDeptData = (treeData, deptNameKey) => {
    return treeData.map(v => {
        if(!v.id){
            v.id = v.deptId;
        }
        try{
            v.key = v.id?v.id.toString():v.deptId.toString();
        }catch (e){
            v.key = new Date().getTime();
        }
        v.title = v[deptNameKey];
        v.isLeaf = !v.hasChild;
        if (v.children && v.children.length > 0) {
            v.isLeaf=false;
            v.children = formatDeptData(v.children, deptNameKey)
        }
        return v;
    });
}
