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
  end
end
