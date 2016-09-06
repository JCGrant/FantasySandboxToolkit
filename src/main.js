import React, { Component } from 'react';
import { render } from 'react-dom';

import cityOrigins from './descriptions/city-origins.json';
import cityActivities from './descriptions/city-activities.json';
import cityObstacles from './descriptions/city-obstacles.json';
import resources from './descriptions/resources.json';
import resourceObstacles from './descriptions/resource-obstacles.json';
import ruinNatures from './descriptions/ruin-natures.json';
import ruinTraits from './descriptions/ruin-traits.json';
import ruinObstacles from './descriptions/ruin-obstacles.json';
import lairNatures from './descriptions/lair-natures.json';

function randomElem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const CityHeaders = () => {
  return (
    <tr>
      <th>Origin</th>
      <th>Origin Benefit</th>
      <th>Activity</th>
      <th>Activity Benefit</th>
      <th>Obstacle</th>
      <th>Obstacle Source</th>
      <th>Obstacle Fix</th>
      <th>Obstacle Locales</th>
    </tr>
  );
};

const RandomCity = () => {
  return (
    <tr>
      <td>{randomElem(cityOrigins)['origin']}</td>
      <td>{randomElem(cityOrigins)['benefit']}</td>

      <td>{randomElem(cityActivities)['activity']}</td>
      <td>{randomElem(cityActivities)['benefit']}</td>

      <td>{randomElem(cityObstacles)['obstacle']}</td>
      <td>{randomElem(cityObstacles)['source']}</td>
      <td>{randomElem(cityObstacles)['fix']}</td>
      <td>{randomElem(cityObstacles)['locales']}</td>
    </tr>
  );
};

const Cities = () => {
  return (
    <div>
      <h1>Cities</h1>
      <table>
        <tbody>
          <CityHeaders />
          <RandomCity />
        </tbody>
      </table>
    </div>
  );
};

const Towns = () => {
  return (
    <div>
      <h1>Towns</h1>
      <table>
        <tbody>
          <CityHeaders />
          <RandomCity />
          <RandomCity />
          <RandomCity />
          <RandomCity />
        </tbody>
      </table>
    </div>
  );
};

const ResourceHeaders = () => {
  return (
    <tr>
      <th>Resource</th>
      <th>Resource Benefit</th>
      <th>Obstacle</th>
      <th>Obstacle Source</th>
      <th>Obstacle Fix</th>
      <th>Obstacle Locales</th>
    </tr>
  );
};

const RandomResource = () => {
  return (
    <tr>
      <td>{randomElem(resources)['resource']}</td>
      <td>{randomElem(resources)['benefit']}</td>

      <td>{randomElem(resourceObstacles)['obstacle']}</td>
      <td>{randomElem(resourceObstacles)['source']}</td>
      <td>{randomElem(resourceObstacles)['fix']}</td>
      <td>{randomElem(resourceObstacles)['locales']}</td>
    </tr>
  );
};

const Resources = () => {
  return (
    <div>
      <h1>Resources</h1>
      <table>
        <tbody>
          <ResourceHeaders />
          <RandomResource />
          <RandomResource />
          <RandomResource />
          <RandomResource />
          <RandomResource />
        </tbody>
      </table>
    </div>
  );
};

const RuinHeaders = () => {
  return (
    <tr>
      <th>Nature</th>
      <th>Nature Benefit</th>
      <th>Trait</th>
      <th>Trait Benefit</th>
      <th>Obstacle</th>
      <th>Obstacle Source</th>
      <th>Obstacle Fix</th>
      <th>Obstacle Locales</th>
    </tr>
  );
};

const RandomRuin = () => {
  return (
    <tr>
      <td>{randomElem(ruinNatures)['nature']}</td>
      <td>{randomElem(ruinNatures)['benefit']}</td>
      <td>{randomElem(ruinTraits)['trait']}</td>
      <td>{randomElem(ruinTraits)['benefit']}</td>
      <td>{randomElem(ruinObstacles)['obstacle']}</td>
      <td>{randomElem(ruinObstacles)['source']}</td>
      <td>{randomElem(ruinObstacles)['fix']}</td>
      <td>{randomElem(ruinObstacles)['locales']}</td>
    </tr>
  );
};

const Ruins = () => {
  return (
    <div>
      <h1>Ruins</h1>
      <table>
        <tbody>
          <RuinHeaders />
          <RandomRuin />
          <RandomRuin />
          <RandomRuin />
          <RandomRuin />
          <RandomRuin />
        </tbody>
      </table>
    </div>
  );
};

const LairHeaders = () => {
  return (
    <tr>
      <th>Nature</th>
    </tr>
  );
};

const RandomLair = () => {
  return (
    <tr>
      <td>{randomElem(lairNatures)['nature']}</td>
    </tr>
  );
};

const Lairs = () => {
  return (
    <div>
      <h1>Lairs</h1>
      <table>
        <tbody>
          <LairHeaders />
          <RandomLair />
          <RandomLair />
          <RandomLair />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Cities />
      <Towns />
      <Resources />
      <Ruins />
      <Lairs />
    </div>
  );
};

render(<App/>, document.getElementById('app'));
