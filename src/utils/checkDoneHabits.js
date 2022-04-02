function checkDoneHabits(habits) {
  let sum = 0;
  habits?.forEach((habit) => {
    if (habit.done) sum += 1 / habits.length;
  });
  return sum;
}

export default checkDoneHabits;
