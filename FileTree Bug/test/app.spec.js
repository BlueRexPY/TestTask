'use strict';

const { default: createFileTree } = require("../src/app");


const getDataset = file =>
  require(`../src/dataset/${file}`)

describe('fileTree', function () {

  var traverseTreeAndFindNode = function (inputNode, nodes) {
    if (!nodes) {
      return undefined;
    }

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      if (node.nodeId === inputNode.id) {
        return node;
      }
      var nodeFoundAtChildren = traverseTreeAndFindNode(inputNode, node.getChildren());

      if (nodeFoundAtChildren) {
        return nodeFoundAtChildren;
      }
    }

    return undefined;
  };

  function testTreeNode(inputNode, foundNode) {
    it('tree node ' + inputNode.id + ' should have correct data', function () {
      expect(foundNode.nodeId).toEqual(inputNode.id);
      expect(foundNode.name).toEqual(inputNode.name);
      expect(foundNode.type).toEqual(inputNode.type);
    });
    it('tree node ' + inputNode.id + ' should have correct parent', function () {
      if (inputNode.parentId) {
        expect(foundNode.parentNode).not.toBeNull();
        expect(foundNode.parentNode.nodeId).toEqual(inputNode.parentId);
      } else {
        expect(foundNode.parentNode).toBeNull();
      }
    });
  }

  function testTreeContentsWithDataSet(dataSet) {
    describe('created from ' + dataSet + ' dataSet', function () {
      var inputData = getDataset(dataSet);
      var fileTree = createFileTree(inputData);

      for (var i = 0; i < inputData.length; i++) {
        var inputNode = inputData[i];
        var foundNode = traverseTreeAndFindNode(inputNode, fileTree.getRootNodes());
        testTreeNode(inputNode, foundNode);
      }
      it('should contain all nodes from dataset', function () {
        for (var i = 0; i < inputData.length; i++) {
          expect(traverseTreeAndFindNode(inputData[i], fileTree.getRootNodes())).toBeDefined();
        }
      });
    });
  }

  testTreeContentsWithDataSet('simple-data.json');
  testTreeContentsWithDataSet('data-for-bug.json');
});
