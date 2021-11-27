import {Component} from "react";
import SkeletonLoading from "../../SkeletonLoading";

class StudentResultList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <SkeletonLoading />
        );
    }
}

export default StudentResultList;