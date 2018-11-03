import React, { Component, PropTypes } from 'react';

export default class Filter extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            str:'',
            filtered_list:[],
            original_list:[]
        }
    }
    componentWillReceiveProps(nextProps){
		console.log('component Will Receive Props - Name_input ');
        if(this.state.original_list.length === 0){
            this.setState(Object.assign(this.state,{        
                filtered_list : nextProps.list_data,
                original_list : nextProps.list_data
            }))
        }
	}
    update_list(event) {
        //console.log('update_list')
        const { list_data , on_filter } = this.props;
        let txt = event.target.value;

        let origin = txt.length > this.state.str.length ? this.state.filtered_list : this.state.original_list;

        console.log('origin.length',origin.length)
        let filtered_list = origin.filter( item =>
            item.first_name.toLowerCase().includes(txt.toLowerCase()) 
        )
        this.setState(Object.assign(this.state,{  
            str:txt,      
            filtered_list : filtered_list,
        }))
        //console.log('length', filtered_list.length)
        on_filter(filtered_list)
    }
    render() {
        return <input type="text" className="filter" onChange={(e) => this.update_list(e)} />
    }

    // static propTypes = {
    //     on_filter: PropTypes.func.isRequired,
    //     list_data: PropTypes.arrayOf(PropTypes.shape({
    //         id: PropTypes.number.isRequired,
    //         first_name: PropTypes.string.isRequired,
    //         last_name: PropTypes.string.isRequired,
    //         email: PropTypes.string.isRequired,
    //         country: PropTypes.string.isRequired,
    //         description: PropTypes.string.isRequired,
    //         avatar: PropTypes.string.isRequired,
    //     })).isRequired
    // }
}
// Filter.propTypes = {
//     on_filter: PropTypes.func.isRequired,
//     list_data: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         first_name: PropTypes.string.isRequired,
//         last_name: PropTypes.string.isRequired,
//         email: PropTypes.string.isRequired,
//         country: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         avatar: PropTypes.string.isRequired,
//     })).isRequired
// }


