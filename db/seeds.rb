# db/seeds.rb

greetings = [
  'Hey there?',
  'Hi there!',
  'Greetings!',
  'Buenos dias!',
  'Welcome!'
]

greetings.each do |greeting|
  Message.find_or_create_by(content: greeting)
end
