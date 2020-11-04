import React from 'react';
import { connect } from 'react-redux';
import {toggleError} from '../../redux/phoneBook/phoneBookActions'
import styles from './Error.module.css'

const Error=({closeHandler})=>  {
return (
        <div className={styles.error}>
        <button onClick={closeHandler}></button>
        <p>Contact is already existed</p>
        </div>
        );
    
}

// const mapDispatchToProps = (dispatch) => {
// return {
//         closeHandler: dispatch(toggleError)
//         }    
// }



export default connect(null, null)(Error);