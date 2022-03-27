import { useEffect, useRef } from 'react';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';

import esriConfig from '@arcgis/core/config.js';
esriConfig.assetsPath = './assets';

const App = () => {
  const divRef = useRef<any>();

  useEffect(() => {
    const map = new Map({ basemap: 'streets-vector' });
    new MapView({ map, zoom: 3, center: [-95, 35], container: divRef.current });
    return () => map.destroy();
  }, []);

  return <div ref={divRef} className="MapView"></div>;
}

export default App;