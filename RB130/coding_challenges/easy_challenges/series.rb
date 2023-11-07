class Series
  def initialize(str)
    @str = str
  end

  def slices(digits)
    raise ArgumentError if digits > @str.size

    slices = []

    @str.chars.each_with_index do |v, i|
      break if i == @str.size
      sub_arr = []
      counter = i

      digits.times do
        break if @str[counter] == nil
        sub_arr << @str[counter].to_i
        counter += 1
      end

      slices << sub_arr unless sub_arr.size != digits
    end

    slices
  end
end
