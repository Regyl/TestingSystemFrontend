import {Component} from "react";
import {Button, Card, CardHeader, Checkbox, FormControlLabel, Grid, Typography} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import {API} from "../../../api/API";
import {withRouter} from "react-router-dom";


class ItemTestPassing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.location.state.item,
            error: null,
            isLoaded: false,
            items: [],
            answers: []
        }
    }

    componentDidMount() {
        API.getTestForStudents(this.state.test.id).then((res) => {
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

    handleCheckboxChange = (e) => {
        let newArray;
        if(e.target.checked) {
            newArray = [...this.state.answers, e.target.id];
        } else {
            newArray = [...this.state.answers];
            newArray = newArray.splice(newArray.indexOf(e.target.id), 1);
        }
        this.setState({
            answers: newArray
        });
    }

    handleSubmit = () => {
        let body = {
            testId: this.state.test.id,
            answers: this.state.answers
        }
        API.postStudentResults(JSON.stringify(body)).then((res) => {
            if(res.status === 201) {
                this.props.history.goBack();
            }
        })
    }

    render() {
        return (
            <Grid container>
                <CustomAppBar />
                <Grid item>
                    <Grid container direction={"column"} alignItems={"center"} alignContent={"center"} style={{position: 'relative', left: '1%', top: '10%'}}>
                        {this.state.items.map(item => (
                            <Grid item>
                                <Card>
                                    <Typography variant={"h6"}>{item.text}</Typography>
                                    <Grid container>
                                        {item.answers.map(answer => (
                                            <FormControlLabel control={<Checkbox onChange={this.handleCheckboxChange} id={answer.id}/>} label={answer.text} />
                                        ))}
                                    </Grid>
                                </Card>
                            </Grid>
                        ))}
                        <Grid item>
                            <Button variant={"outlined"} onClick={this.handleSubmit}>Сохранить</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

export default withRouter(ItemTestPassing);