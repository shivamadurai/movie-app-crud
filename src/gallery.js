const createHTMLElement = require('./createHTMLElement');
const cardHTML = require('./card');
const rowHTML = require('./row');
const colHTML = require('./col');
const containerHTML = require('./container');

const compose = (...fns) =>
  fns.reduce((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
    value => value
  );

const gallery = compose(createHTMLElement, containerHTML, rowHTML, colHTML, cardHTML);

module.exports = gallery;
