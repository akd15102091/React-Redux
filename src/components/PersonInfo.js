import React from "react";
import { useSelector } from 'react-redux';

function PersonInfo(props) {

  let myState = useSelector((state)=> state.changePerson) ;

  if(Object.keys(myState).length==0){
    myState = props.personData;
  }

  let name=myState.name.title+" "+myState.name.first+" "+myState.name.last;

  return (
   <>
      <br />
      <div className="contaner-fluid mb-5">
            <div className="row">
                <div className="col-md-9 col-12 mx-auto ">
                  <div className="card mb-3" >
                      <div className="row g-0">
                        <div className="col-md-3">
                          <div className="image">
                            <img width={150} height={150} src={myState.picture.large} className="img-fluid rounded-start" alt="..." />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div className="card-body highlightedPersonInfo" style={{padding:"50px"}}>
                            <div className="highlightedPersonName" style={{marginBottom:"15px"}}>{name}</div>
                            <div > <span style={{color:"#A259FF"}}>{myState.location.street.number}</span>, {myState.location.street.name}, {myState.location.state},<span style={{fontWeight:"bold"}}> {myState.location.country}</span>, {myState.location.postcode} </div>
                            <div>{myState.location.timezone.offset}, {myState.location.timezone.description}</div>
                            <div className="text-capitalize" style={{color:"rgba(0, 0, 0, 0.6)"}} >{myState.gender}</div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
      </div>
      <br />
   </>
  );
}

export default PersonInfo;
