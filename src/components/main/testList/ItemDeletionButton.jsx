import {Component} from "react";
import {API} from "../../../api/API";
import {Button, Grid} from "@material-ui/core";


class ItemDeletionButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        API.deleteTest(this.props.item.id);
        window.location.reload();
    }

    render() {
        return (
            <Grid item style={{marginLeft: 'auto'}}>
                <Button variant={"outlined"} onClick={this.handleClick} >
                    Удалить
                </Button>
            </Grid>
        );
    }

}

export default ItemDeletionButton;