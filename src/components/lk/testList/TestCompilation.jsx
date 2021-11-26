import {Component} from "react";
import SkeletonLoading from "../../SkeletonLoading";
import {API} from "../../../api/API";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card, FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select
} from "@material-ui/core";
import CreationButton from "../CreationButton";
import HistoryPaths from "../../../enums/HistoryPaths";
import ItemCardHeader from "./ItemCardHeader";
import {ExpandMore} from "@material-ui/icons";
import ItemId from "../itemId";
import ItemDeletionButton from "../subjectList/ItemDeletionButton";
import {withRouter} from "react-router-dom";
import ItemFaculty from "../subjectList/ItemFaculty";

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
            faculty: null,
            faculties: []
        };
        this.handleFacultyChange = this.handleFacultyChange.bind(this);
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

        API.getAllFaculties().then((res) => {
            this.setState({
                faculties: res.data
            })
        })
    }

    render() {
        if(this.state.error) {
            return <Box>Ошибка</Box>
        } else if (!this.state.isLoaded) {
            return <SkeletonLoading />;
        } else {
            return(
                <Grid container style={{width: '100%'}}>
                    <Grid item style={{width: '90%'}}>
                        {this.getSubjectList(this.state.items)}
                    </Grid>
                    <Grid item style={{marginLeft: 'auto', width: '10%'}}>
                        <FormControl required style={{width: '100%'}}>
                            <InputLabel id={"label"}>Кафедра</InputLabel>
                            <Select
                                labelId={"label"}
                                label={"Кафедра *"}
                                value={this.state.faculty}
                                onChange={this.handleFacultyChange}
                            >
                                {this.state.faculties.map((fac) => (
                                    <MenuItem value={fac.name}>{fac.value}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            );
        }
    }

    handleFacultyChange(e) {
        this.setState({faculty: e.target.value});
        API.getSubjectsByFaculty(this.state.faculty).then((res) => {
            this.setState({items: res.data})
        })
    }

    getSubjectList(items) {
        return (
            <Grid container
                  spacing={2}
            >
                {items.map(item => (
                    <Grid item style={styles.gridItem}>
                        <Card>
                            <ItemCardHeader item={item} />
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />} />
                                <AccordionDetails>
                                    <Grid container direction={"column"} spacing={1}>
                                        <ItemId item={item} />
                                        <ItemFaculty item={item} />
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

export default withRouter(TestCompilation);