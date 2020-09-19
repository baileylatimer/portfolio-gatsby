import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.6031 21.4615H8.53846V0H0V30H18.4615C20.9991 30 23.4659 29.1634 25.4801 27.6199C27.4942 26.0763 28.9433 23.9118 29.6031 21.4615ZM30.0001 15.4615V11.5385C30.0001 8.47827 28.7844 5.54342 26.6206 3.37954C24.4567 1.21566 21.5218 0 18.4616 0H14.5386V15.4615H30.0001Z" fill={ fill }/>
</svg>





  );
}