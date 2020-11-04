import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {changeFilter} from '../../redux/phoneBook/phoneBookActions'

const Filter = ({ filter, onChangeFilter }) => {
  return (
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
};

Filter.defaultProps = {
  onChangeFilter: () => {},
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    filter: state.phoneBook.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (filter)=>dispatch(changeFilter(filter))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
