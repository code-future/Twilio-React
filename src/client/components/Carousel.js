import React from 'react';

import spaghetti from '../public/img/spaghetti.jpg';

export default class Carousel extends React.Component {
  render() {
    return (
      <div className="carousel">
          <a className="carousel-item" href="#one!"><img src={spaghetti} /></a>
        </div>
    )
  }
}