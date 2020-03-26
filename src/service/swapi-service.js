export default class SwapiService {
  _apiBase = 'https://ipinfo.io';
  _apiKey = '02b9d03f55a82e';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };
}

