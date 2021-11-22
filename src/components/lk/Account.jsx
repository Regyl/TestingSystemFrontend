import {Box, Grid, Tab, Tabs, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Profession from "../../enums/Profession";
import TabNumber from "./TabNumber";
import SubjectCompilation from "./subjectList/SubjectCompilation";
import CustomAppBar from "./CustomAppBar";
import StudentGroupCompilation from "./studentGroupList/StudentGroupCompilation";
import StudentResultList from "./studentResultList/StudentResultList";
import TestPassing from "./testPassingList/TestPassing";
import TestCompilation from "./testList/TestCompilation";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            profession: this.props.location.state.profession,
            isCompilationTestsTabVisible: false,
            isTestPassingTabVisible: false,
            isCompilationStudentListVisible: false,
            isCompilationSubjectListVisible: false,
            isStudentResultListVisible: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        switch(this.state.profession) {
            case Profession.Student:
                this.setState({isTestPassingTabVisible: true});
                break;
            case Profession.Professor:
                this.setState({isCompilationTestsTabVisible: true});
                break;
            case Profession.Administrator:
                this.setState({
                    isCompilationStudentListVisible: true,
                    isCompilationSubjectListVisible: true,
                    isStudentResultListVisible: true
                });
                break;
            default:
                console.log('error');
                break;
        }
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    };


    render() {
        return (
            <Grid container>
                <CustomAppBar />
                <Grid item style={{width: '100%'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={this.state.value} onChange={this.handleChange}> {/*TODO: switch to react router*/}
                            {this.state.isCompilationStudentListVisible === false ? "" :
                            <Tab label="Составление списка студентов" value={TabNumber.StudentGroup} {...allyProps(TabNumber.StudentGroup)} />}
                            {this.state.isCompilationSubjectListVisible &&
                            <Tab label="Составление списка дисциплин" value={TabNumber.SubjectList} {...allyProps(TabNumber.SubjectList)} />}
                            {this.state.isStudentResultListVisible &&
                            <Tab label="Просмотр результатов" value={TabNumber.StudentResultList} {...allyProps(TabNumber.StudentResultList)} />}
                            {this.state.isTestPassingTabVisible &&
                            <Tab label="Прохождение тестирования" value={TabNumber.TestPassing} {...allyProps(TabNumber.TestPassing)} />}}
                            {this.state.isCompilationTestsTabVisible &&
                            <Tab label="Подготовка тестов" value={TabNumber.TestCompilation} {...allyProps(TabNumber.TestCompilation)} />}
                        </Tabs>
                    </Box>
                    <TabPanel value={this.state.value} index={TabNumber.StudentGroup}>
                        <StudentGroupCompilation />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.SubjectList}>
                        <SubjectCompilation />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.StudentResultList}>
                        <StudentResultList />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.TestPassing}>
                        <TestPassing />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.TestCompilation}>
                        <TestCompilation />
                    </TabPanel>
                </Grid>
            </Grid>
        );
    }
}

export default withRouter(Account);
