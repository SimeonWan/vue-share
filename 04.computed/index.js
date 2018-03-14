var app = new Vue({
    el: "#app",
    data: {
        salary: 0,
    },
    computed: {
        calculateTax: function () {
            var base = 3500;
            var temp = this.salary - base;
            var tax = 0;

            if (temp > 0 && temp <= 1500) {
                tax = temp * 0.03 - 0;
            } else if (temp > 1500 && temp <= 4500) {
                tax = temp * 0.10 - 105;
            }
            //……
            return Math.floor(tax * 100) / 100;
        }
    }

});

