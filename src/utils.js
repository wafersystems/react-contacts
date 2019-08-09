import React from 'react';
import {Tree} from "antd";

const TreeNode = Tree.TreeNode;

/**
 *
 * @param nodes
 * @returns {*} tree nodes.
 */
export function makeTreeNode(nodes) {
  return nodes.map(v => {
    const nodeKey = v.id;
    return (
      <TreeNode data={v} title={v.name} key={nodeKey}>
        {v.children.length > 0 && makeTreeNode(v.children, nodeKey)}
      </TreeNode>
    );
  });
}
