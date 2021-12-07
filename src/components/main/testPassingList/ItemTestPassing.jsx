import {Component} from "react";
import {Button, Card, CardHeader, Checkbox, FormControlLabel, Grid, Typography} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import {API} from "../../../api/API";


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
            newArray = [...this.state.answers, e.target.answerId];
        } else {
            newArray = [...this.state.answers];
            newArray = newArray.splice(newArray.indexOf(e.target.answerId), 1);
        }
        this.setState({
            answers: newArray
        });
    }

    handleSubmit = (e) => {
        console.log(this.state.answers.length);
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
                                            <FormControlLabel control={<Checkbox onChange={this.handleCheckboxChange} answerId={answer.id}/>} label={answer.text} />
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

export default ItemTestPassing;