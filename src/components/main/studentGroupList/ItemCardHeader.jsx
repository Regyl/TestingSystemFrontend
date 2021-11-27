import {Component} from "react";
import {CardActionArea, CardHeader, Typography} from "@material-ui/core";
import {BlurOn} from "@material-ui/icons";
import {withRouter} from "react-router-dom";
import HistoryPaths from "../../../enums/HistoryPaths";


class ItemCardHeader extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push({pathname: HistoryPaths.StudentGroupEdit, state: {item: this.props.item}});
    }

    render() {
        return (
            <CardActionArea onClick={this.handleClick}>
                <CardHeader
                    avatar={<BlurOn />}
                    title={<Typography variant={"subtitle1"}>
                        {this.props.item.shortName + '-' + this.props.item.number}
                    </Typography>}
                />
            </CardActionArea>
        );
    }

}

export default withRouter(ItemCardHeader);