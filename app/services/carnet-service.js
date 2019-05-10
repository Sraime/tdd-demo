const CarnetService = {

  list: [],

  save(object) {
    const errors = this.validateContact(object);
    if (errors) return errors;
    if (
      this.list.findIndex(e => e.nom === object.nom && e.prenom === object.prenom)
      > -1
    ) { return { exist: true }; }
    this.list.push(object);
    return null;
  },

  validateContact(object) {
    const missing = [];
    const required = ['nom', 'prenom', 'tel'];
    required.forEach((prop) => {
      if (!object[prop]) { missing.push(prop); }
    });
    return missing.length ? { missing } : null;
  },

};

module.exports = CarnetService;
