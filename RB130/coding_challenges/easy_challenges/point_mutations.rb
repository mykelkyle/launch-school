class DNA
  attr_reader :strand

  def initialize(strand)
    @strand = strand
  end

  def hamming_distance(other)
    sequence = strand.chars
    distance = 0

    sequence.each_with_index do |v, i|
      if v != other[i]
        distance += 1 unless other[i].nil?
      end
    end

    distance
  end
end

# first_strand = DNA.new("GGACTGA")
# second_strand = DNA.new("GGACTGA")

# p first_strand.hamming_distance(second_strand) #=> 0

=begin
break first strand into characters
iterate over characters with index
for each character, compare with second strand character at the same index
if equal, next, if not, iterate counter by 1
if other strand is longer or shorter, iterate only up to the length of the smaller strand
return counter
=end
