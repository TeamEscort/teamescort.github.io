import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import QueryInput from "./query_input";

export default function CareerGuidance() {

  const dispatch = useDispatch();

  useEffect(() => {

  }, [dispatch])

  return (
    <div>
      <div style={{textAlign: 'center', paddingBottom: '3%'}}>
        <title> Automated Comprehensive Student Support System</title>
        <meta name="description" content="Career Guidance assistance." />
      
      <h1>Career Guidance for IT Students</h1>
      <h2>Query your questions on Career Guidance</h2>
      <h3>Not only Career Guidance, Now you can query questions on IT modules as well</h3>

      </div>


      <div style={{paddingBottom: '15%'}}>

      <QueryInput/>

      </div>

    </div>
  );
}
