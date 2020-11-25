import React from 'react';
import './Rating.css';

/*function getRating(stars) {
    switch (stars) {
        case 1-0.9:
            return '☆'

    }
}*/

function Rating(props) {
  let stars;
  if (props.children < 0.9) {
    stars = '☆☆☆☆☆';
  } else if (props.children < 1.4) {
    stars = '★☆☆☆☆';
  } else if (props.children < 1.5) {
    stars = '★★☆☆☆';
  } else if (props.children < 2.4) {
    stars = '★★☆☆☆';
  } else if (props.children < 3.4) {
    stars = '★★★☆☆';
  } else if (props.children < 4.4) {
    stars = '★★★★☆';
  } else if (props.children < 5.4) {
    stars = '★★★★★';
  }

  return <div>{stars}</div>;
}

export default Rating;
