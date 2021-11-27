import {Component} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Grid, Typography} from "@material-ui/core";
import CustomAppBar from "../../CustomAppBar";
import {API} from "../../../../api/API";
import {ExpandMore} from "@material-ui/icons";
import ItemParameter from "../../ItemParameter";
import ItemButton from "./ItemButton";
import CreationButton from "../../CreationButton";
import HistoryPaths from "../../../../enums/HistoryPaths";
import ItemDeletionButton from "./answer/ItemDeletionButton";


class EditQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            question: this.props.location.state.item
        }
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

    render() {
        return (
            <Grid container>
                <CustomAppBar />
                <Grid container direction={"column"} spacing={2} alignContent={"center"} alignItems={"center"}>
                    <Grid item>
                        <Typography variant={"h6"}>Вопрос: {this.state.question.text}</Typography>
                    </Grid>
                    <Grid item>
                        <CreationButton path={HistoryPaths.AnswerCreate} item={this.state.question} />
                    </Grid>
                    {this.state.items.map(answer => (
                        <Grid item>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />} >
                                    <Typography variant={"subtitle1"}>{answer.text}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container direction={"column"}>
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