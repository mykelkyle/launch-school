# class Shelter
#   @@adoptions = []
#   @@p_pets = 0
#   @@b_pets = 0

#   def adopt(owner, pet)
#     @@adoptions << [owner, pet]
#     if owner.name == "P Hanson"
#       @@p_pets += 1
#     else
#       @@b_pets += 1
#     end
#   end

#   def print_adoptions
#     puts "P Hanson has adopted the following pets: "
#     @@adoptions.each do |pair|
#       if pair[0].name == "P Hanson"
#         puts "A #{pair[1].animal} named #{pair[1]}"
#       end
#     end

#     puts "B Holmes has adopted the following pets:"
#     @@adoptions.each do |pair|
#       if pair[0].name == "B Holmes"
#         puts "A #{pair[1].animal} named #{pair[1]}"
#       end
#     end
#   end
# end

# class Pet
#   attr_reader :animal

#   def initialize(animal, name)
#     @animal = animal
#     @name = name
#   end

#   def to_s
#     @name
#   end
# end

# class Owner < Shelter
#   attr_reader :name

#   def initialize(name)
#     @name = name
#   end

#   def number_of_pets
#     if self.name == "P Hanson"
#       @@p_pets
#     else
#       @@b_pets
#     end
#   end

#   def to_s
#     @name
#   end
# end

class Pet
  attr_reader :animal, :name

  def initialize(animal, name)
    @animal = animal
    @name = name
  end

  def to_s
    "A #{animal} named #{name}"
  end
end

class Owner
  attr_reader :name, :pets

  def initialize(name)
    @name = name
    @pets = []
  end

  def add_pet(pet)
    @pets << pet
  end

  def number_of_pets
    pets.size
  end

  def print_pets
    puts pets
  end
end

class Shelter
  def initialize
    @owners = {}
  end

  def adopt(owner, pet)
    owner.add_pet(pet)
    @owners[owner.name] ||= owner
  end

  def print_adoptions
    @owners.each_pair do |name, owner|
      puts "#{name} has adopted the following pets:"
      owner.print_pets
    end
  end
end

butterscotch = Pet.new('cat', 'Butterscotch')
pudding      = Pet.new('cat', 'Pudding')
darwin       = Pet.new('bearded dragon', 'Darwin')
kennedy      = Pet.new('dog', 'Kennedy')
sweetie      = Pet.new('parakeet', 'Sweetie Pie')
molly        = Pet.new('dog', 'Molly')
chester      = Pet.new('fish', 'Chester')

phanson = Owner.new('P Hanson')
bholmes = Owner.new('B Holmes')

shelter = Shelter.new
shelter.adopt(phanson, butterscotch)
shelter.adopt(phanson, pudding)
shelter.adopt(phanson, darwin)
shelter.adopt(bholmes, kennedy)
shelter.adopt(bholmes, sweetie)
shelter.adopt(bholmes, molly)
shelter.adopt(bholmes, chester)
shelter.print_adoptions
puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."
