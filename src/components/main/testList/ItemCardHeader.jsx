import {Component} from "react";
import {CardActionArea, CardHeader, Typography} from "@material-ui/core";
import {BlurOn} from "@material-ui/icons";
import {withRouter} from "react-router-dom";


class ItemCardHeader extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.history.push({pathname: this.props.path, state: {item: this.props.item}});
    }

    render() {
        return (
            <CardActionArea onClick={this.handleClick}>
                <CardHeader
                    avatar={<BlurOn />}
                    title={<Typography variant={"subtitle1"}>
                        {this.props.item.name}
                    </Typography>}
                />
            </CardActionArea>
        );
    }

}

export default withRouter(ItemCardHeader);