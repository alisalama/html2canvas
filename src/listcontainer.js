var NodeContainer = require('./nodecontainer');

function ListContainer(node, parent) {
    NodeContainer.call(this, node, parent);
}

ListContainer.prototype = Object.create(NodeContainer.prototype);

ListContainer.prototype.getNodeList = function(){

    return Array.prototype.slice.call(this.node.children);
};

ListContainer.prototype.findNumericalIndexOfListItem = function(listItem){

    return this.getNodeList().indexOf(listItem.node) + 1;

};

module.exports = ListContainer;
