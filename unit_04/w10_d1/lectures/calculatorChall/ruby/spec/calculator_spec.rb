require "./calculator"

RSpec.describe Calculator do
  before(:each) do
    @calculator = Calculator.new
  end

  describe "#add" do
    it "adds two numbers" do
      actual = @calculator.add(2, 3)
      expectation = 5
      expect(actual).to eq(expectation)
    end
  end

  describe "#subtract" do
    it "subtracts two numbers" do
      actual = @calculator.subtract(2, 3)
      expectation = -1
      expect(actual).to eq(expectation)
    end
  end

  describe "#multiply" do
    it "multiplys two numbers" do
      actual = @calculator.multiply(2, 3)
      expectation = 6
      expect(actual).to eq(expectation)
    end
  end

  describe "#divide" do
    it "divides two numbers" do
      actual = @calculator.divide(6, 3)
      expectation = 2
      expect(actual).to eq(expectation)
    end
  end

  context "with previous answer of 5 found" do
    before(:each) do
      @calculator.add(2, 3)
    end

    describe "#add" do
      it "adds a number to previous answer" do
        expect(@calculator.add(2)).to eq(5 + 2)
        expect(@calculator.add(2)).to eq(5 + 2 + 2)
      end
    end

    describe "#subtract" do
      it "subtracts a number to previous answer" do
        expect(@calculator.subtract(2)).to eq(5 - 2)
        expect(@calculator.subtract(2)).to eq(5 - 2 - 2)
      end
    end

    describe "#multiply" do
      it "multiplys a number to previous answer" do
        expect(@calculator.multiply(2)).to eq(5 * 2)
        expect(@calculator.multiply(2)).to eq(5 * 2 * 2)
      end
    end

    describe "#divide" do
      it "divides a number to previous answer" do
        expect(@calculator.divide(2)).to eq(5 / 2)
        expect(@calculator.divide(2)).to eq(5 / 2 / 2)
      end
    end
  end
end
