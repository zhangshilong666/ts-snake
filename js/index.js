var food = /** @class */ (function () {
    // 构造函数
    function food() {
        this.element = document.querySelector('.food');
    }
    Object.defineProperty(food.prototype, "X", {
        get: function () {
            return this.element.offsetLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(food.prototype, "Y", {
        get: function () {
            return this.element.offsetTop;
        },
        enumerable: false,
        configurable: true
    });
    food.prototype.change = function () {
        this.element.style.top = '30px';
        this.element.style.left = '50px';
    };
    return food;
}());
var fo = new food();
fo.change();
