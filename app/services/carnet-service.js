const CarnetService = {

  list: [],

  save(object) {
    this.list.push({ nom: "CANARY", prenom: "Alice", tel: "0102030405" })
  },

};

module.exports = CarnetService;
