// =========== robots.txt ============
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

// ========== Home.js =============
import React from 'react';
import './App.css'
export default class Home extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <h1 className='text-center'>Search Policy</h1>
                <div className='container'>
                    <table>
                        <tr>
                            <td>Policy id</td>
                            <td>Policy Group</td>
                            <td>Status</td>
                            <td><input type='button' value='Search'></input></td>
                        </tr>
                        <tr>
                            <td><input type='text'></input></td>
                            <td><input type='text' ></input></td>
                            <td><input type='text'></input></td>
                        </tr>
                    </table>
                    <div className='card-layout'>
                        <form>
                            <table>
                                <thead>
                                    <th>SI.No</th>
                                    <th>Policy ID</th>
                                    <th>Policy Group</th>
                                    <th>Property Value</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                    <th></th>
                                </thead>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

// ===========setupTests.js ========
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


// ============ index.css ==============
@import"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap";
* {
margin: 0;
padding: 0
}
body {
color: #707070;
font-family: "Roboto", sans-serif;
font-size: 16px;
font-weight: 400;
background-color: #f9f9f9
}
p {
color: #707070;
font-family: "Roboto", sans-serif;
font-size: 16px;
margin-bottom: 15px
}
label {
color: #707070;
font-size: 16px;
font-weight: 400;
display: inline-block;
margin-bottom: 10px
}
h1,
h2,
h3,
h4,
h5,
h6 {
font-family: "Roboto", sans-serif;
font-weight: 400;
margin-top: 0;
margin-bottom: 15px
}
h1 {
color: #fff;
font-size: 32px;
font-weight: 400
}
.btn {
color: #fff;
font-size: 19px;
font-weight: 400;
text-decoration: none;
text-align: center;
border-radius: 3px;
padding: 15px 20px;
min-width: 120px;
display: inline-block;
border: 1px solid transparent;
background-color: #292929
}
.text-center {
text-align: center
}
.btn.btn-primary {
background-color: #e65c14
}
.btn.btn-primary-border {
color: #e65c14;
background-color: transparent;
border: 2px solid #e65c14
}
.btn-section {
margin-bottom: 20px
}
.btn-section .btn {
    margin-right: 15px
    }
.btn-section .btn:last-child {
    margin-right: 0
}
.after-style,
.customer-wrapper .customer-card .identify-detail li::after,
.login-container::after,
.form-icon-text-group::after,
.main-header .right-side::after,
.main-header::after,
.row-wrapper::after {
content: "";
display: table;
clear: both
}
.row-wrapper .col-wrapper {
float: left;
display: block;
position: relative;
min-height: 1px;
box-sizing: border-box
}
.container {
width: 90%;
position: relative;
display: block;
margin-left: auto;
margin-right: auto
}
.heading-bar {
background-color: #e65c14; padding-top: 30px;
padding-bottom: 25px;
position: relative
}
.heading-bar h1 {
color: #fff
}
.main-wrapper {
padding-top: 30px;
padding-bottom: 30px
}
.fliter-group {
display: flex;
flex-direction: row;
justify-content: flex-end
}
.fliter-group .fliter-list {
display: block;
position: relative;
margin: 0 10px
}
.fliter-group .fliter-list .status {
width: 150px
}
.fliter-group .fliter-list .search-form {
width: 280px
}
.card-layout,
.customer-wrapper .customer-card { background-color: #fff;
box-shadow: 0px 0 10px 0px #e8e8e8
}
.ibox_pj-dropdown .ibox_pj-dropdown-menu {
display: none;
width: 220px;
position: absolute;
background-color: #fff;
left: 0;
top: 100%;
z-index: 1000;
float: left;
min-width: 160px;
padding: 5px 0;
margin: 2px 0 0;
font-size: 14px;
text-align: left;
list-style: none
}
.ibox_pj-dropdown .ibox_pj-dropdown-menu.view {
display: block
}
.ibox_pj-dropdown .ibox_pj-dropdown-menu li>a {
    color: #292929;
text-decoration: none
}
.main-header {
padding-top: 10px;
padding-bottom: 10px;
background-color: #292929
}
.main-header .logo {
width: 170px;
float: left;
position: relative;
display: block
}
.main-header .right-side {
width: calc(100% - 170px); float: right
}
.main-header .right-side>* {
float: right;
position: relative;
display: block;
margin-left: 15px;
margin-right: 15px
}
.main-header .right-side .action-lists {
margin-left: -15px;
margin-right: -15px;
margin-top: 3px
}
.main-header .right-side .action-lists li {
display: inline-block
}
.main-header .right-side .action-lists li a {
color: #fff;
font-family: "Roboto", sans-serif;
font-size: 16px;
text-decoration: none;
padding: 10px 15px;
display: inline-block
}
.main-header .right-side .action-lists .ibox__pj-arrow-down {
float: right
}
.main-header .right-side .action-lists .ibox_pj-dropdown .ibox_pj-dropdown-menu li {
display: block;
border-bottom: 1px solid #e2e2e2
}
.main-header .right-side .action-lists .ibox_pj-dropdown .ibox_pj-dropdown-menu li:last-child { border-bottom: none
}
.main-header .right-side .action-lists .ibox_pj-dropdown .ibox_pj-dropdown-menu li a {
color: #292929;
display: block
}
.form-group {
margin-bottom: 15px
}
.form-control {
color: #707070;
font-size: 16px;
width: 100%;
height: 40px;
display: block;
padding-left: 10px;
padding-right: 10px;
border-radius: 2px;
border: 1px solid #e2e2e2; box-sizing: border-box
}
.form-icon-text-group .input-form {
width: calc(100% - (64px + 96px))
}
.form-icon-text-group .form-control {
height: 64px
}
.ibox-modal-backdrop {
position: absolute;
width: 100%;
height: 100%;
top: 0;
bottom: 0;
z-index: 10;
background-color: rgba(0, 0, 0, .4)
}
.ibox-modal {
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 12
}
.table {
width: 100%;
border-collapse: collapse
}
.table>thead>tr>th,
.table>tbody>tr>td {
font-size: 16px;
text-align: left;
padding: 15px 20px;
border-top: 1px solid #efefef
}
.table>thead>tr>th {
color: #292929
}
.table>tbody>tr>td {
color: #707070
}
.table>tbody>tr>td .text-status.success {
color: #10a21e
}
.table>tbody>tr>td .text-status.error {
color: #e24444
}
.search-form .ibox__pj-search {
position: absolute;
top: 10px;
left: 10px
}
.view-details-wrapper .btn-section {
text-align: center;
margin-top: 40px
}
.view-details-wrapper .back-btn {
position: relative
}
.view-details-wrapper .view-label-value {
margin: 20px auto
}
.search-filter .row-wrapper {
margin-left: -15px;
margin-right: -15px
}
.search-filter .col-wrapper {
padding-left: 15px;
padding-right: 15px
}
.search-filter .col-wrapper.col-1 {
width: calc(80% / 3)
}
.search-filter .col-wrapper.col-2 {
width: 20%
}
.search-filter .btn {
margin-top: 28px;
padding: 8px 15px
}
.policy-search-wrapper {
margin-top: 30px
}
// ---------------------------------------------------
export let policyStatusList = [
    {
    name: 'In Effect',
    code: 'In Effect'
    },
    {
    name: 'Cancel',
    code: 'Cancel'
    },
    ];
    export let policyPlanList = [
    {
    name: 'Home'
    },
    {
    name: 'Appartment'
    },
    {
    name: 'Villa'
    },
    ];
    export let policyList = [
    {
    policyId: "P1536",
    policyType: "Home",
    policyPropertyValue: 3000000,
    policyStartDate: "12/05/2016",
    policyEndDate: "12/05/2016",
    policyStatus: "In Effect"
    },
    {
    policyId: "P1537",
    policyType: "Appartment",
    policyPropertyValue: 5000000,
    policyStartDate: "12/05/2016",
    policyEndDate: "12/05/2016",
    policyStatus: "In Effect"
    },
    {
    policyId: "P1538",
    policyType: "Home",
    policyPropertyValue: 5000000,
    policyStartDate: "12/05/2016",
    policyEndDate: "12/05/2016",
    policyStatus: "Cancel"
    },
    {
    policyId: "P1539",
    policyType: "Appartment",
    policyPropertyValue: 5000000,
    policyStartDate: "12/05/2016",
    policyEndDate: "12/05/2016",
    policyStatus: "Cancel"
    },
    {
    policyId: "P1540",
    policyType: "Villa",
    policyPropertyValue: 5000000,
    policyStartDate: "12/05/2016",
    policyEndDate: "12/05/2016",
    policyStatus: "Cancel"
    },
    {
    policyId: "P1541",
    policyType: "Villa",
    policyPropertyValue: 5000000,
    policyStartDate: "12/05/2016",
    policyEndDate: "12/05/2016",
    policyStatus: "In Effect"
    },
    ];





// ============ App.js ==============
import React from 'react';
import Home from './Home.js';
export default class App extends React.Component{
constructor(){
        super()
    }
    render(){
    return(
        <div>
            <Home/>
        </div>
    )
    }
}

// -==================
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
        <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
            <App/>
        </BrowserRouter>,
    document.getElementById('root')
);