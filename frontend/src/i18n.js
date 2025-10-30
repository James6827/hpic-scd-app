// english and french
export const strings = {
  en: { library: "Library", glossary: "Glossary", quiz: "Quiz", facts: "Did you know?", score: "Your score: " },
  fr: { library: "Bibliothèque", glossary: "Glossaire", quiz: "Quiz", facts: "Le saviez-vous ?", score: "Votre score : " },
};
export function t(lang, key) { return (strings[lang] && strings[lang][key]) || key; }