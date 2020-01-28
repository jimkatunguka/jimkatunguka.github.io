class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision=1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
}
  
/*
let clock = new ExtendedClock({ template: 'h:m:s' });
clock.start();
*/