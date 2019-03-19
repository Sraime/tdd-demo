this.onFieldChange = function onFieldChange() {
  if (document.getElementById('input-nom').value === '') return;
  document.getElementById('input-prenom');
  document.getElementById('input-tel');
  document.getElementById('btn-enregistrer').disabled = false;
};
