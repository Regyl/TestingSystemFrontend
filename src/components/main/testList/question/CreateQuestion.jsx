import {Component} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import CustomAppBar from "../../CustomAppBar";
import {API} from "../../../../api/API";
import {withRouter} from "react-router-dom";
import BackButton from "../../../BackButton";


class CreateQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testId: this.props.location.state.item.id,
            text: null,
            additionalInfo:null
        }
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleInfoChange = this.handleInfoChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeText(e) {
        this.setState({text: e.target.value});
    }

    handleInfoChange(e) {
        this.setState({additionalInfo: e.target.value});
    }

    handleClick() {
        API.postQuestion(JSON.stringify(this.state)).then((res) => {
            if(res.status === 201) {
                this.props.history.goBack();
            } else {
                console.log(res.status);
            }
        })
    }

    render() {
        return (
            <Grid>
                <CustomAppBar />
                <Grid container spacing={1} direction={"column"} alignContent={"center"}>
                    <Grid item>
                        <TextField label={"Текст"} onChange={this.handleChangeText} />
                    </Grid>
                    <Grid item>
                        <TextField label={"Доп. информация"} onChange={this.handleInfoChange} />
                    </Grid>
                    <Grid item>
                        <Button onClick={this.handleClick} variant={"outlined"}>Сохранить</Button>
                    </Grid>
                    <Grid item>
                        <BackButton />
                    </Grid>
                </Grid>
            </Grid>
        );
    }


}

export default withRouter(CreateQuestion);