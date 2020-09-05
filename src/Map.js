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
    width: 0.0065
  }

  function Options(count){
      if (count >= 5) {
        return {
            strokeOpacity: 0.25,
            fillColor: '#ff0000',
            fillOpacity: Math.min(0.05 + (count - 5) * 0.05, 0.3)
      }
    }
      else {
        return{
            strokeOpacity: 0.25,
            fillColor: '#008000',
            fillOpacity: 0.05 + (5 - count) * 0.05
      }
    }
  }

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
        count: Math.floor(Math.random() * Math.floor(10))
    };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleOk = e => {
        this.setState({count: this.state.count + 1});
    };

    handleCancel = e => {
        this.setState({
        visible: false,
        });
    };

    diminish() {
        this.setState({state: 
            (this.state.count > 0)? this.state.count - 1: 0 });
    }

    render() {
        return (
        <>
            <Rectangle bounds={this.bound} 
            options={Options(this.state.count)} 
            onClick={this.showModal}/>
            <Modal
            title="Area"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            okText="Report"
            >
            <p>
                Coordinate: 
            </p>
            <p>
                North - {this.bound.north}, 
                South - {this.bound.south},
            </p>
            <p>
                East - {this.bound.east},
                West - {this.bound.west}
            </p>
            <p>Current Status: {this.state.count}</p>
            </Modal>
        </>
        );
    }
}

class AreaRow extends React.Component{
    constructor(props){
        super(props);
        this.south = props.south;
        this.east = props.east;
        console.log(this.south);
        this.Row = [...Array(gridSize).keys()].map(
            e =><Grid bound={option(e, this.south, this.east)} 
            key={e}/>)
    }

    diminish(){
        this.Row.map(e => e.diminish)
    }

    render(){
        return this.Row
    }
}

class AreaMap extends React.Component{
    constructor(props){
        super(props)
        this.south = props.south
        this.east = props.east
        this.areaMap = [...Array(gridSize).keys()].map(
            e => 
            <AreaRow 
            south={this.south + e * areaSize.height} 
            east = {this.east} 
            key={e}/>
            ) 
        // this.timer = setInterval(this.diminish, 1000)
    }
 
    diminish(){
        setInterval(this.areaMap.map(e => e.diminish), 1000)
    }

    render(){
        return this.areaMap
    }
}
 


  function option(e, south, east){
    let ans = {
        north: south + areaSize.height,
        south: south,
        east: east - e * areaSize.width,
        west: east - (e + 1) * areaSize.width   
    }
    return ans
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
          <AreaMap south={areaBounds.south} east={areaBounds.east}/>
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
export default React.memo(MyComponent);

  
