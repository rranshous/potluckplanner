console.log('Loading solecist');

var httpreq = require('./httpreq.js')

exports.set = function(hostname, view_schema, entity_id, data, succeed, fail) {
  console.log('setting', entity_id, data);
  var metadata = {};
  var post_data = {
    'data': data,
    'view_schema': view_schema,
    'metadata': metadata
  };
  var data_string = JSON.stringify(post_data);
  var options = {
    hostname: hostname,
    port: 80,
    path: '/'+entity_id,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data_string.length
    }
  };
  httpreq.http(options, data_string, succeed, fail);
  console.log('done with set');
}

exports.get = function(hostname, view_schema, entity_id, succeed, fail) {
  var options = {
    hostname: hostname,
    port: 80,
    path: '/'+entity_id+'/'+view_schema.VERSION,
    method: 'GET',
    headers: {}
  };
  httpreq.http(options, '', succeed, fail);
}
