import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div className="d-none d-sm-block mb-5 pb-4">
        <div>
          <Map
            style={{
              width: '500px',
              Height: '200px',
            }}
            google={this.props.google}
            center={{
              lat: 31.3225254,
              lng: 75.5033782,
            }}
            zoom={12}
          >
            <Marker
              onClick={this.onMarkerClick}
              icon={{
                url: '/img/icon.svg',
                anchor: new google.maps.Point(32, 32),
                scaledSize: new google.maps.Size(64, 64),
              }}
              name="Current location"
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCHtt_aB7KGJU9Je3FvxBiLb39eOpZODkc',
  v: '3',
})(MapContainer);
