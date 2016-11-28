var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
    return(
      <div>
        <h1 className='text-centered'>Examples</h1>
        <p>Here are a few examples to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Madison'>Madison, WI</Link>
          </li>
          <li>
            <Link to='/?location=Atlanta'>Atlanta, GA</Link>
          </li>
        </ol>
      </div>
    )
};
module.exports = Examples;
