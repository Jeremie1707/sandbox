class VendingMachine
  # TODO: add relevant getter/setter to this class to make the scenarios work properly.

  def initialize(snack_price_cents, snacks)
    @amount_cents = 0
    @snacks = snacks
    @snack_price_cents = snack_price_cents
  end

  def insert_coin(value_cents)
    # TODO: what happens to @snacks, @amount_cents and @snack_price_cents
    # when the user inserts a coin?
  end

  def buy_snack
    # TODO: what happens to @snacks, @amount_cents and @snack_price_cents
    # when the user pushes a button to buy a Snack?
  end
end
