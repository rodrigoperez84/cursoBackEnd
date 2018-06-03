var number = function(busStops){
  var total = 0
  for (var i = 0; i < busStops.length; i++) {
    total += (busStops[i][0] - busStops[i][1])
  }
   return total
 }

