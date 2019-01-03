describe('Meerkat', () => {
  let myMeerkat;

  beforeEach(() => {
    myMeerkat = new Meerkat('Joy');
  });

  describe('#new', () => {
    it('sets the properties of the Meerkat', () => {
      expect(myMeerkat.name).toEqual('Joy');
      expect(myMeerkat.enthusiasm).toEqual(10);
    });
  });

  describe('#boostEnthusiasm', () => {
    it('increases enthusiasm by 10', () => {
      myMeerkat.enthusiasm = 10;
      myMeerkat.boostEnthusiasm();
      expect(myMeerkat.enthusiasm).toEqual(20);
    });
  });
});
