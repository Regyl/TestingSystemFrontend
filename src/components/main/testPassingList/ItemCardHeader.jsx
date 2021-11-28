import {Component} from "react";
import {
    Button,
    CardActionArea,
    CardHeader,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from "@material-ui/core";
import {BlurOn} from "@material-ui/icons";
import {withRouter} from "react-router-dom";
import HistoryPaths from "../../../enums/HistoryPaths";


class ItemCardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false
        }
    }

    handleClose = () => {
        this.setState({isDialogOpen: false})
    }

    handleAgree = () => {
        this.props.history.push({pathname: HistoryPaths.TestPassing, state: {item: this.props.item}});
    }

    handleOpenDialog = () => {
        this.setState({isDialogOpen: true})
    }

    render() {
        return (
            <div>
                <CardActionArea onClick={this.handleOpenDialog}>
                    <CardHeader
                        avatar={<BlurOn />}
                        title={
                            <Typography variant={"subtitle1"}>
                                {this.props.item.name}
                            </Typography>}
                    />
                </CardActionArea>
                <Dialog
                    open={this.state.isDialogOpen}
                    onClose={this.handleClose}>
                    <DialogTitle>Вы готовы начать тест?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Это займет не менее тридцати минут. Советуем сходить за чаем и печеньками. Удачи!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>Disagree</Button>
                        <Button onClick={this.handleAgree} autoFocus>Agree</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}

export default withRouter(ItemCardHeader);