import {Component} from "react";
import {Accordion, AccordionDetails, AccordionSummary, CardActionArea, Grid, Typography} from "@material-ui/core";
import CustomAppBar from "../../CustomAppBar";
import {API} from "../../../../api/API";
import {ExpandMore} from "@material-ui/icons";
import ItemParameter from "../../ItemParameter";
import HistoryPaths from "../../../../enums/HistoryPaths";
import ItemDeletionButton from "./answer/ItemDeletionButton";

const styles = {
    gridItem: {
        width: '30%'
    }
}

class EditQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            question: this.props.location.state.item
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        API.getAnswersByQuestion(this.state.question.id).then((res) => {
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

    handleClick() {
        this.props.history.push({pathname: HistoryPaths.AnswerCreate, state: {item: this.state.question}})
    }

    render() {
        return (
            <Grid container>
                <CustomAppBar />
                <Grid container direction={"column"} spacing={2} alignContent={"center"} alignItems={"center"}>
                    <Grid item>
                        <Typography variant={"h6"}>Вопрос: {this.state.question.text}</Typography>
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
                    {this.state.items.map(answer => (
                        <Grid item style={styles.gridItem}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />} >
                                    <Typography variant={"subtitle1"}>{answer.text}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container direction={"column"}>
                                        <ItemParameter name={"Верный"} value={answer.isCorrect.toString()} />
                                        <ItemDeletionButton item={answer} />
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        )
    }
}


export default EditQuestion;