var app = new Vue({
    el: "#app",
    data: {
        r: 0
    },
    watch: {
        r: function (newValue, oldValue) {
            var c = document.getElementById("test");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.clearRect(0, 0, 300, 300);
            ctx.lineWidth = 5;
            ctx.strokeStyle = "red";
            ctx.arc(100, 100, newValue, 0, 360 * Math.PI / 180);
            ctx.stroke();
        }
    }

});

