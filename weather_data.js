export class WeatherData {
  getWeatherData() {
    return fetch('http://api.wunderground.com/api/6dcd84d359914e7c/conditions/q/MI/Detroit.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      return JSON.parse(text);
    })
  }
}