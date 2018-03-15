var app = new Vue({
    el: "#app",
    data: {
        username: "Scott",
        sex: ""
    },
    ready: function () {
        this.sex = "male"
    }
});
app.username = "Jack";

console.log(app.username);
console.log(app.$data.username);
console.log(app.$el === document.getElementById("app"));

