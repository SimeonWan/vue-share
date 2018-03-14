var app = new Vue({
    el: "#app",
    data: {
        salary: 1000,
        list: []
    },
    methods: {
        calculateTax: function () {
            var base = 3500;
            var temp = this.salary - base;
            var tax = 0;
            if (temp > 0 && temp <= 1500) {
                tax = temp * 0.03 - 0;
            }
            else if (temp > 1500 && temp <= 4500) {
                tax = temp * 0.10 - 105;
            }
            //……
            return Math.floor(tax * 100) / 100;
        },
        add: function () {
            this.list.push("OK");
        },
        /**
         * 02
         * @returns {string}
         */
        // now: function () {
        //     return new Date().toLocaleString();
        // }
    },
    computed: {
        // calculateTax: function () {
        //     var base = 3500;
        //     var temp = this.salary - base;
        //     var tax = 0;
        //
        //     if (temp > 0 && temp <= 1500) {
        //         tax = temp * 0.03 - 0;
        //     } else if (temp > 1500 && temp <= 4500) {
        //         tax = temp * 0.10 - 105;
        //     }
        //     //……
        //     return Math.floor(tax * 100) / 100;
        // },
        /**
         *  01
         * @returns {string}
         */
        now: function () {
            return new Date().toLocaleString();
        }
    }

});

