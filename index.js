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

    const element = React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            {id: "timerWrapper"},
            React.createElement("span", {id: "count"}, " ", m, " : 0", s),
        ),
        React.createElement(
            "div",
            {id: "wrapBtn"},
            React.createElement(
                "button",
                {
                    className: "slideInLeft animated",
                    id: "sumBtn",
                    onClick: sum,
                },
                "Plus",
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                {
                    className: "slideInLeft animated",
                    id: "play",
                    onClick: start,
                },
                "Play",
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                {
                    className: "slideInLeft animated",
                    id: "resetBtn",
                    onClick: reset,
                },
                "Reset",
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                {
                    className: "slideInLeft animated",
                    id: "minusBtn",
                    onClick: dec,
                },
                "Minus",
            ),
            React.createElement("br", null),
        ),
    );

    ReactDOM.render(element, document.querySelector("#root"));
}

// Init dom at this state

base();

function reset() {
    document.querySelector("#count").textContent = "25 : 00";
    clearInterval(clock);
    s = 0;
    m = 25;
}

function start() {
    if (!clock) {
        clock = setInterval(tick, 1000);
        info = "Timer is running !";
        var audio = new Audio("go.wav");

        audio.play();

        if (ring) {
            setTimeout(() => {
                const audio = new Audio("clock.wav");

                audio.play();
            }, 1500);
        }

        ring = true;

        var playBtn = React.createElement(
            "button",
            {id: "play", onClick: start},
            "Stop",
        );
    } else {
        clearInterval(clock);

        clock = false;
        info = "Timer is stopped !";
        var audio = new Audio("stop.wav");

        audio.play();
        var playBtn = React.createElement(
            "button",
            {id: "play", onClick: start},
            "Play",
        );
    }

    if (s < 10) {
        s = `0${s}`;
    }

    const element = React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            {id: "timerWrapper"},
            React.createElement("span", {id: "count"}, " ", m, " : ", s),
        ),
        React.createElement(
            "div",
            {id: "wrapBtn"},
            React.createElement("p", {id: "report"}, info),
            React.createElement("button", {id: "sumBtn", onClick: sum}, "Plus"),
            React.createElement("br", null),
            playBtn,
            React.createElement("br", null),
            React.createElement(
                "button",
                {id: "resetBtn", onClick: reset},
                "Reset",
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                {id: "minusBtn", onClick: dec},
                "Minus",
            ),
            React.createElement("br", null),
        ),
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
        const element = React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                {id: "wrapBtn2"},
                React.createElement("p", {id: "report2"}, " Timer is over !"),
                React.createElement(
                    "button",
                    {id: "restartBtn", onClick: base},
                    "Restart",
                ),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    {id: "breakBtn", onClick: base},
                    "Take a break",
                ),
            ),
        );

        ReactDOM.render(element, document.querySelector("#root"));
    }

    if (m > 1 || s > 1) {
        if (!clock) {
            const _element = React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {id: "timerWrapper"},
                    " ",
                    React.createElement("span", {id: "count"}, showTime()),
                ),
                React.createElement(
                    "div",
                    {id: "wrapBtn"},
                    React.createElement("p", {id: "report"}, " "),
                    React.createElement(
                        "button",
                        {id: "sumBtn", onClick: sum},
                        "Plus",
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        {id: "play", onClick: start},
                        "Stop",
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        {id: "resetBtn", onClick: reset},
                        "Reset",
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        {id: "minusBtn", onClick: dec},
                        "Minus",
                    ),
                    React.createElement("br", null),
                ),
            );
            ReactDOM.render(_element, document.querySelector("#root"));
        } else {
            const _element2 = React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    {id: "timerWrapper"},
                    " ",
                    React.createElement("span", {id: "count"}, showTime()),
                ),
                React.createElement(
                    "div",
                    {id: "wrapBtn"},
                    React.createElement("p", {id: "report"}, info),
                    React.createElement(
                        "button",
                        {id: "sumBtnDisable", disable: true},
                        "Plus",
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        {id: "play", onClick: start},
                        "Stop",
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        {id: "resetBtn", onClick: reset},
                        "Reset",
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        {id: "minusBtnDisable"},
                        "Minus",
                    ),
                    React.createElement("br", null),
                ),
            );
            ReactDOM.render(_element2, document.querySelector("#root"));
        }
    }
}
