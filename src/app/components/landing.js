import React from 'react';
import Department from './department';

const Landing = props => (
  <div>
    <Department subject="Biomedical" description="bla bla bla.." link="quiz" internal={true} />
    <Department subject="Chemistry" description="bla bla bla.." link="external" internal={false} />
    <Department subject="Life sciences" description="bla bla.." link="external" internal={false} />
    <Department subject="Physics" description="bla bla bla.." link="external" internal={false} />
  </div>
);

export default Landing;
