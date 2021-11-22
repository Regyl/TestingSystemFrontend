import {Component} from "react";
import {Grid} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";


class StudentGroupEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.location.state.item
        }
    }

    render() {
        return (
            <Grid container>
                <CustomAppBar />
                <Grid item>
                    {this.state.item.shortName}
                </Grid>
            </Grid>
        );
    }

}

export default StudentGroupEdit;