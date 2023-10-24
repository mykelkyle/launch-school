require "minitest/autorun"
require "minitest/reporters"
Minitest::Reporters.use!

class Test < Minitest::Test

  def setup
    @list = [1, 2, "xyzd"]
  end

  def test_type
    refute(@list.include?("xyz"))
  end
end
