import {Component} from "react";
import {API} from "../../../api/API";
import {Button, Grid} from "@material-ui/core";


class ItemDeletionButton extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick() {
        API.deleteStudentGroup(this.props.item.id);
        window.location.reload();
    }


    render() {
        return (
            <Grid item style={{marginLeft: 'auto'}}>
                <Button variant={"outlined"} id={this.props.item.id} onClick={this.handleDeleteClick} color={"error"}>
                    Удалить
                </Button>
            </Grid>
        );
    }
}

export default ItemDeletionButton;