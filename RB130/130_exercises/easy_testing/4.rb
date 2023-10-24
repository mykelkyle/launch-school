require "minitest/autorun"
require "minitest/reporters"
Minitest::Reporters.use!

class Test < Minitest::Test

  def setup
    @list = []
  end

  def test_empty
    assert_empty(@list)
  end
end
