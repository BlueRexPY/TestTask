'use strict';

function FileTreeNode(nodeId, name, type) {
  const children = [];

  this.nodeId = nodeId;
  this.name = name;
  this.type = type;
  this.parentNode = null;

  this.setParent = function(parentNode) {
    this.parentNode = parentNode;
  };
  this.addChild = function(node){
    if (this.type !== 'DIRECTORY') {
      throw "Cannot add child node to a non-directory node";
    }
    children.push(node);
    node.setParent(this);
  };
  this.getChildren = function() {
    return children;
  };
}

function FileTree() {
  this.nodes = [];

  this.getRootNodes = function() {
    const result = [];
    for (let i = 0; i < this.nodes.length; i++) {
      if (!this.nodes[i].parentNode) {
        result.push(this.nodes[i]);
      }
    }
    return result;
  };
  this.findNodeById = function(nodeId) {
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].nodeId === nodeId) {
        return this.nodes[i];
      }
    }
    return null;
  };
  this.createNode = function(nodeId, name, type, parentNode) {
    let node = new FileTreeNode(nodeId, name, type),status = 0;
    parentNode?parentNode.addChild(node):null

    this.nodes.forEach(function(dataNode) {
      if (dataNode.nodeId === node.nodeId) {
        dataNode.parentNode = node.parentNode;
        dataNode.name = node.name;
        node.addChild(dataNode);
        ++status;
      }
    });
    status === 0?this.nodes.push(node):null
  };
  this.createParentTree = function(inputNode) {
    const node = new FileTreeNode(inputNode.parentId, '', 'DIRECTORY');
    this.nodes.push(node);
    return node;
  };
}

export default function createFileTree(input) {
  const fileTree = new FileTree();

  for (const inputNode of input) {
    const parentNode = inputNode.parentId ? fileTree.findNodeById(inputNode.parentId) === null ? fileTree.createParentTree(inputNode) : fileTree.findNodeById(inputNode.parentId) : null;
    fileTree.createNode(inputNode.id, inputNode.name, inputNode.type, parentNode);
  }

  return fileTree;
}
