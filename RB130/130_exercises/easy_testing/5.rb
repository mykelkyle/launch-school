require "minitest/autorun"
require "minitest/reporters"
Minitest::Reporters.use!

class Test < Minitest::Test

  def setup
    @list = ["xyz", 1, 2]
  end

  def test_includes?
    assert_includes(@list, "xyz")
  end
end
