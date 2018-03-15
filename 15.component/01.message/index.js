Vue.component('schoolMessage', {
    template: "            <fieldset>                <legend>消息通知</legend>                <p>{{schoolContent}}</p>            </fieldset>        ",
    props: ['schoolContent']
});


Vue.component('message', {
    template: "            <fieldset>                <legend>消息通知</legend>                <p>{{content}}</p>            </fieldset>        ",
    props: ['content']
});


var app = new Vue({
    el: "#app",
    data: {
        msg: "qw"
    }
});

