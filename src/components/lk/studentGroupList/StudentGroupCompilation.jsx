import {Component} from "react";
import SkeletonLoading from "../../SkeletonLoading";
import {API} from "../../../api/API";
import {Accordion, AccordionDetails, AccordionSummary, Box, Card, Grid} from "@material-ui/core";
import CreationButton from "../CreationButton";
import HistoryPaths from "../../../enums/HistoryPaths";
import {withRouter} from "react-router-dom";
import ItemCardHeader from "../ItemCardHeader";
import {ExpandMore} from "@material-ui/icons";
import ItemId from "../itemId";
import ItemDeletionButton from "./ItemDeletionButton";

const styles = {
    gridItem: {
        width: '25%',
        height: '20%'
    }
}

class StudentGroupCompilation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        API.getAllStudentGroups().then((res) => {
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
            return this.getStudentGroupList(this.state.items);
        }
    }

    getStudentGroupList(items) {
        return (
            <Grid container
                  spacing={2}
                  style={{width: '100%'}}>
                <Grid item style={styles.gridItem}>
                    <CreationButton path={HistoryPaths.StudentGroupNew} />
                </Grid>
                {items.map(item => (
                    <Grid item style={styles.gridItem}>
                        <Card>
                            <ItemCardHeader name={item.shortName + '-' + item.number} />
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

export default withRouter(StudentGroupCompilation);