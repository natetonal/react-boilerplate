import React from 'react';
import * as Redux from 'react-redux';
import * as Actions from 'actions';

export const TonalStore = React.createClass({

    render(){
        return(
            <div>Store</div>
        );
    }
});

export default Redux.connect()(TonalStore);
