import './index.css';
import numeral from 'numeral';

const cherryValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${cherryValue} for this pie.`);
