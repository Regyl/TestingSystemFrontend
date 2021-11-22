import {Component} from "react";
import {Box, Grid} from "@material-ui/core";
import BackButton from "../../backButton";


class CreateGroup extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Grid container>
                <BackButton />
            </Grid>
        )
    }
}

export default CreateGroup;