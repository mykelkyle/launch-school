# frozen_string_literal: true

require 'pry'

class Clock
  attr_reader :hours, :minutes

  def initialize(hours, minutes = nil)
    @hours = hours
    @minutes = minutes
  end

  def self.at(hours, minutes = 0)
    if minutes > 60
      overflow = minutes.divmod(60)
      hours += overflow[0]
      minutes = overflow[1]
      if hours == 24
        hours = 0
      elsif hours > 23
        hours = if (hours.divmod(24)[0]).positive?
                  hours.divmod(24)[1]
                else
                  hours.divmod(24)[0]
                end
      end
    end

    if minutes.negative?
      overflow = minutes.divmod(60)
      hours -= overflow[0].abs
      minutes = overflow[1]

      hours = hours.divmod(24)[1] if hours.negative?
    end
    new(hours, minutes)
  end

  def to_s
    hours = if @hours.to_s.size == 1
              '0' << @hours.to_s
            else
              @hours.to_s
            end

    minutes = if @minutes.to_s.size == 1
                '0' << @minutes.to_s
              else
                @minutes.to_s
              end

    "#{hours}:#{minutes}"
  end

  def ==(other)
    hours == other.hours && minutes == other.minutes
  end

  def +(other)
    Clock.at(@hours, @minutes + other)
  end

  def -(other)
    Clock.at(@hours, @minutes - other)
  end
end

clock = Clock.at(10) + 3061
# clock = Clock.at(10) + 62
p clock.to_s
# P -
# Create a Clock that is independent of date
# Be able to add/subtract minutes from the time represented by a given Clock object
# **DO NOT mutate Clock objects when adding/subtracting minutes -- create a new Clock object**
#
# Two clock objects that are the same time should be equal to each other
#
# Write a class method `at` that takes an integer and returns a clock object that has an instance variable initialized to the integer (as an hour value)
#
# Write a method `to_s` that converts the clock object's time instance variable to a formatted string "hh:mm"
#
# Write custom `+` and `-` methods that allow the adding and subtraction of minutes from the time instance variable **using this method returns a new Clock object**
