const CarnetService = {

  list: [],

  save(object) {
    const errors = this.validateContact(object);
    if (errors) return errors;
    this.list.push(object);
  },

  validateContact(object) {
    let missing;
    const required = ['nom', 'tel'];
    required.forEach((prop) => {
      if (!object[prop]) {
        missing = [prop];
      }
    });
    return missing ? { missing } : null;
  },

};

module.exports = CarnetService;
