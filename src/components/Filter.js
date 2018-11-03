import React, { Component, PropTypes } from 'react';

export default class Filter extends Component {

    constructor(props) {
        super(props);
    }

    update_list(event) {
        //console.log('update_list')
        const { list_data , on_filter } = this.props;
        let txt = event.target.value;

        let filtered_list = list_data.filter( item =>
            item.first_name.toLowerCase().includes(txt.toLowerCase()) 
        )
        
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


