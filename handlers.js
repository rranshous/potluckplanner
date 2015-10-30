console.log("Loading handlers");

var event = require('./event.js');
var task = require('./task.js');

exports.get_event = function(event, context) {
  console.log('GET EVENT Received event:',
              JSON.stringify(event, null, 2),
              JSON.stringify(context, null, 2));

  var id = event.id;
  console.log('requesting data', id);
  event.get(id,
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
  event.set(id, event,
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
  event.set(id, event,
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
