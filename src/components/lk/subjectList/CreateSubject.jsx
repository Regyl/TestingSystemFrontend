import {Component} from "react";
import {withRouter} from "react-router-dom";
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import BackButton from "../../BackButton";
import {API} from "../../../api/API";


class CreateSubject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            faculty: '',
            faculties: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFacultyChange = this.handleFacultyChange.bind(this);
    }

    componentDidMount() {
        API.getAllFaculties().then((res) => {
            this.setState({
                faculties: res.data
            })
        })
    }

    handleClick() {
        let subject = {
            name: this.state.name,
            faculty: this.state.faculty
        }
        API.postSubject(JSON.stringify(subject)).then((response) => {
            if(response.status === 201) {
                this.props.history.goBack();
            } else {
                console.log(response.status);
            }
        })
    }

    handleChange(e) {
        this.setState({name: e.target.value})
    }

    handleFacultyChange(e) {
        this.setState({faculty: e.target.value})
    }

    render() {
        return (
            <Grid container style={{width: '100%'}}>
                <CustomAppBar />
                <Grid item>
                    <Grid container
                          direction={"column"}
                          style={{position: 'fixed', left: '1%', top: '10%'}}
                          alignContent={"center"}
                          spacing={1}
                    >
                        <Grid item>
                            <TextField type={"text"} label={"Название"} onChange={this.handleChange}/>
                        </Grid>
                        <Grid item>
                            <FormControl required style={{width: '100%'}}>
                                <InputLabel id={"label"}>Кафедра</InputLabel>
                                <Select
                                    labelId={"label"}
                                    label={"Кафедра *"}
                                    onChange={this.handleFacultyChange}
                                >
                                    {this.state.faculties.map((fac) => (
                                        <MenuItem value={fac.name}>{fac.value}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Button onClick={this.handleClick} variant={"outlined"}>Сохранить</Button>
                        </Grid>
                        <Grid item>
                            <BackButton />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}

export default withRouter(CreateSubject);