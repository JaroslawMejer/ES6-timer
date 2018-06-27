class Stopwatch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            running: false,
            savedTimes:{
                id:[],
                time:[]
            }
        }
        this.reset();
        this.render(this.times);
        this.start = this.start.bind(this)
        this.reset = this.reset.bind(this)
        this.format = this.format.bind(this)
        this.step = this.step.bind(this)
        this.calculate = this.calculate.bind(this)
        this.stop = this.stop.bind(this)
        this.save = this.save.bind(this)
        this.SavingTimes = this.SavingTimes.bind(this)
    }
    reset() {
    	this.times = {
    		minutes: 0,
    		seconds: 0,
    		miliseconds: 0
    	}
    	if(!this.running){
    		this.setState({

            })
    	}
    }
    render() {
    	return (
            <div className='container'>
                <nav className='controls'>
                    <a href='#' className='button' id='start' onClick={this.start}>Start</a>
                    <span>||</span>
                    <a href='#' className='button' id='stop' onClick={this.stop}>Stop</a>
                </nav>
                <div id='stopwatch'>{this.format(this.times)}</div>
                <nav className='controls'>
                    <a href='#' className='button' id='reset' onClick={this.reset}>Reset</a>
                    <span>||</span>
                    <a href='#' className='button' id='save' onClick={this.SavingTimes}>Zapisz</a>
                </nav>
                <nav className='controls'>
                    <a href='#' className='button' id='delete'>Usuń czasy</a>
                </nav>
                <ul id='results'></ul>
            </div>
        )
    }
    format(times) {
    	return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`
    }
    start() {
    	if(!this.state.running) {
    		this.state.running = true;
            console.log(this.state.running.valueOf())
    		this.watch = setInterval(() => this.step(), 10);
    	}
    }

    step() {
    	if (!this.state.running) return;
    	this.calculate();
    	this.setState({

        })
    }

    calculate() {
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

	stop() {
		this.state.running = false;
		clearInterval(this.watch);
	}
	save() {
		return this.format(this.times);
	}
    pad0(value){
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;  
    }
    SavingTimes(){
        //https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array/37435577
        const li = <li>{this.format(this.times)}</li>
        ReactDOM.render(li, document.getElementById('results'))
    }
}

var app = React.createElement(Stopwatch);
ReactDOM.render(app, document.getElementById('container'));

let deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', () => DeleteTimes())

function DeleteTimes (){
    document.getElementById('results').innerHTML = '';
}


