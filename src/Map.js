import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, Rectangle } from '@react-google-maps/api';
import { Button } from 'react-bootstrap';

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const containerStyle = {
    width: '100%',
    height: '700px',
    display: 'flex',  
    justifyContent:'center', 
    alignItems:'center'
  };
   
  const campusCenter = {
    lat: 42.051985,
    lng: -87.675863
  };

  const areaBounds = { 
    south: 42.035,
    east: -87.668370
  }
  const areaSize = {
    height: 0.005,
    width: 0.0065}

  const rectOptions = {
      strokeOpacity: 0.3,
      fillOpacity: 0.1
  }
  
  function AreaRow(props){
      function option(e){  
        return {
        north: props.south +  areaSize.height,
        south: props.south,
        east: props.east - e * areaSize.width,
        west: props.east - (e + 1) * areaSize.width
        }
      }
      return([...Array(7).keys()].map(
          e =>
          <Rectangle 
          bounds={option(e)}
          options={rectOptions} />
          ))
  }

  function AreaMap(props){
      return([...Array(7).keys()].map(
          e => <AreaRow south={props.south + e * areaSize.height} east = {props.east}/>
          ))
  }

  export function MyComponent() {

    return (
      <LoadScript
        googleMapsApiKey=""
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          defaultCenter={campusCenter}
          center={campusCenter}
          zoom = {14}
          
        >
          <Marker position={campusCenter}/>
          <AreaMap south={areaBounds.south} east={areaBounds.east}/>
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
export default React.memo(MyComponent);

  
