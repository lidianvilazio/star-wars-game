# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

good = Board.create(side: 'good', character:"./images/rob.png")
bad = Board.create(side: 'bad', character:"./images/fatjabba.png")
# lidian = User.create(user_name: 'lidian', character: "./images/tiefighter.png", side: 'bad')
# abby = User.create(user_name: 'Abby', character: "./images/tiefighter2.png", side: 'bad')
