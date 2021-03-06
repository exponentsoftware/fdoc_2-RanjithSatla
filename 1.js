/*1. Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name.

```js
const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]
```

```sh
createArrayOfArrays(countries)
[
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
```
 */

const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

function createArrayOfArrays(countries) {
  let arr = [];
  for (let i = 0; i < countries.length; i++) {
    arr.push([
      countries[i].charAt(0).toUpperCase() +
        countries[i].slice(1).toLowerCase(),
      countries[i].slice(0, 3).toUpperCase(),
      countries[i].length,
    ]);
  }
  return arr;
}

console.log(createArrayOfArrays(countries));
