import path from 'path';
import mergeFlights from '../src/service';
import fs from 'fs';

const fixturePath = './__fixtures__/';

const pathResolve = filename => path.resolve(__dirname, `${fixturePath}${filename}`);

it('Testing mergeFlights function', async () => {
  console.log('--------------------------------------');
  const inputFilename = pathResolve('input.json');
  const outputFilename = pathResolve('output.json');
  const expectedFilename = pathResolve('expected.json');
  const expected = await fs.readFile(expectedFilename, 'utf8');

  console.log(`expected, filename: ${expectedFilename}, data: ${expected}`);

  mergeFlights(inputFilename, outputFilename);

  let actual =await fs.readFile(outputFilename, 'utf8');
  console.log(`actual: ${actual}`);

  return expect(actual).toEqual(expected);
});
