console.log("Loading handlers");

var event_client = require('./event.js');
var task_client = require('./task.js');
var fs = require('fs');

exports.get_root_html = function(event, context) {
  context.succeed({body:fs.readFileSync('./index.html', 'utf8')});
};

exports.get_event = function(event, context) {
  console.log('GET EVENT Received event:',
              JSON.stringify(event, null, 2),
              JSON.stringify(context, null, 2));

  var id = event.id;
  console.log('requesting data', id);
  event_client.get(id,
    function(data) {
      console.log('got data', data);
      context.succeed(data);
    },
    function(arg) {
      console.log('failure getting data', arg);
      context.fail()
    }
  );
};

exports.update_event = function(event, context) {
  console.log('UPDATE EVENT Received event:',
              JSON.stringify(event, null, 2),
              JSON.stringify(context, null, 2));

  var id = event.id;
  console.log('setting data', id, event);
  event_client.set(id, event,
    function(data) {
      console.log('got response', data);
      context.succeed();
    },
    function(arg) {
      console.log('failure setting data', arg);
      context.fail()
    }
  );
};

exports.create_event = function(event, context) {
  console.log('CREATE EVENT Received event:',
              JSON.stringify(event, null, 2),
              JSON.stringify(context, null, 2));

  var id = event.id;
  console.log('setting data', id, event);
  event_client.set(id, event,
    function(data) {
      console.log('got response', data);
      context.succeed();
    },
    function(arg) {
      console.log('failure setting data', arg);
      context.fail()
    }
  );
};

exports.get_event_details = function(event, context) {
  exports.get_event(
    { id: event.id },
    { succeed: function(event_data) {
        context.succeed({
          'version': '1',
          'event': event_data,
          'tasks': []
        });
    }}
  );
}
