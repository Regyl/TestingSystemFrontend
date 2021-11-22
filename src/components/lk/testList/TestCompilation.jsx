import {Component} from "react";
import SkeletonLoading from "../../SkeletonLoading";


class TestCompilation extends Component {
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

export default TestCompilation;