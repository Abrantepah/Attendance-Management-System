import{j as t}from"./react-f83171f6.js";import{_ as s}from"./react-leaflet-cluster-14b37f8b.js";import{l as i}from"./leaflet-f9c7aa0e.js";import{M as a,T as n,a as c}from"./react-leaflet-799ff92f.js";import"./@algolia-6bb98d1b.js";import"./@react-leaflet-0cb78c77.js";import"./react-dom-e9b5ed0c.js";import"./leaflet.markercluster-f3ff14cb.js";const d=[{id:1,coordinates:[38,35.33]},{id:2,coordinates:[55.88,46.05]},{id:3,coordinates:[50.63,11.78]},{id:4,coordinates:[38.41,-104.41]},{id:5,coordinates:[44.72,-120.23]},{id:6,coordinates:[-8.75,-54.84]},{id:7,coordinates:[3.86,-73.65]},{id:8,coordinates:[19.97,-11.95]},{id:9,coordinates:[34.16,97.56]},{id:10,coordinates:[35.6,97.03]},{id:11,coordinates:[47.8040943,-84.5165]},{id:12,coordinates:[57.118132,-107.677649]},{id:13,coordinates:[-24.05,134.3]}],y=()=>{const r=i.divIcon({className:"custom-marker-icon"}),e=o=>i.divIcon({html:`<span>${o.getChildCount()}</span>`,className:"custom-marker-cluster",iconSize:i.point(33,33,!0)});return t.jsxs(a,{style:{flex:1,width:"100%",height:"100%",zIndex:0},center:[51.505,-.09],zoom:2,scrollWheelZoom:!1,maxZoom:2,zoomControl:!1,maxBounds:[[-80,-180],[90,180]],children:[t.jsx(n,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(s,{chunkedLoading:!0,polygonOptions:{opacity:0,fillOpacity:0},iconCreateFunction:e,children:d.map(o=>t.jsx(c,{position:o.coordinates,icon:r},o.id))})]})};export{y as default};
