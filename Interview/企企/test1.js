// class Cat {
//     say() {

//     }
//     sayAgain = () => {

//     }

// }



function Cat() {
    this.say = (a) => {
        console.log(a)
     };
}
Cat.prototype.sayAgain = function () { }


console.log(new Cat().sayAgain('a'));
console.log(new Cat().sayAgain('b'));


console.log(new Cat().say === new Cat().say)
console.log(new Cat().sayAgain === new Cat().sayAgain)


// "use strict";

// function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

// function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

// function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// var Cat =
//     /*#__PURE__*/
//     function () {
//         function Cat() {
//             _classCallCheck(this, Cat);

//             _defineProperty(this, "sayAgain", function () { });
//         }

//         _createClass(Cat, [{
//             key: "say",
//             value: function say() { }
//         }]);

//         return Cat;
//     }();


//     console.log(new Cat());