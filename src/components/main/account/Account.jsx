import {Component} from "react";
import {Grid, TextField} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";


class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
        }
    }

    handleChangeName = (e) => {
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <Grid container>
                <CustomAppBar />
                <Grid container spacing={1} direction={"column"}>
                    <Grid item>
                        <TextField label={"Имя"}  onChange={this.handleChangeName} />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Account;