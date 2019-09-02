let m = 9;
let s = 0;

let clock = null;

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
    m--;

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
    const element = (

        <div>
            // eslint-disable-next-line react/react-in-jsx-scope
            <span id={"count"}>
                {" "}
                {m} : {s}{" "}
            </span>

            <div id={"wrapBtn"}>
                <button onClick={sum}>Plus</button>
                <br />

                <button onClick={start}>Play</button>
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
    document.querySelector("#count").textContent = "00:00";
    clearInterval(clock);
    s = 0;
    m = 0;
}

function start() {
    clock = setInterval(tick, 1000);
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

// Refresh the dom

function tick() {
    const element = (
        <div>
            <span id={"count"}>{showTime()}</span>

            <div id={"wrapBtn"}>
                <button onClick={sum}>Plus</button>
                <br />
                <button onClick={start}>Play</button>
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
