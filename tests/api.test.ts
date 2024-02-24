import {describe, expect, test} from '@jest/globals';

const getAllFilms = () => {
    fetch('/api/films/all')
}

describe('return all films', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
});