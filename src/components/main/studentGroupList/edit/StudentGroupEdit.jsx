import {Component} from "react";
import {Box, Button, ButtonGroup, Grid, Typography} from "@material-ui/core";
import CustomAppBar from "../../CustomAppBar";
import BackButton from "../../../BackButton";
import {DataGrid} from "@material-ui/data-grid";
import {API} from "../../../../api/API";
import SkeletonLoading from "../../../SkeletonLoading";
import GlobalVariables from "../../../../enums/GlobalVariables";
import GroupNameHeader from "./GroupNameHeader";
import {withRouter} from "react-router-dom";

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'lastName', headerName: 'Фамилия', width: 150 },
    { field: 'firstName', headerName: 'Имя', width: 150 },
    { field: 'patronymic', headerName: 'Отчество', width: 150 },
    { field: 'birthDate', headerName: 'Дата рождения', width: 190 },
    { field: 'group.shortName', headerName: 'Группа', width: 190 },
]

class StudentGroupEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.location.state.item,
            error: null,
            isLoaded: false,
            items: [],
            selectedStudents: []
        }
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
                    <GroupNameHeader item={this.state.item} />
                </Grid>
                <Grid item style={{width: '100%', height: 300}}>
                    {this.getStudentList()}
                </Grid>
                <Grid item>
                    <ButtonGroup>
                        <BackButton />
                        <Button variant={"outlined"} onClick={this.onSaveClick} >Сохранить</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        );
    }

    onSaveClick = () => {
        let body = {
            groupId: this.state.item.id,
            studentIds: this.state.selectedStudents
        }
        API.updateStudentsGroup(JSON.stringify(body)).then((res) => {
            if(res.data.status === 200) {
                this.props.history.goBack();
            }
        })
    }

    selectRows = (ids) => {
        this.setState({selectedStudents: ids})
        console.log(this.state.selectedStudents);
        /*const selectedRowData = this.state.items.filter((row) =>
            selectedIDs.has(row.id.toString())
        );
        console.log(selectedRowData);*/
    }

    getStudentList = () => {
        if(this.state.error) {
            return <Box>{GlobalVariables.error}</Box>
        } else if (!this.state.isLoaded) {
            return <SkeletonLoading />;
        } else {
            return (
                <DataGrid
                    columns={columns}
                    rows={this.state.items}
                    checkboxSelection
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    onSelectionModelChange={this.selectRows}
                />
            );
        }
    }
}

export default withRouter(StudentGroupEdit);