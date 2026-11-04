module.exports = {
  // On retire '@commitlint/config-conventional' pour créer notre propre règle de lecture
  parserPreset: {
    parserOpts: {
      // Cette Regex isole ce qui est entre crochets (type) et le message qui suit (subject)
      headerPattern: /^\[(.*)\] (.*)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    // Interdit d'oublier la balise
    'type-empty': [2, 'never'],
    
    // Liste exacte des préfixes autorisés entre les crochets
    // [+] : Ajout (nouvelle fonctionnalité, nouveau fichier)
    // [-] : Suppression (retrait de code mort, suppression de dépendance)
    // [~] : Modification (refactor, correction de bug, mise à jour de dépendance)
    'type-enum': [2, 'always', ['+', '-', '~']],
    
    // Désactive la vérification des majuscules/minuscules sur le préfixe
    'type-case': [0],
    
    // Interdit de faire un commit sans message après les crochets
    'subject-empty': [2, 'never'],
  },
};