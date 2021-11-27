import {Component} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Grid, Typography} from "@material-ui/core";
import CustomAppBar from "../CustomAppBar";
import BackButton from "../../BackButton";
import {ExpandMore} from "@material-ui/icons";


class EditTest extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container>
                <CustomAppBar />
                <Typography variant={"subtitle1"}>Вопросы и ответы:</Typography>
                <Grid item>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore />} >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                General settings
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        );
    }

}

export default EditTest;