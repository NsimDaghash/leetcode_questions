/*
2140. Solving Questions With Brainpower

You are given a 0-indexed 2D integer array questions where questions[i] = [pointsi, brainpoweri].

The array describes the questions of an exam, where you have to process the questions in order (i.e., starting from question 0) 
and make a decision whether to solve or skip each question. Solving question i will earn you pointsi points but you will be unable 
to solve each of the next brainpoweri questions. If you skip question i, you get to make the decision on the next question.

For example, given questions = [[3, 2], [4, 3], [4, 4], [2, 5]]:
If question 0 is solved, you will earn 3 points but you will be unable to solve questions 1 and 2.
If instead, question 0 is skipped and question 1 is solved, you will earn 4 points but you will be unable to solve questions 2 and 3.
Return the maximum points you can earn for the exam.

 

Example 1:

Input: questions = [[3,2],[4,3],[4,4],[2,5]]
Output: 5
Explanation: The maximum points can be earned by solving questions 0 and 3.
- Solve question 0: Earn 3 points, will be unable to solve the next 2 questions
- Unable to solve questions 1 and 2
- Solve question 3: Earn 2 points
Total points earned: 3 + 2 = 5. There is no other way to earn 5 or more points.
Example 2:

Input: questions = [[1,1],[2,2],[3,3],[4,4],[5,5]]
Output: 7
Explanation: The maximum points can be earned by solving questions 1 and 4.
- Skip question 0
- Solve question 1: Earn 2 points, will be unable to solve the next 2 questions
- Unable to solve questions 2 and 3
- Solve question 4: Earn 5 points
Total points earned: 2 + 5 = 7. There is no other way to earn 7 or more points.
*/
/* explanation of the answer :
You are given a 0-indexed 2D integer array questions where questions[i] = [pointsi, brainpoweri].

The array describes the questions of an exam, where you have to process the questions in order (i.e., starting from question 0) and make 
a decision whether to solve or skip each question. Solving question i will earn you pointsi points but you will be unable to solve each of 
the next brainpoweri questions. If you skip question i, you get to make the decision on the next question.

The function maxPoints takes the questions array as input and returns the maximum points you can earn for the exam.

The function starts by getting the length of the questions array and initializing an array r of the same length with all values set to 0.

It then enters a loop that iterates through the questions in reverse order (starting from the last question). For each question, it retrieves 
the number of questions that must be skipped after answering the current question (stored in the second element of the questions[i] array, 
    which is b) and the number of points earned for answering the current question (stored in the first element of the questions[i] array, which is p).

It then checks if this is the last question in the exam (i.e., if i === n - 1). If it is, then the maximum number of points that can be earned 
is simply p, since there are no more questions to be considered. It stores this value in the r array.

If this is not the last question, the code then checks if the number of questions that must be skipped after answering this question plus the 
current question's index is greater than or equal to the total number of questions in the exam (i.e., if i + b + 1 >= n). If this is true, 
then answering this question will result in being unable to answer any more questions, so the maximum number of points that can be earned is 
the maximum of the points earned for this question (p) and the maximum number of points that can be earned by skipping this question and answering 
the remaining questions (stored in r[i+1]). It stores this value in the r array.

If neither of the above conditions is true, then answering this question does not prevent answering any more questions, 
so the maximum number of points that can be earned is the maximum of the points earned for this question (p) and the maximum number of points that 
can be earned by skipping this question and answering the remaining questions (stored in r[i+1]) and the points earned for answering the questions 
that must be skipped after answering this question (stored in r[i + b + 1]). It stores this value in the r array.

After the loop is finished, the function returns the value of r[0], which is the maximum points that can be earned for the exam, considering all possible 
decisions for each question.
*/
/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  const n = questions.length;
  const r = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    const b = questions[i][1];
    const p = questions[i][0];

    if (i === n - 1) {
      r[i] = p;
    } else if (i + b + 1 >= n) {
      r[i] = r[i + 1];
      if (p > r[i]) {
        r[i] = p;
      }
    } else {
      r[i] = r[i + 1];
      if (r[i] < p + r[i + b + 1]) {
        r[i] = p + r[i + b + 1];
      }
    }
  }

  return r[0];
};
