import React from 'react';
import Department from './department';

const Landing = props => (
  <div>
    <Department
      subject="Biomedical Sciences"
      description="Welcome to the Faculty of Biomedical Sciences, where scientists and students are involved in research and education about the fundamental principles that underpin clinical practice and shape our understanding of human and animal function."
      link="quiz"
      internal
    />
    <Department
      subject="Sciences"
      description="bla bla bla.."
      link="http://www.bristol.ac.uk/science/"
      internal={false}
    />
    <Department
      subject="Health sciences"
      description=""
      link="http://www.bristol.ac.uk/health-sciences/"
      internal={false}
    />
    <Department
      subject="Engineering"
      description="bla bla bla.."
      link="http://www.bristol.ac.uk/engineering/"
      internal={false}
    />
  </div>
);

export default Landing;
