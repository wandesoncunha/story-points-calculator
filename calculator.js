const SKILL_SCORES = Object.freeze({
  NO_SKILL: 0,
  BEGINNER: 1,
  MIDDLE: 2,
  EXPERT: 3,
});

const RISK_SCORE = Object.freeze({
  NO_RISK: 0,
  LOW: 1,
  MIDDLE: 2,
  HIGH: 3,
});

const WORKS_SCORE = Object.freeze({
  LOW: 1,
  MIDDLE: 2,
  HIGH: 3,
});

const calculateRiskPoints = (skillScore, riskScore) => {
  if (skillScore > SKILL_SCORES.BEGINNER) {
    return riskScore;
  }

  const riskMultiplier = skillScore === SKILL_SCORES.NO_SKILL ? 3 : 2;

  return riskScore * riskMultiplier;
};

const calculateWorksPoints = (skillScore, worksScore, riskScore) => {
  const worksMutiplier =
    skillScore === SKILL_SCORES.EXPERT && riskScore < RISK_SCORE.HIGH ? 1 : 2;

  return worksScore * worksMutiplier;
};

const calculateComplexityPoints = (skillScore, worksScore, riskScore) => {
  const worksPoints = calculateWorksPoints(skillScore, worksScore, riskScore);
  const riskPoints = calculateRiskPoints(skillScore, riskScore);

  const simpleComplexity = worksPoints + riskPoints;

  if (simpleComplexity === 1) {
    return 1;
  } else if (simpleComplexity <= 2) {
    return 2;
  } else if (simpleComplexity <= 4) {
    return 3;
  } else if (simpleComplexity <= 6) {
    return 5;
  } else if (simpleComplexity <= 8) {
    return 8;
  } else {
    return 13;
  }
};
