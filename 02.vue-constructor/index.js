var MyVue = Vue.extend({
    filters: {
        uppercase: function (value) {
            return value.toUpperCase();
        }
    }
});
var app_1 = new MyVue({
    el: "#app_1",
    data: {
        student: {
            name: "Scott",
            sex: "male"
        }
    }
});
var app_2 = new MyVue({
//……
});
