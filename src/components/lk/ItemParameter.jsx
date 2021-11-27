import {Component} from "react";
import {Grid, Typography} from "@material-ui/core";


class ItemParameter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid item>
                <Grid container direction={"row"}>
                    <Grid item>
                        <Typography variant={"body2"} style={{color: '#A3A3A3'}}>
                            {this.props.name}
                        </Typography>
                    </Grid>
                    <Grid item style={{marginLeft: 'auto'}}>
                        <Typography variant={"body2"}>
                            {this.props.value}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}

export default ItemParameter;