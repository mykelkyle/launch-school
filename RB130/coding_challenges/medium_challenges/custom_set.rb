# frozen_string_literal: true

class CustomSet
  def initialize(arr = [])
    @values = arr
  end

  def empty?
    values.empty?
  end

  def contains?(int)
    values.include?(int) ? true : false
  end

  def common_vals(other)
    values.select do |val|
      other.values.include?(val)
    end
  end

  def subset?(other)
    return true if empty?

    common_vals(other) == values
  end

  def disjoint?(other)
    common_vals(other).empty?
  end

  def eql?(other)
    values.uniq.sort == other.values.sort
  end

  def add(int)
    values.push(int) unless values.include?(int)
    self
  end

  def ==(other)
    values == other.values
  end

  def intersection(other)
    self.class.new(common_vals(other))
  end

  def difference(other)
    self.class.new(values.reject { |val| other.values.include?(val) })
  end

  def union(other)
    combined = values << other.values
    self.class.new(combined.flatten.uniq.sort)
  end

  protected

  attr_reader :values
end

# p set.values
# p set.contains?(1)
