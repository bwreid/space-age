var SpaceAge = function (seconds) {
  this.earthYearInSeconds = 31557600;
  this.seconds = seconds;

  this.roundDec = function (num) {
    return parseFloat(num.toFixed(2));
  }

  var planets = {
    onEarth: 1,
    onMercury: 0.2408467,
    onVenus: 0.61519726,
    onMars: 1.8808158,
    onJupiter: 11.862615,
    onSaturn: 29.447498,
    onUranus: 84.016846,
    onNeptune: 164.79132
  };

  this.constructFn = function (fn) {
    return 'return this.roundDec(this.seconds ' +
           '/ (this.earthYearInSeconds * ' + 
           planets[fn] + 
           '));'
  }

  for ( planetFnName in planets ) {
    this[planetFnName] = new Function('', this.constructFn(planetFnName));
  }
}

module.exports = SpaceAge;