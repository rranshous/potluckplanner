console.log("Loading handlers");

var solecist = require('./solecist.js');

exports.get_event = function(event, context) {
  console.log('GET EVENT Received event:',
              JSON.stringify(event, null, 2),
              JSON.stringify(context, null, 2));

  var id = event.id;
  console.log('requesting data', id);
  solecist.get(id,
    function(data) {
      console.log('got data', data);
      context.succeed(JSON.stringify(data));
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
  solecist.set(id, event,
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
  solecist.set(id, event,
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