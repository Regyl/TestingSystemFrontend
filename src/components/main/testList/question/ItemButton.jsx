import {Component} from "react";
import {API} from "../../../../api/API";
import {Button, ButtonGroup, Grid} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import HistoryPaths from "../../../../enums/HistoryPaths";


class ItemButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
    }

    handleClick() {
        API.deleteQuestion(this.props.item.id);
        window.location.reload();
    }

    handleUpdateClick() {
        this.props.history.push({pathname: HistoryPaths.QuestionUpdate, state: {item: this.props.item}})
    }

    render() {
        return (
            <Grid item style={{marginLeft: 'auto'}}>
                <ButtonGroup>
                    <Button variant={"outlined"} onClick={this.handleUpdateClick}>
                        Изменить
                    </Button>
                    <Button variant={"outlined"} onClick={this.handleClick}>
                        Удалить
                    </Button>
                </ButtonGroup>
            </Grid>
        );
    }

}

export default withRouter(ItemButton);