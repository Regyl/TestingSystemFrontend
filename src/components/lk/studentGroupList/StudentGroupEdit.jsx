import {Component} from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import BackButton from "../../backButton";
import {DataGrid} from "@material-ui/data-grid";
import {API} from "../../../api/API";
import SkeletonLoading from "../../SkeletonLoading";

const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 }
]

class StudentGroupEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.location.state.item,
            error: null,
            isLoaded: false,
            items: []
        }
        this.getStudentList = this.getStudentList.bind(this);
    }

    componentDidMount() {
        API.getAllStudents().then((res) => {
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
            <Grid container
                  direction={"column"}
                  alignItems={"center"}
                  spacing={3}
                  style={{width: '100%'}}
            >
                <CustomAppBar />
                <Grid item>
                    {this.getGroupName(this.state.item)}
                </Grid>
                <Grid item style={{width: '100%', height: 300}}>
                    {this.getStudentList()}
                </Grid>
                <Grid item>
                    <BackButton />
                </Grid>
            </Grid>
        );
    }

    getGroupName(item) {
        return (
            <Typography variant={"subtitle1"}>
                {'Группа: ' + item.shortName + '-' + item.number}
            </Typography>
        );
    }

    getStudentList() {
        if(this.state.error) {
            return <Box>Ошибка</Box>
        } else if (!this.state.isLoaded) {
            return <SkeletonLoading />;
        } else {
            return (
                <DataGrid columns={columns} rows={this.state.items} checkboxSelection pageSize={5} rowsPerPageOptions={[5]}/>
            );
        }
    }
}

export default StudentGroupEdit;