require "minitest/autorun"
require "minitest/reporters"

Minitest::Reporters.use!
require_relative "text"

class TextTest < Minitest::Test

  def setup
    @file = File.open("test.txt", "r")
  end

  def test_swap
    text = Text.new(@file.read)
    actual_text = text.swap("a", "e")
    expected_text = Text.new(File.read("test_swap.txt"))

    assert_equal(expected_text.text, actual_text)
  end

  def test_word_count
    text = Text.new(@file.read)

    assert_equal(72, text.word_count)
  end

  def teardown
    @file.close
    puts "File has been closed: #{@file.closed?}"
  end
end
