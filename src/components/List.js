  import React, { useEffect, useState } from 'react'
  import { connect } from 'react-redux'

  function List(props) {
    const [peoples, setPeoples] = useState([]);
    const [meta, setMeta] = useState({});

    async function fetchUrl(page) {
      let filters = props.filters;
      const response = await fetch(`https://gorest.co.in/public-api/users?_format=json&access-token=qGNHWsEgOZIpchd3JBfRERcEzMUiLu06sWd9${filters.name && '&last_name=' + filters.name}${filters.dob && '&dob=' + filters.dob}${filters.phone && '&phone=' + filters.phone}`);
      const json = await response.json();
      setPeoples(json.result)
      setMeta(json._meta);
    }

    useEffect(() => {
      fetchUrl()
    }, [props.filters]);

    return (
      <div>
        <div>
          {meta.currentPage > 3 && <span onClick={() => fetchUrl(1)}> ~~~ first page ~~~ </span>}

          {meta.currentPage > 3 && <span onClick={() => fetchUrl(meta.currentPage - 3)}>{meta.currentPage - 3}</span>}
          {meta.currentPage > 2 && <span onClick={() => fetchUrl(meta.currentPage - 2)}>{meta.currentPage - 2}</span>}
          {meta.currentPage > 1 && <span onClick={() => fetchUrl(meta.currentPage - 1)}>{meta.currentPage - 1}</span>}
          <span onClick={() => fetchUrl(meta.currentPage)}> ~~~ currentPage {meta.currentPage} currentPage  ~~~ </span>
          {meta.currentPage < meta.pageCount && <span onClick={() => fetchUrl(1 + meta.currentPage)}>{1 + meta.currentPage}</span>}
          {meta.currentPage < meta.pageCount - 1 && <span onClick={() => fetchUrl(2 + meta.currentPage)}>{2 + meta.currentPage}</span>}
          {meta.currentPage < meta.pageCount - 2 && <span onClick={() => fetchUrl(3 + meta.currentPage)}>{3 + meta.currentPage}</span>}

          {meta.currentPage < meta.pageCount - 3 && <span onClick={() => fetchUrl(meta.pageCount)}> ~~~ last page ~~~ </span>}
        </div>
        <ul>
          {peoples.map((item, index) => (<li key={index}> {item.first_name} <br /> {item.dob} <br /> {item.phone}</li>))}
        </ul>

      </div>
    )
  }


  const mapStateToProps = state => ({ filters: { name: state.filterName, dob: state.filterDob, phone: state.filterPhone } });

  export default connect(mapStateToProps, {})(List)
