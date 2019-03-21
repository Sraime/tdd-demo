const CarnetService = {

  list: [],

  save(object) {
    this.list.push(object);
  },

};

module.exports = CarnetService;
