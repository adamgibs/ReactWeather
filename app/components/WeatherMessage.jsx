var React = require('react');

var WeatherMessage = ({ temperature, location }) => {
  return(
  <div>
    <p>The temperature in {location} is {temperature}</p>
  </div>
  )
}
module.exports = WeatherMessage;
