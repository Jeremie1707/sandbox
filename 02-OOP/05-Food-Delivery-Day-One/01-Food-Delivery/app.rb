# TODO: require relevant files to bootstrap the app.
# Then you can test your program with:
#   ruby app.rb

require_relative 'app/repositories/meal_repository'

meal_repository = MealRepository.new("data/meal_repository.csv")

