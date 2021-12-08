import {Button} from "@material-ui/core";
import {Component} from "react";
import {withRouter} from "react-router-dom";


class BackButton extends Component {
    render() {
        return (
            <Button onClick={this.onBackClick} variant={"outlined"}>
                Back
            </Button>
        );
    }

    onBackClick = () => {
        this.props.history.goBack();
    }
}

export default withRouter(BackButton);