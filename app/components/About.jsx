var React = require('react');

var About = (props) => {
    return(
      <div>
        <h1 className='text-centered'>About</h1>
        <p>This simple weather app was built in React. You can search the weather of any city in the world by typing in the name of the city.
        It uses the OpenWeatherMap API to find this data. In the future, it may return more data.</p>
        <p>Here are some of the tools that I used:</p>
        <ul>
          <li>
            <a href='https://facebook.github.io/react' target='_blank'>React</a> - this was the JavaScript framework used.
          </li>
          <li>
            <a href='https://openweathermap.org' target='_blank'>Open Weather Map</a> - this was used to provide the temperature of the provided city.
          </li>
        </ul>
      </div>

    )
};
module.exports = About;
