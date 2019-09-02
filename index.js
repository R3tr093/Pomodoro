'"use strict"';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
    }

    render() {
        if (this.state.cliked) {
            return "Hello world.";
        }

        return e(
            "h1",
            {onClick: () => this.setState({cliked: true})},
            "Click me.",
        );
    }
}

const domContainer = document.querySelector("#app");
ReactDOM.render(e(LikeButton), domContainer);
