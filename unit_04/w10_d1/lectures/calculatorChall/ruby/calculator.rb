class Calculator
  def initialize
    @previous_answer = 0
  end

  def add(x, y = @previous_answer)
    @previous_answer = x + y
  end

  def subtract(x = @previous_answer, y = 0)
    @previous_answer = x - y
  end

  def subtract(x, y = nil)
    @previous_answer = if !y && @previous_answer
                         @previous_answer - x
                       else
                         @previous_answer = x - y
                       end
  end

  def multiply(x, y = @previous_answer)
    @previous_answer = x * y
  end

  def divide(x, y = nil)
    @previous_answer = if !y && @previous_answer
                         @previous_answer / x
                       else
                         @previous_answer = x / y
                       end
  end
end
