import React from 'react';

import ResultsLeft from '../../components/ResultsLeft';
import ResultsRight from '../../components/ResultsRight';

import "./Results.css";

const Results = () => {
  return (
    <section className="container results dsp-f">
        <ResultsLeft />
        <ResultsRight />
    </section>
  )
}

export default Results