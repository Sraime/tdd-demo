const CarnetService = {

  list: [],

  save(object) {
    const errors = this.validateContact(object); 
    if(errors) return errors;
    this.list.push(object);
  },

  validateContact(object) {
    if(!object.tel)
      return { missing: [ 'tel' ] };
    return null;
  }

};

module.exports = CarnetService;
