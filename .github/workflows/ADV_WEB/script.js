
const headerColors = [
    "#3f51b5",
    "#673ab7",
    "#009688",
    "#f44336",
    "#ff9800",
    "#795548"
  ];
  
  function changeTheme() {
    
    const randomColor = headerColors[Math.floor(Math.random() * headerColors.length)];
    
    document.getElementById("resumeHeader").style.backgroundColor = randomColor;

  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const changeThemeBtn = document.getElementById("changeThemeBtn");
    changeThemeBtn.addEventListener("click", changeTheme);
  });
  