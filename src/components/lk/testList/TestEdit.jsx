import {Grid} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import {API} from "../../../api/API";

const {Component} = require("react");


class TestEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        API.getAllSubjects().then((res) => {
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
        );
    }


}

export default TestEdit;