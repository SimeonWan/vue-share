var app = new Vue({
    el: "#app",
    methods: {
        test: function ($event) {
            if ($event.keyCode == 13) {
                $event.target.blur();
            }
        }
    }


});

