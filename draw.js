import {realpathSync} from "fs";

function fromZero() {
    return "00:00";
}

const board = React.createElement(
    "div",
    null,
    React.createElement("span", {id: "count"}, fromZero()),
    React.createElement(
        "div",
        {id: "wrapBtn"},
        React.createElement("button", null, "Plus"),
        React.createElement("br", null),
        React.createElement("button", null, "Play"),
        React.createElement("br", null),
        React.createElement("button", null, "Stop"),
        React.createElement("br", null),
        React.createElement("button", null, "Minus"),
        React.createElement("br", null),
    ),
);

ReactDOM.render(board, document.querySelector("#root"));
