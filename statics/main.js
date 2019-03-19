this.onFieldChange = function onFieldChange() {
  if (document.getElementById('input-nom').value === '') return;
  if (document.getElementById('input-prenom').value === '') return;
  document.getElementById('input-tel');
  document.getElementById('btn-enregistrer').disabled = false;
};
