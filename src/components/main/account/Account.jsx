import {Component} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import {API} from "../../../api/API";
import {withRouter} from "react-router-dom";
import HistoryPaths from "../../../enums/HistoryPaths";
import Profession from "../../../enums/Profession";


class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            patronymic: null,
            birthDate: null,
            admissionYear: new Date().getFullYear()
        }
    }

    handleSaveClick = () => {
        API.postStudent(JSON.stringify(this.state)).then((res) => {
            if(res.status === 201) {
                this.props.history.push({pathname: HistoryPaths.MainAccountPage, state: {profession: Profession.Student}});
            } else {
                console.log(res.status);
            }
        })
    }

    render() {
        return (
            <Grid container spacing={2}>
                <CustomAppBar />
                <Grid item>
                    <Grid container spacing={1} direction={"column"}>
                        <Grid item>
                            <TextField label={"Фамилия"} onChange={this.handleSecondNameChange} variant={"outlined"} required/>
                        </Grid>
                        <Grid item>
                            <TextField label={"Имя"} onChange={this.handleChangeName} variant={"outlined"} required/>
                        </Grid>
                        <Grid item>
                            <TextField label={"Отчество"} onChange={this.handlePatronymicChange} variant={"outlined"} />
                        </Grid>
                        <Grid item>
                            <TextField label={"Дата рождения"} onChange={this.handleBirthDateChange} type={"date"} variant={"outlined"} />
                        </Grid>
                        <Grid item>
                            <Button onClick={this.handleSaveClick} variant={"outlined"}>
                                Сохранить
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    handleSecondNameChange = (e) => {
        this.setState({lastName: e.target.value})
    }

    handlePatronymicChange = (e) => {
        this.setState({patronymic: e.target.value})
    }

    handleBirthDateChange = (e) => {
        this.setState({birthDate: e.target.value})
    }

    handleChangeName = (e) => {
        this.setState({firstName: e.target.value})
    }
}

export default withRouter(Account);