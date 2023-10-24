class TextAnalyzer
  def process
    file = File.open("sample_text.txt", "r")
    yield(file.read)
  end
end

analyzer = TextAnalyzer.new

#words
analyzer.process { |text| puts "#{text.split(/\s+/).size} words"}

#paragraphs
analyzer.process { |text| puts "#{text.split(/\n\n/).size} paragraphs"}

#lines
analyzer.process { |text| puts "#{text.lines.count} lines"}
