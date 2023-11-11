# frozen_string_literal: true

class SimpleLinkedList
  attr_accessor :values

  def self.from_a(arr)
    return new(arr) if arr.nil? || arr.empty?

    arr = arr.clone
    new_arr = []
    loop do
      new_arr << Element.new(arr.pop, new_arr.last)
      break if arr.empty?
    end

    new(new_arr)
  end

  def initialize(values = [])
    @values = values
  end

  def size
    values.nil? ? 0 : values.size
  end

  def empty?
    values.empty?
  end

  def peek
    return nil if values.nil? || values.empty?

    values.last.datum
  end

  def head
    values.last
  end

  def push(element)
    values.push(Element.new(element, head))
  end

  def pop
    values.pop.datum
  end

  def to_a
    values.map(&:datum).reverse
  end

  def reverse
    reversed_data = values.map(&:datum)
    self.class.from_a(reversed_data)
  end
end

class Element
  attr_reader :datum, :next

  def initialize(value, next_val=nil)
    @datum = value
    @next = next_val
  end

  def tail?
    @next ? false : true
  end

  def next
    @next
  end
end
