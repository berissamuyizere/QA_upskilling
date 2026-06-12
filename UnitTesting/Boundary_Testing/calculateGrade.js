function getGrade(score) {
 if(score >= 80) return 'A';
 if(score >= 70) return 'B';
 if(score >= 60) return 'C';
 return 'F';
}
module.exports = {getGrade}