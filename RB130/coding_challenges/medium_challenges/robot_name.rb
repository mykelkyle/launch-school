class Robot
  LETTERS = ("A".."Z").to_a
  NUMBERS = (0..9).to_a

  @@name_bank = []
  attr_reader :name

  def initialize
    loop do
      new_name = create_name
      @name = new_name unless name_already_exists?(new_name)
      if @name
        @@name_bank << @name
        break
      end
    end
  end

  def name_already_exists?(new_name)
    @@name_bank.include?(new_name)
  end

  def create_name
    str = ""
    5.times do |i|
      if i < 2
        str << LETTERS.sample
      else
        str << NUMBERS.sample.to_s
      end
    end
    str
  end

  def reset
    @@name_bank.delete(@name)
    loop do
      @name = create_name
      break unless name_already_exists?(name)
    end
  end
end
