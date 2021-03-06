import React, { Component } from 'react';
import { connect } from 'react-redux';

//import material-ui
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'

//Material-UI Table
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import Paper from '@material-ui/core/Paper';

//Style properties for accounts table
const CustomTableCell = withStyles(theme => ({
    
  }))(TableCell);



  const itemStyle = ({
    btn: {
        borderRadius: '15px',
        border: '1px solid #D4D4D4',
        maxHeight: '36px',
    
    },
    dataCenter: {
        textAlign: 'center',
        padding: '10px',
     
      },
      highschoolCenter: {
        textAlign: 'center',
        padding: '10px',
        width: '100px'
     
      },
  })
    


//Recieve from redux
const mapStateToProps = state => ({
    state,
});

class AccountsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.aItem.id,
            instructor: this.props.aItem.instructor,
            active: this.props.aItem.active_profile
        }
    }

    //Dispatch account ACTIVE STATUS
    handleActive = () => {
        this.props.dispatch({
            type: 'UPDATE_ACTIVE_STATUS',
            payload: this.state
        })

    }

    //Dispatch account INSTRUCTOR STATUS
    handleInstructor = () => {
        this.props.dispatch({
            type: 'UPDATE_ADMIN_STATUS',
            payload: this.state
        })
    }

    handleDelete = () => {
        this.props.dispatch({
            type: 'DELETE_ACCOUNT', 
            payload: this.state
        })
    }

    render() {
        //True and false to be displayed as checkboxes
        let active;

        if (this.props.aItem.active_profile === true) {
            active = (<CheckBox color="primary" onClick={() => this.handleActive()}/>)

        } else {
            active = (<CheckBoxOutlineBlank onClick={() => this.handleActive()}/>)
        }

        let instructor;

        if (this.props.aItem.instructor === true) {
            instructor = (<CheckBox color="primary" onClick={() => this.handleInstructor()}/>)

        } else {
            instructor = (<CheckBoxOutlineBlank onClick={() => this.handleInstructor()}/>)
        }




        return (
            <TableBody>
                <TableRow hover>
                <CustomTableCell style={itemStyle.dataCenter}>{this.props.aItem.last}</CustomTableCell>
                <CustomTableCell style={itemStyle.dataCenter}>{this.props.aItem.first}</CustomTableCell>
                     <CustomTableCell style={itemStyle.dataCenter}>{instructor}</CustomTableCell>
                     <CustomTableCell style={itemStyle.dataCenter}>{active}</CustomTableCell>
                     <CustomTableCell style={itemStyle.dataCenter}>{this.props.aItem.name}</CustomTableCell>
                     <CustomTableCell style={itemStyle.highschoolCenter}>{this.props.aItem.high_school}</CustomTableCell>
                     <CustomTableCell style={itemStyle.dataCenter}>{this.props.aItem.team}</CustomTableCell>
                     <CustomTableCell style={itemStyle.dataCenter} onClick={() => this.handleDelete()}><Button style={itemStyle.btn} variant="outlined" color="primary" >Delete</Button></CustomTableCell>
                </TableRow>
                </TableBody>
        )
    }
}

export default connect(mapStateToProps)(AccountsItem)


//hellloo


