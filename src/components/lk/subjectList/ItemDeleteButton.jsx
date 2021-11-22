import {Component} from "react";
import {Button, Grid} from "@material-ui/core";
import {API} from "../../../api/API";


class ItemDeleteButton extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick() {
        API.deleteSubject(this.props.item.id);
        window.location.reload();
    }


    render() {
        return (
            <Grid item style={{marginLeft: 'auto'}}>
                <Button variant={"outlined"} id={this.props.item.id}  onClick={this.handleDeleteClick}>
                    Удалить
                </Button>
            </Grid>
        );
    }
}

export default ItemDeleteButton;