var m = 25;
var s = 0;

var clock = false;
var playBtn = null;

function sum() {
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

    document.querySelector("#count").textContent = m + " : " + s;
}

function dec() {
    s = Number(s);
    m = Number(m);

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

    document.querySelector("#count").textContent = m + " : " + s;
}

function base() {

    playBtn = document.getElementById('play');

    var element = React.createElement(
        "div",
        null,
        React.createElement(
            "span",
            { id: "count" },
            " ",
            m,
            " : 0",
            s
        ),
        React.createElement(
            "div",
            { id: "wrapBtn" },
            React.createElement(
                "button",
                { onClick: sum },
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
                { onClick: reset },
                "Reset"
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                { onClick: dec },
                "Minus"
            ),
            React.createElement("br", null)
        )
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
        var playBtn = React.createElement(
            "button",
            { id: "play", onClick: start },
            "Stop"
        );
    } else {
        clearInterval(clock);
        clock = false;
        var playBtn = React.createElement(
            "button",
            { id: "play", onClick: start },
            "Play"
        );
    }

    var element = React.createElement(
        "div",
        null,
        React.createElement(
            "span",
            { id: "count" },
            " ",
            m,
            " : ",
            s
        ),
        React.createElement(
            "div",
            { id: "wrapBtn" },
            React.createElement(
                "button",
                { onClick: sum },
                "Plus"
            ),
            React.createElement("br", null),
            playBtn,
            React.createElement("br", null),
            React.createElement(
                "button",
                { onClick: reset },
                "Reset"
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                { onClick: dec },
                "Minus"
            ),
            React.createElement("br", null)
        )
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

function report() {
    alert("Nope");
}

// Refresh the dom

function tick() {

    if (!clock) {

        var element = React.createElement(
            "div",
            null,
            React.createElement(
                "span",
                { id: "count" },
                showTime()
            ),
            React.createElement(
                "div",
                { id: "wrapBtn" },
                React.createElement(
                    "button",
                    { onClick: sum },
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
                    { onClick: reset },
                    "Reset"
                ),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { onClick: dec },
                    "Minus"
                ),
                React.createElement("br", null)
            )
        );
        ReactDOM.render(element, document.querySelector("#root"));
    } else {
        var _element = React.createElement(
            "div",
            null,
            React.createElement(
                "span",
                { id: "count" },
                showTime()
            ),
            React.createElement(
                "div",
                { id: "wrapBtn" },
                React.createElement(
                    "button",
                    { onClick: sum },
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
                    { onClick: reset },
                    "Reset"
                ),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { onClick: dec },
                    "Minus"
                ),
                React.createElement("br", null)
            )
        );
        ReactDOM.render(_element, document.querySelector("#root"));
    }
}