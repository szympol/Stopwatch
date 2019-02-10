class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0,
            running: false
        };
    }

    start() {
        if (!this.state.running) {
          this.setState({running: true});
          this.watch = setInterval(() => this.step(), 10);
        }
      }

     stop() {
        this.setState({running: false});
        clearInterval(this.watch);
      }

    step() {
        if (!this.state.running) return;
        this.calculate();
    }
 
   calculate() {
    this.setState({miliseconds: this.state.miliseconds += 1 });
    if (this.state.miliseconds >= 100) {
      this.setState({seconds: this.state.seconds += 1});
      this.setState({miliseconds: this.state.miliseconds = 0});
    }
    if (this.state.seconds >= 60) {
      this.setState({minutes: this.state.minutes += 1});
      this.setState({seconds: this.state.seconds = 0});
    }
  }

    
   render() {
    return (
      <div className="timer">
        <div className="controls">
          <button className="button" id="start" onClick={this.start.bind(this)}>Start</button>
          <button className="button" id="stop" onClick={this.stop.bind(this)}>Stop</button>
        
        </div>
        <div className="stopwatch">
          <div>{pad0(this.state.minutes)}:{pad0(this.state.seconds)}:{pad0(Math.floor(this.state.miliseconds))}</div>
        </div>
        
        <ul className="results"></ul>
      </div>
    );
  }


   /* reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
        this.display.innerText = this.format(this.times);
    }
*/

  /*  addTime() {
        const results = document.querySelector('.results');
        const interval = document.createElement('li');
        const newIntervalArray = results.getElementsByTagName('li');

        interval.innerHTML = `${newIntervalArray.length + 1} interval : ${this.format(this.times)}`;
        results.appendChild(interval);
    }

    clearTimeList() {
        const arrayToClear = document.querySelector('.results');
        arrayToClear.innerHTML = '';
    }

    */

}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

let stopwatch = React.createElement(Stopwatch);
ReactDOM.render(stopwatch, document.getElementById('stopwatch'));

/*
const stopwatch = new Stopwatch(
    document.querySelector('.stopwatch')
);

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());
let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());
let addButton = document.getElementById('add');
addButton.addEventListener('click', () => stopwatch.addTime());
let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => stopwatch.clearTimeList());
*/