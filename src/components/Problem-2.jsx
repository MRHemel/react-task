import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Problem2 = () => {

    const [countryList, setCountryList] = useState([]);
    const [singleCountry, setSingleCountry] = useState(null);

    useEffect(() => {
        axios.get("https://contact.mediusware.com/api/contacts/").then((res) => {
          setCountryList(res.data.results);
       
        });
      }, []);

      const usCountry = countryList.filter(
        (item) => item.country.name.toLowerCase() === "united states"
      );
      const handleSingleCountry = (id) => {
        setSingleCountry(countryList?.find((item) => +item.id === +id));
      };


      console.log(usCountry)
      const country = countryList.map(item=>console.log(item.country.name))

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <a
            className="btn btn-lg btn-outline-primary"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
            id="allContractModal1"
            style={{ color: '#46139f' }}
            
          >
            All Contacts
          </a>
          <a
            className="btn btn-lg btn-outline-warning"
            data-bs-toggle="modal"
            href="#exampleModalToggle2"
            role="button"
            style={{ color: '#ff7f50' }}
            
          >
            US Contacts
          </a>
                </div>
                
            </div>



             {/* all country modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Modal A
              </h5>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-primary m-1"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  style={{ color: '#46139f' }}
                  
                >
                  All Contact
                </button>
                <button
                  className="btn btn-warning m-1"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  
                >
                  US Contact
                </button>
              </div>
              <div>
                <div className="my-2">
                  <div className="input-group mb-3">
                    <input
                      id="myInput"
                      type="text"
                      className="form-control"
                      placeholder="Enter a country name"
                      
                     
                    />
                    <button
                      type="button"
                      
                      className="input-group-text"
                      id="basic-addon2"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <table className="table table-striped" id="myTable">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countryList?.map((country) => {
                      return (
                        <tr
                          onClick={() => handleSingleCountry(country.id)}
                          key={country.id}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          style={{ cursor: "pointer" }}
                        >
                          <td>{country.id}</td>
                          <td>{country.phone}</td>
                          <td>{country.country.name}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer justify-content-between align-items-center">
              <div className="form-check">
                <input
                
                  className="form-check-input"
                  type="checkbox"
                 
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Only Even
                </label>
              </div>
              <button
                className="btn btn-danger"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* all country modal end */}
      {/* us modal start */}

      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Modal B
              </h5>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-primary m-1"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  
                >
                  All Contact
                </button>
                <button
                  className="btn btn-warning m-1"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  style={{ color: '#ff7f50' }}
                  
                >
                  US Contact
                </button>
              </div>
              <div>
                <div className="my-2">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search By Contact Number"
                      
                    />
                    <button
                     
                      className="input-group-text"
                      id="basic-addon2"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usCountry?.map((country) => {
                      return (
                        <tr
                          onClick={() => handleSingleCountry(country.id)}
                          key={country.id}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          style={{ cursor: "pointer" }}
                        >
                          <td>{country.id}</td>
                          <td>{country.phone}</td>
                          <td>{country.country.name}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer justify-content-between align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                  
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Only Even
                </label>
              </div>
              <button
                className="btn btn-danger"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* us modal end */}

{/* single country details modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal C
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <h6>Id : {singleCountry?.id}</h6>
                <h6>Name : {singleCountry?.country?.name}</h6>
                <h6>Contact : {singleCountry?.phone}</h6>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>





        </div>
    );
};

export default Problem2;