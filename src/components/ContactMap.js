import React from "react";
import MapStyle from "./MapStyle.json";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 40%;
  @media (max-width: 768px) {
    height: 30%;
  }
`

class ContactMap extends React.Component {
  componentDidMount() {
    new window.google.maps.Map(document.getElementById('mapContainer'), {
      center: { lat: 49.2577142, lng: -123.1941154},
      zoom: 10,
      styles: MapStyle,
      disableDefaultUI: true
    });
  }

  render() {
    return (
      <MapContainer id="mapContainer" />
    );
  }
}

export default ContactMap;