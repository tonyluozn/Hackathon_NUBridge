import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, Rectangle } from '@react-google-maps/api';
import { Modal, Button } from 'antd';


  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const containerStyle = {
    width: '100%',
    height: '700px',
    display: 'flex',  
    justifyContent:'center', 
    alignItems:'center'
  }
   
  const campusCenter = {
    lat: 42.051985,
    lng: -87.675863
  }

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
  
  const gridSize = 7
  const zoomRate = 14

  function handleClick(bound){

  }
  
  class Grid extends React.Component {
    constructor(props){
        super(props);
        this.bound = props.bound;
    }

    state = { 
        visible: false,
        count: 0
    };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        // this.setState({
        // visible: false,
        // });
        this.setState({count: this.state.count + 1});
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };

    render() {
        return (
        <>
            <Rectangle bounds={this.bound} 
            options={rectOptions} 
            onClick={this.showModal}/>
            <Modal
            title="Area"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            okText="Report"
            >
            <p>{this.bound.north}</p>
            <p>{this.bound.south}</p>
            <p>{this.bound.east}</p>
            <p>{this.bound.west}</p>
            <p>{this.state.count}</p>
            </Modal>
        </>
        );
    }
}

  function AreaRow(props){
      function option(e){  
        return {
        north: props.south + areaSize.height,
        south: props.south,
        east: props.east - e * areaSize.width,
        west: props.east - (e + 1) * areaSize.width
        }
      }
      return([...Array(gridSize).keys()].map(
          e =>
          <Grid bound={option(e)} key={e}/>
          ))
  }

  function AreaMap(props){
      return([...Array(gridSize).keys()].map(
          e => <AreaRow south={props.south + e * areaSize.height} east = {props.east} key={e}/>
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
          zoom = {zoomRate}
          
        >
          <Marker position={campusCenter}/>
          <AreaMap south={areaBounds.south} east={areaBounds.east}/>
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
export default React.memo(MyComponent);

  
