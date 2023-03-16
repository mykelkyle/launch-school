def prompt(msg)
  puts "=> #{msg}"
end

def get_noun
  prompt("Provide a noun:")
  gets.chomp
end

def get_verb
  prompt("Provide a verb:")
  gets.chomp
end

def get_adverb
  prompt("Provide an adverb:")
  gets.chomp
end

def get_adjective
  prompt("Provide an adjective:")
  gets.chomp
end

def madlib
  noun = get_noun
  verb = get_verb
  adverb = get_adverb
  adjective = get_adjective

  prompt("Do you #{verb} your #{adjective} #{noun} #{adverb}? That's hilarious!")
end

madlib
