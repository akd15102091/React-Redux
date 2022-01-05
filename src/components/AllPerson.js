import React , {useEffect, useState} from 'react';
import axios from "axios"
import Card from "./Card";

function AllPerson(props) {

    const data = props.data;
  
  return (
   <>
        <div className="contaner-fluid mb-5">
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className="row gy-3">
                        {
                            data.map((val,ind) => {
                                return <Card key={ind} singlePersonInfo={val} index={ind} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
   </>
  );
}

export default AllPerson;
