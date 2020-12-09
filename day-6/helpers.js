const parseResults = (input) => {
  const groups = input.split("\n\n");
  return groups.map((group) => group.split("\n"));
};

const getQuestionsWithAnyYes = (groupResults) => {
  return [...new Set(groupResults.join("").split(""))];
};

const getQuestionsWithOnlyYes = (groupResults) => {
  const questions = getQuestionsWithAnyYes(groupResults);
  const results = groupResults.join("");
  return questions.filter((question) => {
    var regex = new RegExp(question, "g");
    return results.match(regex).length === groupResults.length;
  });
};

module.exports = {
  parseResults,
  getQuestionsWithAnyYes,
  getQuestionsWithOnlyYes,
};
