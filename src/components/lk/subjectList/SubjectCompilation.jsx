import {Component} from "react";
import SkeletonLoading from "../../SkeletonLoading";
import {API} from "../../../api/API";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box,
    Button,
    ButtonBase, ButtonGroup,
    Card,
    CardActionArea,
    CardActions,
    CardHeader,
    Grid, IconButton,
    Typography
} from "@material-ui/core";
import {AddBox, AddCircleOutline, BlurOn, BorderInner, ExpandMore} from "@material-ui/icons";
import {withRouter} from "react-router-dom";
import HistoryPaths from "../../../enums/HistoryPaths";
import CreationButton from "../CreationButton";
import ItemId from "../itemId";
import ItemDeletionButton from "./ItemDeletionButton";
import ItemCardHeader from "../ItemCardHeader";

const styles = {
    gridItem: {
        width: '25%',
        height: '20%'
    }
}


class SubjectCompilation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        API.getAllSubjects().then((res) => {
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
            if(this.state.error) {
                return <Box>Ошибка</Box>
            } else if (!this.state.isLoaded) {
                return <SkeletonLoading />;
            } else {
                return this.getSubjectList(this.state.items);
            }
    }

    getSubjectList(items) {
        return (
            <Grid container
                  style={{width: '100%'}}
                  spacing={2}
            >
                <Grid item style={styles.gridItem}>
                    <CreationButton path={HistoryPaths.SubjectNew} />
                </Grid>
                {items.map(item => (
                    <Grid item style={styles.gridItem}>
                        <Card>
                            <ItemCardHeader name={item.name} />
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />} />
                                <AccordionDetails>
                                    <Grid container direction={"column"} spacing={1}>
                                        <ItemId item={item} />
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

export default withRouter(SubjectCompilation);