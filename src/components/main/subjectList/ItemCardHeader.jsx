import {Component} from "react";
import {CardActionArea, CardHeader, Typography} from "@material-ui/core";
import {BlurOn} from "@material-ui/icons";


class ItemCardHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardActionArea>
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

export default ItemCardHeader;