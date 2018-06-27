'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
    _inherits(Stopwatch, _React$Component);

    function Stopwatch(props) {
        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

        _this.state = {
            running: false,
            savedTimes: []
        };
        _this.reset();
        _this.render(_this.times);
        _this.start = _this.start.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.format = _this.format.bind(_this);
        _this.step = _this.step.bind(_this);
        _this.calculate = _this.calculate.bind(_this);
        _this.stop = _this.stop.bind(_this);
        _this.save = _this.save.bind(_this);
        _this.savingTimes = _this.savingTimes.bind(_this);
        _this.deleteTimes = _this.deleteTimes.bind(_this);
        return _this;
    }

    _createClass(Stopwatch, [{
        key: 'reset',
        value: function reset() {
            this.times = {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            };
            if (!this.running) {
                this.setState({});
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'nav',
                    { className: 'controls' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'start', onClick: this.start },
                        'Start'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '||'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'stop', onClick: this.stop },
                        'Stop'
                    )
                ),
                React.createElement(
                    'div',
                    { id: 'stopwatch' },
                    this.format(this.times)
                ),
                React.createElement(
                    'nav',
                    { className: 'controls' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'reset', onClick: this.reset },
                        'Reset'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '||'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'save', onClick: this.savingTimes },
                        'Zapisz'
                    )
                ),
                React.createElement(
                    'nav',
                    { className: 'controls' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'delete', onClick: this.deleteTimes },
                        'Usu\u0144 czasy'
                    )
                ),
                React.createElement(
                    'ul',
                    { id: 'results' },
                    React.createElement(
                        'li',
                        null,
                        this.state.savedTimes
                    )
                )
            );
        }
    }, {
        key: 'format',
        value: function format(times) {
            return this.pad0(times.minutes) + ':' + this.pad0(times.seconds) + ':' + this.pad0(Math.floor(times.miliseconds));
        }
    }, {
        key: 'start',
        value: function start() {
            var _this2 = this;

            if (!this.state.running) {
                this.state.running = true;
                console.log(this.state.running.valueOf());
                this.watch = setInterval(function () {
                    return _this2.step();
                }, 10);
            }
        }
    }, {
        key: 'step',
        value: function step() {
            if (!this.state.running) return;
            this.calculate();
            this.setState({});
        }
    }, {
        key: 'calculate',
        value: function calculate() {
            this.times.miliseconds += 1;
            if (this.times.miliseconds >= 100) {
                this.times.seconds += 1;
                this.times.miliseconds = 0;
            }
            if (this.times.seconds >= 60) {
                this.times.minutes += 1;
                this.times.seconds = 0;
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.state.running = false;
            clearInterval(this.watch);
        }
    }, {
        key: 'save',
        value: function save() {
            return this.format(this.times);
        }
    }, {
        key: 'pad0',
        value: function pad0(value) {
            var result = value.toString();
            if (result.length < 2) {
                result = '0' + result;
            }
            return result;
        }
    }, {
        key: 'savingTimes',
        value: function savingTimes() {
            this.setState({ savedTimes: this.state.savedTimes.concat(' - ' + this.format(this.times)) });
            console.log(this.state.savedTimes);
        }
    }, {
        key: 'deleteTimes',
        value: function deleteTimes() {
            this.setState({
                savedTimes: []
            });
            console.log(this.state.savedTimes);
        }
    }]);

    return Stopwatch;
}(React.Component);

var app = React.createElement(Stopwatch);
ReactDOM.render(app, document.getElementById('container'));
