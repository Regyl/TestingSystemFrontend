import {Component} from "react";
import SkeletonLoading from "../../SkeletonLoading";
import {API} from "../../../api/API";
import {Accordion, AccordionDetails, AccordionSummary, Box, Card, Grid} from "@material-ui/core";
import GlobalVariables from "../../../enums/GlobalVariables";
import ItemCardHeader from "./ItemCardHeader";
import {ExpandMore} from "@material-ui/icons";
import ItemId from "../itemId";
import ItemParameter from "../ItemParameter";

const styles = {
    gridItem: {
        width: '25%',
        height: '20%'
    }
}

class TestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        API.getTests().then((res) => {
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
            return <Box>{GlobalVariables.error}</Box>
        } else if (!this.state.isLoaded) {
            return <SkeletonLoading />;
        } else {
            return (
                <Grid container>
                    {this.state.items.map(item => (
                        <Grid item style={styles.gridItem}>
                            <Card>
                                <ItemCardHeader item={item} />
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />} />
                                    <AccordionDetails>
                                        <Grid container direction={"column"} spacing={1}>
                                            <ItemId item={item} />
                                            <ItemParameter name={"Доступен с:"} value={item.startsAt} />
                                            <ItemParameter name={"Доступен до:"} value={item.endsAt} />
                                            <ItemParameter name={"Курс:"} value={item.term} />
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

}

export default TestList;