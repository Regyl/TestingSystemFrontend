import {Component} from "react";
import {Box, Grid} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import {API} from "../../../api/API";


class ItemTestPassing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.location.state.item,
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        API.getQuestionsByTest(this.state.id).then((res) => {
            this.setState({
                items: res.data,
                isLoaded: true
            })
        }).catch((error) =>
            this.setState({
                isLoaded: true,
                error
            })
        )
    }

    render() {
        return (
            <Grid container>
                <CustomAppBar />
                <Grid item>

                </Grid>
            </Grid>
        )
    }

}

export default ItemTestPassing;