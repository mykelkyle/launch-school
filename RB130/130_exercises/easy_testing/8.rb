require "minitest/autorun"
require "minitest/reporters"
Minitest::Reporters.use!

class Test < Minitest::Test

  def setup
  end

  def test_type
    assert_same(@list, @list.process)
  end
end
