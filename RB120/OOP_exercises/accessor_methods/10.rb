class Person
  def name
    "#{@first_name} #{@last_name}"
  end

  def name=(n)
    @first_name = n.split(" ")[0]
    @last_name = n.split(" ")[1]
  end
end

person1 = Person.new
person1.name = 'John Doe'
puts person1.name
