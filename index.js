function introduction (name = "Josh") {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name = "Josh", Language = "Ember.js") {
    return `Hi, my name is ${name} and I am learning to program in ${Language}.`;
  }

  function introductionWithLanguageOptional(name, Language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${Language}.`;
  }