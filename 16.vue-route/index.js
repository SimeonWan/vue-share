var Home = {
    template: '<div><p>{{msg}}</p></div>',
    data: function () {
        return {msg: '你好路由'}
    }
};
var About = {
    template: '<div><p>关于我们</p></div>'
};

var router = new VueRouter({
    routes: [{
        path: "/home",
        component: Home
    },
        {
            path: "/about",
            component: About
        }]
});


var app = new Vue({
    el: "#app",
    router: router,
    data: {
        msg: "qw"
    },
    method:{
        onAdd:function () {
            
        }
    }
});

