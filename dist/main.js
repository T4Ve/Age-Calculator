document.addEventListener("DOMContentLoaded", () => {
	// Dates

	const day = document.querySelector("#Day");
	const month = document.querySelector("#Month");
	const year = document.querySelector("#Year");

	// Outputs

	const outDays = document.querySelector(".outDays");
	const outMonths = document.querySelector(".outMonths");
	const outYears = document.querySelector(".outYears");

	// errors and btn

	const error = document.querySelectorAll(".error");
	const circleBtn = document.querySelector(".circle");

	// Actual dates

	const today = new Date();
	const actualYear = today.getFullYear();
	const actualMonth = today.getMonth() + 1;
	const actualDay = today.getDate();

	const Valid = (e) => {
		e.preventDefault();
		if (
			day.value < 1 ||
			day.value > 31 ||
			month.value < 1 ||
			month.value > 12 ||
			year.value < 1900 ||
			year.value > 2023
		) {
			error.forEach((e) => {
				e.innerHTML = "Must be <br>a valid date";
			});
		} else if (
			day.value > 30 &&
			(month.value == 2 ||
				month.value == 4 ||
				month.value == 6 ||
				month.value == 8 ||
				month.value == 9 ||
				month.value == 11)
		) {
			error.forEach((e) => {
				e.innerHTML = "That date does<br>not exist";
			});
		} else if (day.value > 28 && month.value == 2 && year.value % 4 != 0) {
			error.forEach((e) => {
				e.innerHTML = "That date does<br>not exist";
			});
		} else if (actualDay < day.value) {
			outDays.innerHTML = day.value - actualDay;
			outMonths.innerHTML = actualMonth - month.value - 1;
			outYears.innerHTML = actualYear - year.value;
			day.value = "";
			month.value = "";
			year.value = "";
			error.forEach((e) => {
				e.innerHTML = "";
			});
		} else {
			outDays.innerHTML = actualDay - day.value;
			outMonths.innerHTML = actualMonth - month.value;
			outYears.innerHTML = actualYear - year.value;
			day.value = "";
			month.value = "";
			year.value = "";
			error.forEach((e) => {
				e.innerHTML = "";
			});
		}
	};

	circleBtn.addEventListener("click", Valid);
});
