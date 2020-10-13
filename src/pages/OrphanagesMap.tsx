import React from 'react';
import mapMarkImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { TileLayer, Map } from 'react-leaflet'
import '../styles/orphanages-map.css'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Criciúma</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <Map
        center={[-28.6874555, -49.376054]}
        zoom={13.5}
        style={{ width: '100%', height: '100%' }}
      >
        {/*<--TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
      <div></div>

    </div>
  );
}

export default OrphanagesMap;