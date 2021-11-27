import {Component} from "react";
import SkeletonLoading from "../../SkeletonLoading";


class TestPassing extends Component {
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

export default TestPassing;