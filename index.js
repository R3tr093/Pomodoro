var m = 9;
var s = 0;

var clock = null;

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
    m--;

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
    var element = React.createElement(
        "div",
        null,
        React.createElement(
            "span",
            { id: "count" },
            " ",
            m,
            " : ",
            s,
            " "
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
                { onClick: start },
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
                { onClick: start },
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