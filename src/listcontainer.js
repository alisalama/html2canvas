var NodeContainer = require('./nodecontainer');

function ListContainer(node, parent) {
    NodeContainer.call(this, node, parent);
}

ListContainer.prototype = Object.create(NodeContainer.prototype);

ListContainer.prototype.getNodeList = function(){

    return Array.prototype.slice.call(this.node.children);
};

ListContainer.prototype.findNumericalIndexOfListItem = function(listItem){

     var listItems = this.getNodeList();
    
    for (var i = listItems.length >>> 0; i--;) { 
      
      if(listItems[i].nodeName !== "LI" ){
        listItems.splice(i, 1);
      }

    }

    return listItems.indexOf(listItem.node) + 1;

};

module.exports = ListContainer;
