import {Component} from "react";
import SkeletonLoading from "../../SkeletonLoading";


class StudentGroupCompilation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return(
            <SkeletonLoading />
        );
    }

}

export default StudentGroupCompilation;