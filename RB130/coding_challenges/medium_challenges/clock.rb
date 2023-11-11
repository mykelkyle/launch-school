require "pry"

class Clock
  attr_reader :hours, :minutes

  def initialize(hours, minutes=nil)
    @hours = hours
    @minutes = minutes
  end

  def self.at(hours, minutes=0)
    if minutes > 60
      overflow = minutes.divmod(60)
      hours += overflow[0]
      minutes = overflow[1]
      if hours == 24
        hours = 0
      elsif hours > 23
        if hours.divmod(24)[0] > 0
          hours = hours.divmod(24)[1]
        else
          hours = hours.divmod(24)[0]
        end
      end
    end

    if minutes < 0
      overflow = minutes.divmod(60)
      hours -= overflow[0].abs
      minutes = overflow[1]

      if hours < 0
        hours = hours.divmod(24)[1]
      end
    end
    self.new(hours, minutes)
  end

  def to_s
    hours = ""
    minutes = ""

    if @hours.to_s.size == 1
      hours = "0" << @hours.to_s
    else
      hours = @hours.to_s
    end

    if @minutes.to_s.size == 1
      minutes = "0" << @minutes.to_s
    else
      minutes = @minutes.to_s
    end

    "#{hours}:#{minutes}"
  end

  def ==(other)
    self.hours == other.hours && self.minutes == other.minutes
  end

  def +(minutes)
    Clock.at(@hours, @minutes + minutes)
  end

  def -(minutes)
    Clock.at(@hours, @minutes - minutes)
  end
end

clock = Clock.at(10) + 3061
#clock = Clock.at(10) + 62
p clock.to_s
=begin
P -
Create a Clock that is independent of date
Be able to add/subtract minutes from the time represented by a given Clock object
**DO NOT mutate Clock objects when adding/subtracting minutes -- create a new Clock object**

Two clock objects that are the same time should be equal to each other

Write a class method `at` that takes an integer and returns a clock object that has an instance variable initialized to the integer (as an hour value)

Write a method `to_s` that converts the clock object's time instance variable to a formatted string "hh:mm"

Write custom `+` and `-` methods that allow the adding and subtraction of minutes from the time instance variable **using this method returns a new Clock object**
=end
