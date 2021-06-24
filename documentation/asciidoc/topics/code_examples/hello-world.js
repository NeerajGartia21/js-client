var infinispan = require('infinispan');

// Connect to {brandname} Server.
var connected = infinispan.client(
  {port: 11222, host: '127.0.0.1'}, {cacheName: 'myCache'});

connected.then(function (client) {

  console.log('Connected to `myCache`');

  // Add an entry to the cache.
  var clientPut = client.put('hello', 'world');

  // Retrieve the entry you added.
  var clientGet = clientPut.then(
      function() { return client.get('hello'); });

  // Print the value of the entry.
  var showGet = clientGet.then(
      function(value) { console.log('get(hello)=' + value); });

  // Disconnect from {brandname} Server.
  return client.disconnect();

}).catch(function(error) {

  // Log any errors.
  console.log("Got error: " + error.message);

});
