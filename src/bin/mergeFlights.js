import program from 'commander';
import { description } from '../../package.json';
import mergeFlights from '../service';

program
  .description(description)
  .arguments('<input>, <output>')
  .action((input, output) => console.log(mergeFlights(input, output)));
