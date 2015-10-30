console.log('Loading event');

var solecist = require('./solecist.js');

var view_schema = {
  'VERSION': 2,
  'name': 'INHERIT',
  'id': 'INHERIT',
  'description': 'INHERIT',
  'start_time': 'NEW'
};

var hostname = "event-solecist.forebodingflavor.com";

exports.set = function(entity_id, data, succeed, fail) {
  solecist.set(hostname, view_schema, entity_id, data, succeed, fail);
}

exports.get = function(entity_id, succeed, fail) {
  solecist.get(hostname, view_schema, entity_id, succeed, fail);
}
