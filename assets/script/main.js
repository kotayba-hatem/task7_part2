// Task 1: change background color
document.addEventListener("DOMContentLoaded", function () {
  const iphones = document.querySelectorAll(".iphone-images img");
  iphones.forEach((iphone, index) => {
    iphone.addEventListener("click", () => {
      const colors = [
        "#d48ea3",
        "#a3a099",
        "#95aece",
        "#615c53",
        "#b89cc4",
        "#ff2568",
      ];
      document.querySelector(".task1 .content").style.backgroundColor =
        colors[index];
    });
  });

  // Task 2: dark mode
  const modeIcon = document.querySelector(".mode-icon");
  modeIcon.addEventListener("click", () => {
    const task2Content = document.querySelector(".task2 .content");
    task2Content.classList.toggle("dark-mode");
    if (task2Content.classList.contains("dark-mode")) {
      modeIcon.classList.remove("fa-moon");
      modeIcon.classList.add("fa-sun");
    } else {
      modeIcon.classList.remove("fa-sun");
      modeIcon.classList.add("fa-moon");
    }
  });

  // Task 3: Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const faqContent = item.querySelector(".faq-content");
      const icon = item.querySelector("i");
      if (faqContent.style.display === "block") {
        faqContent.style.display = "none";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      } else {
        faqContent.style.display = "block";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });

  // Task 4: Star Rating
  const stars = document.querySelectorAll(".stars i");
  const ratingText = document.querySelector(".rating-text");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const rating = star.getAttribute("data-rating");
      stars.forEach((s) => {
        if (s.getAttribute("data-rating") <= rating) {
          s.classList.add("selected");
          s.style.color = "yellow";
        } else {
          s.classList.remove("selected");
          s.style.color = "";
        }
      });
      switch (rating) {
        case "1":
          ratingText.textContent = "It is terrible";
          break;
        case "2":
          ratingText.textContent = "It is bad";
          break;
        case "3":
          ratingText.textContent = "It is ok";
          break;
        case "4":
          ratingText.textContent = "It is good";
          break;
        case "5":
          ratingText.textContent = "It is awesome";
          break;
        default:
          ratingText.textContent = "It is awesome";
      }
    });
  });
});
