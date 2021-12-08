import {Accordion, AccordionDetails, AccordionSummary, Card, Grid} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import {API} from "../../../api/API";
import CreationButton from "../CreationButton";
import HistoryPaths from "../../../enums/HistoryPaths";
import ItemCardHeader from "./ItemCardHeader";
import {ExpandMore} from "@material-ui/icons";
import ItemId from "../itemId";
import ItemParameter from "../ItemParameter";
import ItemDeletionButton from "./ItemDeletionButton";
import {Component} from "react";

const styles = {
    gridItem: {
        width: '25%',
        height: '20%'
    }
}

class TestCompilation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            subject: this.props.location.state.item
        };
    }

    componentDidMount() {
        API.getTestsBySubject(this.state.subject.id).then((res) => {
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
            <Grid container spacing={2}>
                <CustomAppBar />
                <Grid item style={styles.gridItem}>
                    <CreationButton path={HistoryPaths.TestCreate} item={this.state.subject} />
                </Grid>
                {this.state.items.map(item => (
                    <Grid item style={styles.gridItem}>
                        <Card>
                            <ItemCardHeader item={item} path={HistoryPaths.TestEdit} />
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />} />
                                <AccordionDetails>
                                    <Grid container direction={"column"} spacing={1}>
                                        <ItemId item={item} />
                                        <ItemParameter name={"Доступен с:"} value={item.startsAt} />
                                        <ItemParameter name={"Доступен до:"} value={item.endsAt} />
                                        <ItemParameter name={"Курс:"} value={item.term} />
                                        <ItemDeletionButton item={item} />
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    }


}

export default TestCompilation;