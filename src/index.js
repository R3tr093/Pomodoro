let m = 25;
let s = 0;

let clock = false;
let playBtn = null;
let ring = false;
let info = "";

function sum() {
    s = Number(s);
    m = Number(m);
    m++;

    if (m < 10) {
        m = `0${String(m)}`;
    } else {
        m = String(m);
    }

    if (s < 10) {
        s = `0${String(s)}`;
    } else {
        s = String(s);
    }

    document.querySelector("#count").textContent = `${m} : ${s}`;
}

function dec() {
    s = Number(s);
    m = Number(m);

    if (m > 0) {
        m--;
    }

    if (m < 10) {
        m = `0${String(m)}`;
    } else {
        m = String(m);
    }

    if (s < 10) {
        s = `0${String(s)}`;
    } else {
        s = String(s);
    }

    document.querySelector("#count").textContent = `${m} : ${s}`;
}

function base() {
    playBtn = document.querySelector("#play");
    s = 0;
    m = 25;

    const audio = new Audio("hello.wav");
    audio.play();

    const element = (
        <div>
            <div id={"timerWrapper"}>
                <span id={"count"}>
                    {" "}
                    {m} : 0{s}
                </span>
            </div>
            <div id={"wrapBtn"}>
                <button
                    className={"slideInLeft animated"}
                    id={"sumBtn"}
                    onClick={sum}>
                    Plus
                </button>
                <br />

                <button
                    className={"slideInLeft animated"}
                    id={"play"}
                    onClick={start}>
                    Play
                </button>
                <br />

                <button
                    className={"slideInLeft animated"}
                    id={"resetBtn"}
                    onClick={reset}>
                    Reset
                </button>
                <br />

                <button
                    className={"slideIif( m <= 0)eft animated"}
                    id={"minusBtn"}
                    onClick={dec}>
                    Minus
                </button>
                <br />
            </div>
        </div>
    );

    ReactDOM.render(element, document.querySelector("#root"));
}

// Init dom at this state

base();

function Timebreak() {
    playBtn = document.querySelector("#play");
    s = 0;
    m = 5;

    const audio = new Audio("hello.wav");
    audio.play();

    const element = (
        <div>
            <div id={"timerWrapper"}>
                <span id={"count"}>
                    {" "}
                    {m} : 0{s}
                </span>
            </div>
            <div id={"wrapBtn"}>
                <button
                    className={"slideInLeft animated"}
                    id={"sumBtn"}
                    onClick={sum}>
                    Plus
                </button>
                <br />

                <button
                    className={"slideInLeft animated"}
                    id={"play"}
                    onClick={start}>
                    Play
                </button>
                <br />

                <button
                    className={"slideInLeft animated"}
                    id={"resetBtn"}
                    onClick={reset}>
                    Reset
                </button>
                <br />

                <button
                    className={"slideIif( m <= 0)eft animated"}
                    id={"minusBtn"}
                    onClick={dec}>
                    Minus
                </button>
                <br />
            </div>
        </div>
    );

    ReactDOM.render(element, document.querySelector("#root"));
}




function reset() {
    document.querySelector("#count").textContent = "25 : 00";
    clearInterval(clock);
    s = 0;
    m = 25;
}

function start() {
    if (!clock) {
        clock = setInterfunction base() {
    playBtn = document.querySelector("#play");
    s = 0;
    m = 25;

    const audio = new Audio("hello.wav");
    audio.play();

    const element = (
        <div>
            <div id={"timerWrapper"}>
                <span id={"count"}>
                    {" "}
                    {m} : 0{s}
                </span>
            </div>
            <div id={"wrapBtn"}>
                <button
                    className={"slideInLeft animated"}
                    id={"sumBtn"}
                    onClick={sum}>
                    Plus
                </button>
                <br />

                <button
                    className={"slideInLeft animated"}
                    id={"play"}
                    onClick={start}>
                    Play
                </button>
                <br />

                <button
                    className={"slideInLeft animated"}
                    id={"resetBtn"}
                    onClick={reset}>
                    Reset
                </button>
                <br />

                <button
                    className={"slideIif( m <= 0)eft animated"}
                    id={"minusBtn"}
                    onClick={dec}>
                    Minus
                </button>
                <br />
            </div>
        </div>
    );

    ReactDOM.render(element, document.querySelector("#root"));    

    playBtn = document.querySelector("#play");
    s = 0;
    m = 25;

    const audio = new Audio("hello.wav");
    audio.play();

    const element = (
        <div>
            <div id={"timerWrapper"}>
                <span id={"count"}>
                    {" "}
                    {m} : 0{s}
                </span>
            </div>
            <div id={"wrapBtn"}>
                <button
                    className={"slideInLeft animated"}
                    id={"sumBtn"}
                    onClick={sum}>
                    Plus
                </button>
                <br />

                <button
                    className={"slideInLeft animated"}
                    id={"play"}
                    onClick={start}>
                    Play
                </button>
                <br />

                <button
                    className={"slideInLeft animated"}
                    id={"resetBtn"}
                    onClick={reset}>
                    Reset
                </button>
                <br />

                <button
                    className={"slideIif( m <= 0)eft animated"}
                    id={"minusBtn"}
                    onClick={dec}>
                    Minus
                </button>
                <br />
            </div>
        </div>
    );

    ReactDOM.render(element, document.querySelector("#root"));
}
        var audio = new Audio("go.wav");

        audio.play();

        if (ring) {
            setTimeout(() => {
                const audio = new Audio("clock.wav");

                audio.play();
            }, 1500);
        }

        ring = true;

        var playBtn = (
            <button id={"play"} onClick={start}>
                Stop
            </button>
        );
    } else {
        clearInterval(clock);

        clock = false;
        info = "Timer is stopped !";
        var audio = new Audio("stop.wav");

        audio.play();
        var playBtn = (
            <button id={"play"} onClick={start}>
                Play
            </button>
        );
    }

    if (s < 10) {
        s = `0${s}`;
    }

    const element = (
        <div>
            <div id={"timerWrapper"}>
                <span id={"count"}>
                    {" "}
                    {m} : {s}
                </span>
            </div>
            <div id={"wrapBtn"}>
                <p id={"report"}>{info}</p>
                <button id={"sumBtn"} onClick={sum}>
                    Plus
                </button>
                <br />

                {playBtn}
                <br />

                <button id={"resetBtn"} onClick={reset}>
                    Reset
                </button>
                <br />

                <button id={"minusBtn"} onClick={dec}>
                    Minus
                </button>
                <br />
            </div>
        </div>
    );

    ReactDOM.render(element, document.querySelector("#root"));
}

function showTime() {
    m = Number(m);
    s = Number(s);

    end = false;

    if (s > 0) {
        s--;
    }

    if (s === 0 && m > 0) {
        m--;
        s = 59;
        audio = new Audio("clock.wav");
        audio.play();
    }

    if (m === 0 && s === 30) {
        audio = new Audio("last.wav");
        audio.play();
    }

    if (m === 0 && s === 20) {
        audio = new Audio("last.wav");
        audio.play();
    }

    if (m === 0 && s === 10) {
        audio = new Audio("last.wav");
        audio.play();
    }

    if (s === 0 && m < 0) {
        clearInterval(clock);
    }

    if (m < 10) {
        m = `0${String(m)}`;
    } else {
        m = String(m);
    }

    if (s < 10) {
        s = `0${String(s)}`;
    } else {
        s = String(s);
    }

    return `${m} : ${s}`;
}

// Refresh the dom

function tick() {
    if (s <= 1 && m <= 1) {
        const element = (
            <div>
                <div id={"wrapBtn2"}>
                    <p id={"report2"}> Timer is over !</p>
                    <button id={"restartBtn"} onClick={base}>
                        Restart
                    </button>
                    <br />
                    <button id={"breakBtn"} onClick={Timebreak}>
                        Take a break
                    </button>
                </div>
            </div>
        );

        ReactDOM.render(element, document.querySelector("#root"));
    }

    if (m > 1 || s > 1) {
        if (!clock) {
            const element = (
                <div>
                    <div id={"timerWrapper"}>
                        {" "}
                        <span id={"count"}>{showTime()}</span>
                    </div>

                    <div id={"wrapBtn"}>
                        <p id={"report"}> </p>
                        <button id={"sumBtn"} onClick={sum}>
                            Plus
                        </button>
                        <br />

                        <button id={"play"} onClick={start}>
                            Stop
                        </button>
                        <br />

                        <button id={"resetBtn"} onClick={reset}>
                            Reset
                        </button>
                        <br />

                        <button id={"minusBtn"} onClick={dec}>
                            Minus
                        </button>

                        <br />
                    </div>
                </div>
            );
            ReactDOM.render(element, document.querySelector("#root"));
        } else {
            const element = (
                <div>
                    <div id={"timerWrapper"}>
                        {" "}
                        <span id={"count"}>{showTime()}</span>
                    </div>

                    <div id={"wrapBtn"}>
                        <p id={"report"}>{info}</p>
                        <button id={"sumBtnDisable"} disable>
                            Plus
                        </button>
                        <br />

                        <button id={"play"} onClick={start}>
                            Stop
                        </button>
                        <br />

                        <button id={"resetBtn"} onClick={reset}>
                            Reset
                        </button>
                        <br />

                        <button id={"minusBtnDisable"}>Minus</button>

                        <br />
                    </div>
                </div>
            );
            ReactDOM.render(element, document.querySelector("#root"));
        }
    }
}
