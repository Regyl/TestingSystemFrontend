import {Component} from "react";
import {Button, Checkbox, Grid, TextField} from "@material-ui/core";
import CustomAppBar from "../../../CustomAppBar";
import {API} from "../../../../../api/API";


class CreateAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            isCorrect: false,
            questionId: this.props.location.state.item.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCorrectnessChange = this.handleCorrectnessChange.bind(this);
    }

    handleSubmit() {
        API.postAnswer(JSON.stringify(this.state)).then((res) => {
            if(res.status === 201) {
                this.props.history.goBack();
            } else {
                console.log(res.status);
            }
        })

    }

    handleCorrectnessChange(e) {
        this.setState({isCorrect: e.target.checked});
    }

    handleTextChange(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <Grid container>
                <CustomAppBar />
                <Grid container direction={"column"} alignContent={"center"} alignItems={"center"}>
                    <Grid item>
                        <TextField label={"Текст"} onChange={this.handleTextChange} />
                    </Grid>
                    <Grid item>
                        <Checkbox onChange={this.handleCorrectnessChange}>Верный</Checkbox>
                    </Grid>
                    <Grid item>
                        <Button variant={"outlined"} onClick={this.handleSubmit}>Сохранить</Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default CreateAnswer;