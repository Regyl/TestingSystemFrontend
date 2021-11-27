import {Component} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import BackButton from "../../BackButton";
import {API} from "../../../api/API";
import {withRouter} from "react-router-dom";

class CreateTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectId: this.props.location.state.item.id,
            term: null,
            startsAt: null,
            endsAt: null,
            name: null
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleSave() {
        API.postTest(JSON.stringify(this.state)).then((res) => {
            if(res.status === 201) {
                this.props.history.goBack();
            } else {
                console.log(res.status);
            }
        })
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleStartDateChange(e) {
        this.setState({startsAt: e.target.value});
    }

    handleEndDateChange(e) {
        this.setState({endsAt: e.target.value});
    }

    handleTermChange(e) {
        this.setState({term: e.target.value});
    }

    render() {
        return (
            <Grid style={{width: '100%'}}>
                <CustomAppBar />
                <Grid container
                      direction={"column"}
                      style={{position: 'fixed', left: '1%', top: '10%'}}
                      alignContent={"center"}
                      spacing={2}>
                    <Grid item>
                        <TextField label={"Название"} onChange={this.handleNameChange}/>
                    </Grid>
                    <Grid item>
                        <TextField label={"Дата начала"} type={"date"} onChange={this.handleStartDateChange} defaultValue={new Date().getDate()} />
                    </Grid>
                    <Grid item>
                        <TextField label={"Дата окончания"} type={"date"} onChange={this.handleEndDateChange} />
                    </Grid>
                    <Grid item>
                        <TextField label={"Курс"} type={"number"} onChange={this.handleTermChange} />
                    </Grid>
                    <Grid item>
                        <Button variant={"outlined"} onClick={this.handleSave}>Сохранить</Button>
                    </Grid>
                    <Grid item>
                        <BackButton />
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}

export default withRouter(CreateTest);