import {Component} from "react";
import {withRouter} from "react-router-dom";
import {Box, Button, Grid, TextField} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import BackButton from "../../backButton";
import {API} from "../../../api/API";


class CreateSubject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'null'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        let subject = {
            name: this.state.name
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