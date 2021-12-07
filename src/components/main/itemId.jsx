import {Component} from "react";
import {Grid, Typography} from "@material-ui/core";


class ItemId extends Component {

    render() {
        return (
            <Grid item>
                <Grid container direction={"row"}>
                    <Grid item>
                        <Typography variant={"body2"} style={{color: '#A3A3A3'}}>
                            id:
                        </Typography>
                    </Grid>
                    <Grid item style={{marginLeft: 'auto'}}>
                        <Typography variant={"body2"}>
                            {this.props.item.id}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default ItemId;