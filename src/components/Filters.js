import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

function Filters(props) {
  return (<div>
      <div>
          <span>FILTER NAME</span>
          <input value={props.filterName} onChange={(e)=>(props.setFilter('SET_FILTER_NAME', e.target.value))} type="text"/>
      </div>
      <div>
          <span>FILTER DOB</span>
          <input value={props.filterDob} onChange={(e)=>(props.setFilter('SET_FILTER_DOB', e.target.value))} type="date"/>
      </div>
      <div>
          <span>FILTER PHONE</span>
          <input value={props.filterPhone} onChange={(e)=>(props.setFilter('SET_FILTER_PHONE', e.target.value))} />
      </div>
  </div>)
}
const mapStateToProps = state => ({filterName: state.filterName, filterDob: state.filterDob, filterPhone: state.filterPhone});
const mapDispatchToProps = dispatch => ({setFilter: (type, data) => dispatch({type, data})})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
