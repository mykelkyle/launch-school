require "minitest/autorun"
require "minitest/reporters"
Minitest::Reporters.use!

class Test < Minitest::Test

  def setup
  end

  def test_type
    assert_kind_of(Numeric, @value)
  end
end
