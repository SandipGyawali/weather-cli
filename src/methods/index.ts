function getTemperatureEmoji(temperature: number) {
  if (temperature < 0.0) {
    return "❄️";
  } else if (temperature >= 0.0 && temperature < 10.0) {
    return "☁️";
  } else if (temperature >= 10.0 && temperature < 20) {
    return "🌥️";
  } else if (temperature >= 20 && temperature < 30) {
    return "🌤️";
  } else {
    return "☀️";
  }
}

export { getTemperatureEmoji };
