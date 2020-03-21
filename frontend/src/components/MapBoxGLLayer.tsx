import L from "leaflet";
import "mapbox-gl-leaflet";
import { GridLayer, withLeaflet } from "react-leaflet";

class MapBoxGLLayer extends GridLayer {
  createLeafletElement(props) {
    return (L as any).mapboxGL(props);
  }
}

/*
* Props are the options supported by Mapbox Map object
* Find options here:https://www.mapbox.com/mapbox-gl-js/api/#new-mapboxgl-map-options-
*/

export default withLeaflet(MapBoxGLLayer) as any;   
