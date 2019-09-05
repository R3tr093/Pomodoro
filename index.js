var m = 30;
var s = 0;
var info = "Timer is stopped";
var Timer = -1;

function sum() {
    if (Timer < 0) {
        s = Number(s);
        m = Number(m);
        m++;

        if (m < 10) {
            m = "0" + String(m);
        } else {
            m = String(m);
        }

        if (s < 10) {
            s = "0" + String(s);
        } else {
            s = String(s);
        }
    }
    document.querySelector("#count").textContent = m + " : " + s;
}

function dec() {
    s = Number(s);
    m = Number(m);

    if (Timer < 0) {
        if (m > 0) {
            m--;
        }

        if (m < 10) {
            m = "0" + String(m);
        } else {
            m = String(m);
        }

        if (s < 10) {
            s = "0" + String(s);
        } else {
            s = String(s);
        }
    }

    document.querySelector("#count").textContent = m + " : " + s;
}

function base() {
    s = 0;
    m = 30;

    var audio = new Audio("hello.wav");
    audio.play();

    var element = React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { id: "timerWrapper" },
            React.createElement(
                "span",
                { id: "count" },
                " ",
                m,
                ": 0",
                s
            )
        ),
        React.createElement(
            "div",
            { id: "wrapBtn" },
            React.createElement(
                "button",
                {
                    className: "slideInLeft animated",
                    id: "sumBtn",
                    onClick: sum },
                "Plus"
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                {
                    className: "slideInLeft animated",
                    id: "play",
                    onClick: start },
                "Play"
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                {
                    className: "slideInLeft animated",
                    id: "resetBtn",
                    onClick: reset },
                "Reset"
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                {
                    className: "slideIif( m <= 0)eft animated",
                    id: "minusBtn",
                    onClick: dec },
                "Minus"
            ),
            React.createElement("br", null)
        )
    );

    ReactDOM.render(element, document.querySelector("#root"));
}

// Init dom at this state

base();

function Timebreak() {
    s = 0;
    m = 5;
    document.querySelector("#cat").style.display = "none";

    var element = React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { id: "timerWrapper" },
            React.createElement(
                "span",
                { id: "count" },
                " ",
                m,
                " : 0",
                s
            )
        ),
        React.createElement(
            "div",
            { id: "wrapBtn" },
            React.createElement(
                "button",
                {
                    className: "slideInLeft animated",
                    id: "sumBtn",
                    onClick: sum },
                "Plus"
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                {
                    className: "slideInLeft animated",
                    id: "play",
                    onClick: start },
                "Play"
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                {
                    className: "slideInLeft animated",
                    id: "resetBtn",
                    onClick: reset },
                "Reset"
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                {
                    className: "slideIif( m <= 0)eft animated",
                    id: "minusBtn",
                    onClick: dec },
                "Minus"
            ),
            React.createElement("br", null)
        )
    );

    ReactDOM.render(element, document.querySelector("#root"));
}

function reset() {
    clearInterval(Timer);
    s = 0;
    m = 30;
    base();
}

function start() {
    if (Timer > 0) {
        clearInterval(Timer);
        Timer = -1;

        info = "Timer is stopped ! ";
        var audio = new Audio("stop.wav");
        audio.play();
        document.querySelector("#bck").src = "2.gif";
        document.querySelector("#cat").style.display = "none";

        var element = React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { id: "timerWrapper" },
                " ",
                React.createElement(
                    "span",
                    { id: "count" },
                    showTime()
                )
            ),
            React.createElement(
                "div",
                { id: "wrapBtn" },
                React.createElement(
                    "p",
                    { id: "report" },
                    info
                ),
                React.createElement(
                    "button",
                    { id: "sumBtnDisable", onClick: sum },
                    "Plus"
                ),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { id: "play", onClick: start },
                    "Play"
                ),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { id: "resetBtn", onClick: reset },
                    "Reset"
                ),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { id: "minusBtnDisable", onClick: dec },
                    "Minus"
                ),
                React.createElement("br", null)
            )
        );
        ReactDOM.render(element, document.querySelector("#root"));
    } else {
        var _audio = new Audio("go.wav");
        _audio.play();

        setTimeout(function () {
            var audio = new Audio("clock.wav");
            audio.play();
        }, 1500);

        info = "Timer is running ! ";
        document.querySelector("#cat").style.display = "block";
        document.querySelector("#bck").src = "1.gif";
        Timer = setInterval(tick, 1000);
    }
}

function showTime() {
    m = Number(m);
    s = Number(s);

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
        clearInterval(Timer);
        audio = new Audio("stop.wav");
        audio.play();
    }

    if (m < 10) {
        m = "0" + String(m);
    } else {
        m = String(m);
    }

    if (s < 10) {
        s = "0" + String(s);
    } else {
        s = String(s);
    }

    return m + " : " + s;
}

// Refresh the dom

function tick() {
    if (s <= 1 && m <= 1) {

        audio = new Audio("stop.wav");
        audio.play();
        document.querySelector("#bck").src = "2.gif";
        clearInterval(Timer);
        document.querySelector("#cat").style.display = "none";

        var element = React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { id: "wrapBtn2" },
                React.createElement(
                    "p",
                    { id: "report2" },
                    " Timer is over !"
                ),
                React.createElement(
                    "button",
                    { id: "restartBtn", onClick: base },
                    "Restart"
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { id: "breakBtn", onClick: Timebreak },
                    "Take a break"
                ),
                React.createElement("br", null)
            )
        );

        ReactDOM.render(element, document.querySelector("#root"));
    }

    if (m > 1 || s > 1) {
        info = "Timer is running ! ";

        if (Timer > 0) {
            var _element = React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { id: "timerWrapper" },
                    " ",
                    React.createElement(
                        "span",
                        { id: "count" },
                        showTime()
                    )
                ),
                React.createElement(
                    "div",
                    { id: "wrapBtn" },
                    React.createElement(
                        "p",
                        { id: "report" },
                        info
                    ),
                    React.createElement(
                        "button",
                        { id: "sumBtn", onClick: sum },
                        "Plus"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { id: "play", onClick: start },
                        "Stop"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { id: "resetBtn", onClick: reset },
                        "Reset"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { id: "minusBtn", onClick: dec },
                        "Minus"
                    ),
                    React.createElement("br", null)
                )
            );
            ReactDOM.render(_element, document.querySelector("#root"));
        } else {
            var _element2 = React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { id: "timerWrapper" },
                    " ",
                    React.createElement(
                        "span",
                        { id: "count" },
                        showTime()
                    )
                ),
                React.createElement(
                    "div",
                    { id: "wrapBtn" },
                    React.createElement(
                        "p",
                        { id: "report" },
                        info
                    ),
                    React.createElement(
                        "button",
                        { id: "sumBtn", onClick: sum },
                        "Plus"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { id: "play", onClick: start },
                        "Play"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { id: "resetBtn", onClick: reset },
                        "Reset"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { id: "minusBtn", onClick: dec },
                        "Minus"
                    ),
                    React.createElement("br", null)
                )
            );
            ReactDOM.render(_element2, document.querySelector("#root"));
        }
    }
}