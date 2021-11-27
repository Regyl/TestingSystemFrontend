import {Component} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import BackButton from "../../BackButton";
import CustomAppBar from "../CustomAppBar";
import {API} from "../../../api/API";


class CreateGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            number: 0
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleNumberChange(e) {
        this.setState({number: e.target.value});
    }

    handleSubmit() {
        let group = {
            shortName: this.state.name,
            number: this.state.number
        }
        API.postStudentGroup(JSON.stringify(group)).then((response) => {
            if(response.status === 201) {
                this.props.history.goBack();
            } else {
                console.log(response.status);
            }
        })
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
                            <TextField type={"text"} label={"Название"} onChange={this.handleNameChange}/>
                        </Grid>
                        <Grid item>
                            <TextField type={"number"} label={"Номер группы"} onChange={this.handleNumberChange} />
                        </Grid>
                        <Grid item>
                            <Button onClick={this.handleSubmit} variant={"outlined"}>Сохранить</Button>
                        </Grid>
                        <Grid item>
                            <BackButton />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default CreateGroup;