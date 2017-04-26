module.exports = function(CoffeeShop) {
  CoffeeShop.getName = function(shopId, cb) {
    CoffeeShop.findById(shopId, function(err, instance) {
      var response = "Name of coffee shop is " + instance.name;
      console.log(cb);
      cb(null, response);
    });
  }

  CoffeeShop.remoteMethod(
    'getName', {
      http: {
        path: '/getname',
        verb: 'get'
      },
      accepts: {
        arg: 'id',
        type: 'number',
        http: {
          source: 'query'
        }
      },
      returns: {
        arg: 'name',
        type: 'string'
      }
    }
  );
};
