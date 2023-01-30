# Reformat the following case statement so that it only takes up 5 lines.

stoplight = ['green', 'yellow', 'red'].sample

case stoplight
when 'green'  then puts 'Go!'
when 'yellow' then puts 'Slow down!'
else               puts 'Stop!'
end

# One thing to keep in mind with this formatting style is that it works best when all of the when clauses have exactly one statement. If you have multiple statements, put them on separate lines, just like the original code