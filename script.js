// Array to store weekly workouts
let weeklyWorkouts = [];

// Form submission
document
  .getElementById("workout-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const day = document.getElementById("day").value;
    const exercise = document.getElementById("exercise").value;
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;
    const weight = document.getElementById("weight").value;

    const workout = {
      day,
      exercise,
      sets,
      reps,
      weight,
    };

    weeklyWorkouts.push(workout);
    updateProgressTable();
    document.getElementById("workout-form").reset();
  });

// Update the progress table
function updateProgressTable() {
  const tableBody = document.querySelector("#progress-table tbody");
  tableBody.innerHTML = "";

  weeklyWorkouts.forEach((workout, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${workout.day}</td>
      <td>${workout.exercise}</td>
      <td>${workout.sets}</td>
      <td>${workout.reps}</td>
      <td>${workout.weight}</td>
      <td>
        <button class="delete-btn" onclick="deleteWorkout(${index})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Delete a workout
function deleteWorkout(index) {
  weeklyWorkouts.splice(index, 1);
  updateProgressTable();
}
