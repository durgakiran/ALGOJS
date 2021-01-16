import Anagram from './Anagram';


describe('Anagram', () => {
    it('should return false for unequal strings', () => {
        expect(Anagram('first', 'second')).toBe(false);
    })
})

