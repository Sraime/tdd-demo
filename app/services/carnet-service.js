const CarnetService = {

  list: [],

  save(object) {
    const errors = this.validateContact(object); 
    if(errors) return errors;
    this.list.push(object);
  },

  validateContact(object) {

  }

};

module.exports = CarnetService;
