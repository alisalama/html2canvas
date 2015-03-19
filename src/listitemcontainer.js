var NodeContainer = require('./nodecontainer');

function ListItemContainer(node, parent) {
    NodeContainer.call(this, node, parent);
}

ListItemContainer.prototype = Object.create(NodeContainer.prototype);


ListItemContainer.prototype.generateListNumber = {

    listAlpha : function(number) {
        var tmp = "", modulus;

        do {
            modulus = number % 26;
            tmp = String.fromCharCode((modulus) + 64) + tmp;
            number = number / 26;
        } while ((number * 26) > 26);

        return tmp;
    },

    listRoman : function(number) {
        var romanArray = [
            "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
        ], decimal = [
            1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
        ], roman = "", v, len = romanArray.length;

        if (number <= 0 || number >= 4000) {
            return number;
        }

        for (v = 0; v < len; v += 1) {
            while (number >= decimal[v]) {
                number -= decimal[v];
                roman += romanArray[v];
            }
        }

        return roman;
    }
};

ListItemContainer.prototype.listItemText = function (type, currentIndex) {

    var text;

    switch (type) {
        case "decimal-leading-zero":
            text = (currentIndex.toString().length === 1) ? currentIndex = "0" + currentIndex.toString() : currentIndex.toString();
            break;
        case "upper-roman":
            text = this.generateListNumber.listRoman(currentIndex);
            break;
        case "lower-roman":
            text = this.generateListNumber.listRoman(currentIndex).toLowerCase();
            break;
        case "lower-alpha":
            text = this.generateListNumber.listAlpha(currentIndex).toLowerCase();
            break;
        case "upper-alpha":
            text = this.generateListNumber.listAlpha(currentIndex);
            break;
        default:
        case "decimal":
            text = currentIndex;
            break;
    }

    return text;
};



module.exports = ListItemContainer;
