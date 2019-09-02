import {realpathSync} from "fs";

function fromZero() {
    return "00:00";
}

const board = (
    <div>
        <span id={"count"}>{fromZero()}</span>

        <div id={"wrapBtn"}>
            <button>Plus</button>
            <br />

            <button>Play</button>
            <br />

            <button>Stop</button>
            <br />

            <button>Minus</button>
            <br />
        </div>
    </div>
);

ReactDOM.render(board, document.querySelector("#root"));
