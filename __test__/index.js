const assert = require('assert');
const isWxml = require('../');

const successSamples = [
  '<template></template>',
  '<view>hello world</view>',
  '<image />',
];

const failureSamples = [
  '<cake></cake>',
  '<foo></foo>',
  '<veiw></veiw>',
  '<imagex></imagex>',
  '<html></html>',
  '<body></body>',
];

successSamples.forEach(function(s) {
  assert.equal(true, isWxml(s))
});

failureSamples.forEach(function(s) {
  assert.equal(false, isWxml(s))
});

