import './index.css';
import numeral from 'numeral';

const cherryValue = numeral(100).format('$0,0.00');

// eslint-disable-next-line
console.log(`I would pay ${cherryValue} for this pie.`);
