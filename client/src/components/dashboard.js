import React, {Component} from 'react';
import { connect } from 'react-redux';
import History from './history';
import Module from './module';

class Dashboard extends Component {
    render() {
        return (
            <div>
            <Module title='Trade History'>
              <History />
            </Module>
            </div>
        )
    }
}


function mapStateToProps({auth}){
    return {
        authenticated: auth.authenticated
    }
}

export default connect(mapStateToProps, null)(Dashboard)