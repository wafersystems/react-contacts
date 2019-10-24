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
