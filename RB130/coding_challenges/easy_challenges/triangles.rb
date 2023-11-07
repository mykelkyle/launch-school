class Triangle
  attr_reader :first_side, :second_side, :third_side

  def initialize(first_side, second_side, third_side)
    @first_side = first_side
    @second_side = second_side
    @third_side = third_side
    raise ArgumentError if !triangle?
  end

  def kind
    is_equilateral? ? "equilateral" : (is_scalene? ? "scalene" : "isosceles")
  end

  private

  def triangle?
    all_sides_exist && two_sides_are_greater
  end

  def two_sides_are_greater
    second_side + third_side > first_side &&
    first_side + third_side > second_side &&
    first_side + second_side > third_side
  end

  def all_sides_exist
    first_side > 0 &&
    second_side > 0 &&
    third_side > 0
  end

  def is_equilateral?
    first_side == second_side && second_side == third_side
  end

  def is_scalene?
    first_side != second_side && second_side != third_side && first_side != third_side
  end

  def is_isosceles?
    return true if !is_equilateral && !is_scalene
  end
end
