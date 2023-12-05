counter=0
max=10

while [[ $counter -le 5 ]]
do
  echo $counter
  ((counter++))
done
