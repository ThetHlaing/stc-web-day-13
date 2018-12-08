import React from 'react';
import {connect} from 'react-redux';
import Link from '../component/Link';

const mapStateToProps = (state,ownProps) => ({
    active : state.filter === ownProps.filter
})

const mapDispatchToProps = (dispatch,ownProps) =>({
    updateFilter: () => dispatch({type : 'SET_FILTER',filter : ownProps.filter})
})

export default connect(mapStateToProps,mapDispatchToProps)(Link);