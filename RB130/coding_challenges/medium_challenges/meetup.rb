# frozen_string_literal: true

require 'date'
require 'pry'

class Meetup
  DAY_NAMES = {
    1 => 'monday',
    2 => 'tuesday',
    3 => 'wednesday',
    4 => 'thursday',
    5 => 'friday',
    6 => 'saturday',
    7 => 'sunday'
  }.freeze

  attr_reader :year, :month

  def initialize(year, month)
    @year = year
    @month = month
    @last_day = Date.new(year, month, -1).mday
  end

  def day(day, descriptor)
    range = schedule(descriptor.downcase)

    result = 0
    range.each do |d|
      result = d if DAY_NAMES[Date.civil(year, month, d).cwday] == day.downcase
      break if @last_day == d
    end

    if result.zero?
      nil
    else
      Date.civil(year, month, result)
    end
  end

  def schedule(descriptor)
    case descriptor
    when 'first'
      (1..7)
    when 'second'
      (8..14)
    when 'third'
      (15..21)
    when 'fourth'
      (22..28)
    when 'fifth'
      (29..31)
    when 'last'
      last_dowm_range
    when 'teenth'
      (13..19)
    end
  end

  def last_dowm_range
    case @last_day
    when 28
      (22..28)
    when 29
      (23..29)
    when 30
      (24..30)
    when 31
      (25..31)
    end
  end
end

meetup = Meetup.new(2015, 10)
p meetup.day('Wednesday', 'fifth')

# We want to create a Meetup class that takes in a `year` and `month` integer value and initializes a meetup object.
#
# Then, we want to create a `day` instance method that takes in a string
# representing the day and descriptor and returns a Date object that
# has the proper year, month, and descriptor for the meetup.
#
# **strings are case insensitive**
#
# e.g.
# meetup = Meetup.new(2013, 7)
# meetup.day("Thursday", "first") #=> Date.civil(2013, 7, 4)
#
# Determine the last day of the month
# Based on the descriptor, iterate through the 7 days that correspond with that particular week.
# Return a Date object if the day value matches with one of those days
