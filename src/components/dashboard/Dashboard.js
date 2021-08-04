import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchTransactionStats} from '../../action/transaction';

const Dashboard = ({fetchTransactionStats}) => {
    
    useEffect(() => {
        fetchTransactionStats();
    },[]);

    return (
        <div>
            Dashboard
        </div>
    )
}

export default connect(null,{fetchTransactionStats})(Dashboard);
