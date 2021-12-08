import {Component} from "react";
import SkeletonLoading from "../../SkeletonLoading";
import {API} from "../../../api/API";
import {Box, Grid} from "@material-ui/core";
import GlobalVariables from "../../../enums/GlobalVariables";
import {DataGrid} from "@material-ui/data-grid";

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'resultScore', headerName: 'Результат', width: 150 },
    { field: 'studentName', headerName: 'ФИО', width: 300,
        valueGetter: (params) => {
        const student = params.row.student;
        return student.lastName + ' ' + student.firstName + ' ' + student.patronymic;
        }
    }
]

class StudentResultList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        API.getAllStudentResults().then((res) => {
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
        if(this.state.error) {
            return <Box>{GlobalVariables.error}</Box>
        } else if (!this.state.isLoaded) {
            return <SkeletonLoading />;
        } else {
            return (
                <Grid container style={{width: '100%', height: 300}}>
                    {this.getStudentList()}
                </Grid>
            );
        }
    }

    getStudentList = () => {
        return (
            <DataGrid
                columns={columns}
                rows={this.state.items}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        );
    }
}

export default StudentResultList;