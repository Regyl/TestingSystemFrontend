import {Component} from "react";
import {Typography} from "@material-ui/core";


class GroupNameHeader extends Component {

    render() {
        return (
            <Typography variant={"subtitle1"}>
                {'Группа: ' + this.props.item.shortName + '-' + this.props.item.number}
            </Typography>
        );
    }
}

export default GroupNameHeader;