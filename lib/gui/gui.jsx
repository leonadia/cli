import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './gui.css';


class Gui extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, []);
        this.state = {};
    }
    render (){
        return (
            <div className={styles.gui}>HELLO WORLD</div>
        )
    }
}

export default connect()(Gui);
