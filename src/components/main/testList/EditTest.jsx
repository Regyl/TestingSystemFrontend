import {Component} from "react";
import {Accordion, AccordionDetails, AccordionSummary, CardActionArea, Grid, Typography} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import {ExpandMore} from "@material-ui/icons";
import {API} from "../../../api/API";
import HistoryPaths from "../../../enums/HistoryPaths";
import {withRouter} from "react-router-dom";
import ItemParameter from "../ItemParameter";
import ItemButton from "./question/ItemButton";


const styles = {
    gridItem: {
        width: '30%'
    }
}

class EditTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            test: this.props.location.state.item
        }
    }

    componentDidMount() {
        API.getQuestionsByTest(this.state.test.id).then((res) => {
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

    handleClick = () => {
        this.props.history.push({pathname: HistoryPaths.QuestionCreate, state: {item: this.state.test}});
    }

    render() {
        return (
            <Grid container spacing={2} style={{width: '100%'}}>
                <CustomAppBar />
                <Grid container
                      spacing={2}
                      direction={"column"}
                      alignContent={"center"}
                      alignItems={"center"}>
                    <Grid item>
                        <Typography variant={"h6"}>{this.state.test.name}</Typography>
                    </Grid>
                    <Grid item>
                        Вопросы:
                    </Grid>
                    <Grid item style={styles.gridItem}>
                        <Accordion>
                            <CardActionArea onClick={this.handleClick}>
                            <AccordionSummary>
                                Создать
                            </AccordionSummary>
                            </CardActionArea>
                        </Accordion>
                    </Grid>
                    {this.state.items.map(question => (
                        <Grid item style={styles.gridItem}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />} >
                                    <Typography variant={"subtitle1"}>{question.text}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container direction={"column"} spacing={1}>
                                        <ItemParameter name={"Доп. информация:"} value={question.additionalInfo} />
                                        <ItemButton item={question} />
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        );
    }

}

export default withRouter(EditTest);