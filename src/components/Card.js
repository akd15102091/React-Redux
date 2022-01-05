import React, { useState } from "react"

import {useSelector, useDispatch } from 'react-redux';
import {show_single_person_info} from "../actions/index"


function Card(props) {

  const dispatch = useDispatch() ;
  const [cardInd,setCardInd] =  useState(props.index);
  let pdata = props.singlePersonInfo ;
  let name = props.singlePersonInfo.name.title+" "+props.singlePersonInfo.name.first+" "+props.singlePersonInfo.name.last;
  
  let genderClass="gender2";
  let emailClass="email2" ;
  let fullnameClass="fullname2";
  let cardbodyClass="cardbodyClass";

  if(cardInd!=0){
    genderClass="gender1";
    emailClass="email1" ;
    fullnameClass="fullname1";
    cardbodyClass="";
  }

  function handleOnClick(){
    dispatch(show_single_person_info(pdata))

    let card_body_elements = document.getElementsByClassName("card-body") ;
    for(let i=1;i<card_body_elements.length;i++)
    {
      if(i==cardInd+1){
        document.getElementsByClassName("card-body")[i].classList.add("cardbodyClass")
        
        document.getElementsByClassName("card-body")[i].childNodes[0].classList.remove("gender1") ;
        document.getElementsByClassName("card-body")[i].childNodes[0].classList.add("gender2") ;

        document.getElementsByClassName("card-body")[i].childNodes[1].classList.remove("fullname1") ;
        document.getElementsByClassName("card-body")[i].childNodes[1].classList.add("fullname2") ;

        document.getElementsByClassName("card-body")[i].childNodes[2].classList.remove("email1") ;
        document.getElementsByClassName("card-body")[i].childNodes[2].classList.add("email2") ;
      }
      else{
        document.getElementsByClassName("card-body")[i].classList.remove("cardbodyClass")
        
        document.getElementsByClassName("card-body")[i].childNodes[0].classList.remove("gender2") ;
        document.getElementsByClassName("card-body")[i].childNodes[0].classList.add("gender1") ;

        document.getElementsByClassName("card-body")[i].childNodes[1].classList.remove("fullname2") ;
        document.getElementsByClassName("card-body")[i].childNodes[1].classList.add("fullname1") ;

        document.getElementsByClassName("card-body")[i].childNodes[2].classList.remove("email2") ;
        document.getElementsByClassName("card-body")[i].childNodes[2].classList.add("email1") ;
      }
    }


  }

  return (
    <React.Fragment>

      <div className="col-md-3 col-12 mx-auto ">
          <div className="card" onClick={ ()=> handleOnClick() }>
              <div className={`${cardbodyClass} card-body`}>
                  <div className={genderClass}>{props.singlePersonInfo.gender}, {props.singlePersonInfo.nat}</div>
                  <div className={fullnameClass}>{name}</div>
                  <div className={emailClass}>{props.singlePersonInfo.email}</div>
              </div>
          </div>
      </div>
 

    </React.Fragment>
  );
}

export default Card;