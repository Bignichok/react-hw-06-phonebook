import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {changeFilter} from '../../redux/phoneBook/phoneBookReducers'

const Filter = ({ filter, onChangeFilter }) =>  (
    <div className={`${styles.wrp} basic`}>
      <label className={styles.filterLabel}>
        Find Contacts by name
         </label> 
        <input 
          className={styles.filterInput}
          type="text"
          value={filter}
          onChange={(e) => onChangeFilter(e.target.value)}
          /> 
    </div>
  );




const mapStateToProps = (state) => ({
    filter: state.phoneBook.filter
})

const mapDispatchToProps = (dispatch) => ({
    onChangeFilter: (filter)=>dispatch(changeFilter(filter))
})

Filter.defaultProps = {
  onChangeFilter: () => {},
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
