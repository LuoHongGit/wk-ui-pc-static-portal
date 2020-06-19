var {add} = require('./model01.js');
var Vue = require('./vue.min');

var app = new Vue({
    el: "#app",
    data: {
        num1: 0,
        num2: 0,
        result: 0
    },
    methods: {
        change(){
            this.result = add(Number.parseInt(this.num1),Number.parseInt(this.num2));
        }
    }
});
