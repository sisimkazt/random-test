// Таймер скидки (6 часов от текущего времени)
function countdown() {
  const endTime = new Date().getTime() + 6 * 60 * 60 * 1000; // 6 часов от текущего времени
  const interval = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "Акція завершена!";
    } else {
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);
      document.getElementById("countdown").innerHTML = `${padNumber(
        hours
      )}:${padNumber(minutes)}:${padNumber(seconds)}`;
    }
  }, 1000);
}

// Функция для добавления ведущих нулей к числам (например, 1 станет 01)
function padNumber(num) {
  return num < 10 ? "0" + num : num;
}

// Запускаем таймер
countdown();
