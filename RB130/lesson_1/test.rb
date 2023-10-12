def welcome(str)
  p block_given?
end

welcome('Hello') { 'there' } # => Hello there
welcome('Hey') { 'Joe' }   # => Hey Joe
welcome('Hi!')                # => Hi! (there's a space after the !)
