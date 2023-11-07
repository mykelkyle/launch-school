class Anagram
  attr_reader :word

  def initialize(word)
    @word = word
  end

  def get_letter_count(v)
    hsh = {}
    v.chars.each do |char|
      if !hsh[char.downcase]
        hsh[char.downcase] = 1
      else
        hsh[char.downcase] += 1
      end
    end
    hsh
  end

  def match(arr)
    detector_hsh = get_letter_count(word)
    result = []

    arr.each do |word1|
      next if word.downcase == word1.downcase

      anagram_hsh = get_letter_count(word1)
      result << word1 if detector_hsh == anagram_hsh
    end

    result
  end
end

detector = Anagram.new('corn')
p anagrams = detector.match(["corn", "dark", "Corn", "rank", "CORN", "cron", "park"])
