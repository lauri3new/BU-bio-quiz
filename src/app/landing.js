import React from 'react';
import Department from './department';

const Landing = props => (
  <div>
    <Department subject="Biomedical" description="bla bla bla.." link="/quiz" />
    <Department subject="Chemistry" description="bla bla bla.." link="external" />
    <Department subject="Life sciences" description="bla bla bla.." link="external" />
    <Department subject="Physics" description="bla bla bla.." link="external" />
  </div>
);

export default Landing;
