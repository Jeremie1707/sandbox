require 'csv'
require_relative '../models/meal'

class MealRepository
  def initialize(csv_path)
  @csv_path = csv_path
  @meals = []
  @next_id = 1
  load_csv

  end

  def load_csv
    csv_options = { headers: :first_row, header_converters: :symbol }
    CSV.foreach(@csv_path, csv_options) do |row|
      # byebug
      row[:id] = row[:id].to_i
      row[:price] = row[:price].to_i
      @meals << Meal.new(row)
      @next_id = row[:id]
    end
    @next_id = @meals.last.id + 1 unless @meals.empty?

  end

  def save
  end
end
