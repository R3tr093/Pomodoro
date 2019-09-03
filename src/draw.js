let m = 25;
let s = 0;

let clock = false;
let playBtn = null;

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

    const element = (
        <div>
            {" "}
            <h1>Info</h1>
            <span id={"count"}>
                {" "}
                {m} : 0{s}
            </span>
            <div id={"wrapBtn"}>
                <button onClick={sum}>Plus</button>
                <br />

                <button id={"play"} onClick={start}>
                    Play
                </button>
                <br />

                <button onClick={reset}>Reset</button>
                <br />

                <button onClick={dec}>Minus</button>
                <br />
            </div>
        </div>
    );

    ReactDOM.render(element, document.querySelector("#root"));
}

// Init dom at this state

base();

function reset() {
    document.querySelector("#count").textContent = "25:00";
    clearInterval(clock);
    s = 0;
    m = 25;
}

function start() {
    if (!clock) {
        clock = setInterval(tick, 1000);
        var playBtn = (
            <button id={"play"} onClick={start}>
                Stop
            </button>
        );
    } else {
        clearInterval(clock);
        clock = false;
        var playBtn = (
            <button id={"play"} onClick={start}>
                Play
            </button>
        );
    }

    const element = (
        <div>
            <span id={"count"}>
                {" "}
                {m} : {s}
            </span>
            <div id={"wrapBtn"}>
                <button onClick={sum}>Plus</button>
                <br />

                {playBtn}
                <br />

                <button onClick={reset}>Reset</button>
                <br />

                <button onClick={dec}>Minus</button>
                <br />
            </div>
        </div>
    );

    ReactDOM.render(element, document.querySelector("#root"));
}

function showTime() {
    m = Number(m);
    s = Number(s);

    if (m > 0 || s > 0) {
        if (s > 0) {
            s--;
        } else {
            m--;
            s = 59;
        }

        if (s === 0 && m > 0) {
            m--;
            s = 59;
        }

        if (s === 0 && m === 0) {
            clearInterval(clock);
        }
    } else {
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

function report() {
    alert("Nope");
}

// Refresh the dom

function tick() {
    if (!clock) {
        const element = (
            <div>
                <span id={"count"}>{showTime()}</span>

                <div id={"wrapBtn"}>
                    <button onClick={sum}>Plus</button>
                    <br />

                    <button id={"play"} onClick={start}>
                        Stop
                    </button>
                    <br />

                    <button onClick={reset}>Reset</button>
                    <br />

                    <button onClick={dec}>Minus</button>

                    <br />
                </div>
            </div>
        );
        ReactDOM.render(element, document.querySelector("#root"));
    } else {
        const element = (
            <div>
                <span id={"count"}>{showTime()}</span>

                <div id={"wrapBtn"}>
                    <button onClick={sum}>Plus</button>
                    <br />

                    <button id={"play"} onClick={start}>
                        Stop
                    </button>
                    <br />

                    <button onClick={reset}>Reset</button>
                    <br />

                    <button onClick={dec}>Minus</button>

                    <br />
                </div>
            </div>
        );
        ReactDOM.render(element, document.querySelector("#root"));
    }
}
