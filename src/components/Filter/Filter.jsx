import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { changeFilter } from '../../redux/phoneBook/phoneBookActions'

import styles from "./Filter.module.css";

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


Filter.defaultProps = {
  onChangeFilter: () => {},
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};

const mapStateToProps = (state) => ({
    filter: state.phoneBook.filter
})

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (filter)=>dispatch(changeFilter(filter))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
