import {describe, expect, test} from '@jest/globals';

const getAllFilms = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/films/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      const responseJson = await response.json()
      return responseJson
  } catch (err) {
    return err
  }
}


describe('return all films', () => {
  test(getAllFilms, async () => {
    expect(await getAllFilms()).toEqual({error: 'Unauthorized.'});
  });
});