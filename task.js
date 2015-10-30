console.log('Loading task');

var solecist = require('./solecist.js');

var view_schema = {
  'VERSION': 1,
  'id': 'NEW',
  'name': 'NEW',
  'description': 'NEW',
  'event_id': 'NEW'
};

var hostname = "task-solecist.forebodingflavor.com";

exports.set = function(entity_id, data, succeed, fail) {
  solecist.set(hostname, view_schema, entity_id, data, succeed, fail);
}

exports.get = function(entity_id, succeed, fail) {
  solecist.get(hostname, view_schema, entity_id, succeed, fail);
}
