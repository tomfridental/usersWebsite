import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Card from './Card';
import TopBar from './TopBar';
import List from './List';
import Filter from './Filter';
import Profile from './Profile';
import { connect } from 'react-redux';
import { userDataFetch } from './UsersDataFetch/UsersDataFetch.actions';
import { filterData } from './UserDataFilter/UserDataFilter.actions';
import { selectUser } from './SelectProfile/SelectProfile.actions';




class Browse extends Component {



    render() {




        const {
            fetchData, //function to fetch data from server
            userData, //the data recieved from the fetch
            filterData, // function to filter the users
            selectUser, //Function to select a single user from the list
        } = this.props;
        

        return (

            <div className="browse">

                <div className="header">
                    <h1 className="headline">Pick a bot!</h1>
                    <div className="filter-box">
                        <h4 className="filter_title">{userData.filteredData.length} items filtered</h4>
                        <Filter className="filter" list_data={userData.originalData} on_filter={filterData} />
                    </div>
                </div>
                <div className="content-box">
                    <Profile {...userData.selectedProfile} />
                    <List list_data={userData.filteredData}
                        pick={(item) => selectUser(item)} doneFetch={userData.doneFetch}/>
                </div>
            </div>
        )
    }
}

// ------------------------------------------------------------------------------------------ //

function mapStateToProps(state, ownProps) {

    const { userData } = state;

    return {
        userData: userData
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(userDataFetch()),
        filterData: (filtered_list) => dispatch(filterData(filtered_list)),
        selectUser: (user) => dispatch(selectUser(user)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Browse)