(function () {

    var countdown = {

        start: function (options) {
            var _this = this;
            var endtime = new Date(2017, 4, 30, 22, 0, 0);
            var clock = $(options.id);

            var days = clock.find('.days');
            var hours = clock.find('.hours');
            var minutes = clock.find('.minutes');
            var seconds = clock.find('.seconds');

            var timeinterval = setInterval(function () {
                var t = _this.getTimeRemaining(endtime);
                days.text(t.days);
                hours.text(t.hours);
                minutes.text(t.minutes);
                seconds.text(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }, 1000);
        },

        getTimeRemaining: function (endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        },



    }

    window.countdown = countdown;
})();