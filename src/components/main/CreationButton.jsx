import {Component} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
    CardActionArea,
    CardHeader,
    Typography
} from "@material-ui/core";
import {BorderInner, ExpandMore} from "@material-ui/icons";
import {withRouter} from "react-router-dom";


class CreationButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push({pathname: this.props.path, state: {item: this.props.item}});
    }

    render() {
        return (
            <Card>
                <CardActionArea onClick={this.handleClick}>
                    <CardHeader
                        avatar={<BorderInner />}
                        title={
                            <Typography variant={"subtitle1"}>
                                Создать
                            </Typography>
                        }
                    />
                </CardActionArea>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />} />
                    <AccordionDetails>
                        I'm empty, try again never
                    </AccordionDetails>
                </Accordion>
            </Card>
        );
    }

}

export default withRouter(CreationButton);