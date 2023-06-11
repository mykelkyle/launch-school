def get_grade(score1, score2, score3)
  average = ((score1 + score2 + score3) / 3).to_f
  grade = case average
            when (90..100)
              "A"
            when (80..89)
              "B"
            when (70..79)
              "C"
            when (60..69)
              "D"
            else
              "F"
            end
  grade
end

# test cases


p get_grade(95, 90, 93) == "A"
p get_grade(50, 50, 95) == "D"

=begin
Problem -
Take three integer arguments, determine the mean average of all scores, and return the grade letter values associated with that grade

Rules -
Tested values are all between 0 and 100

Example -
(95, 90, 93) => (278 / 3) => 92.666 => A

Algorithm -
Sum all arguments and divide by 3 to find the mean average of all scores
Capture this value in a float so as to avoid rounding of the number
Use case statement to compare averaged value to numerical scores
Return corresponding grade value
=end
