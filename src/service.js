import fs from 'fs';

const testSelfContent = flight => flight.every(el => !!el);

const mergePairOfFlights = (flight1, flight2) => {
  const result = [];
  for (let i = 0; i < flight1.length; i += 1) {
    if ((flight1[i] && flight2[i]) || (!flight1[i] && !flight2[i])) {
      return null;
    }
    result[i] = flight1[i] || flight2[i];
  }
  return result;
};

const mergeFlights = (flights) => {
  let result = [];
  for (let i = 0; i < flights.length; i += 1) {
    if (testSelfContent(flights[i])) {
      result = [...result, flights[i]];
    } else {
      for (let j = i + 1; j < flights.length; j += 1) {
        const glueResult = mergePairOfFlights(flights[i], flights[j]);
        if (glueResult) {
          result = [...result, glueResult];
        }
      }
    }
  }
  return result;
};

export default async (inputFilename, outputFilename) => {
  const input = await fs.readFile(inputFilename, 'utf8');
  console.log(`inputData: ${input}`);
  const output = mergeFlights(JSON.parse(input));
  await fs.writeFile(outputFilename, JSON.stringify(output), 'utf8');
};
