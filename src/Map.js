import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Button } from 'react-bootstrap';

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const containerStyle = {
    width: '100%',
    height: '700px',
    display: 'flex',  
    justifyContent:'center', 
    alignItems:'center'
  };
   
  const center = {
    lat: 42.051985,
    lng: -87.675863
  };
   
  export function MyComponent() {

    return (
      <LoadScript
        googleMapsApiKey="AIzaSyCoPHbDUrvtO6_oeIcph0x2TX-SlFbc-u4"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          defaultCenter={center}
          center={center}
          zoom = {15}
          
        >
          <Marker position={center}/>
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
export default React.memo(MyComponent);

  
