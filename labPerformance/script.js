const dev = document.createElement('div');
dev.style.height = '400px'; 
dev.style.width = '400px';
dev.style.backgroundColor = '#f0f0f0'; 

function appendValue(Value) {
  document.getElementById("display").value += Value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  var display = document.getElementById("display").value;
  try {
    document.getElementById("display").value = eval(display);
  } catch (error) {
    alert("Invalid expression");
  }
}

function deleteLast() {
  var display = document.getElementById("display").value;
  document.getElementById("display").value = display.substring(0, display.length - 1);
}

function calculatePercentage() {
  var display = document.getElementById("display").value;
  try {
    document.getElementById("display").value = eval(display) / 100;
  } catch (error) {
    alert("Invalid percentage expression");
  }
}

const pannel = document.createElement("input");
pannel.setAttribute("id", "display");

const buttons = [
  { label: "C", onclick: clearDisplay },
  { label: "⌫", onclick: deleteLast }, 
  { label: "%", onclick: calculatePercentage },
  { label: "/", onclick: () => appendValue("/") },
  { label: "7", onclick: () => appendValue("7") },
  { label: "8", onclick: () => appendValue("8") },
  { label: "9", onclick: () => appendValue("9") },
  { label: "*", onclick: () => appendValue("*") },
  { label: "4", onclick: () => appendValue("4") },
  { label: "5", onclick: () => appendValue("5") },
  { label: "6", onclick: () => appendValue("6") },
  { label: "-", onclick: () => appendValue("-") },
  { label: "1", onclick: () => appendValue("1") },
  { label: "2", onclick: () => appendValue("2") },
  { label: "3", onclick: () => appendValue("3") },
  { label: "+", onclick: () => appendValue("+") },
  { label: "0", onclick: () => appendValue("0") },
  { label: ".", onclick: () => appendValue(".") },
  { label: "=", onclick: calculate },
];

const buttonContainer = document.createElement("div");
buttonContainer.className = "button-container";

buttons.forEach(button => {
  const btn = document.createElement("button");
  btn.innerHTML = button.label;
  btn.addEventListener("click", button.onclick);
  buttonContainer.appendChild(btn);
});

dev.appendChild(pannel);
dev.appendChild(buttonContainer);

document.body.appendChild(dev);

const style = document.createElement("style");
style.innerHTML = `
  #display {
    width: 100%;
    height: 70px;
    margin: 10px 0;
    font-size: 24px;
    padding: 10px;
    background-color: #DBFFCB;
  }
  .button-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
  }
  button {
    width: 100%;
    height: 60px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #FF6363;
    cursor: pointer;
  }
  div {
    padding: 10px;
    box-sizing: border-box;
    background-color: #BEE4D0;

  }
`;
document.head.appendChild(style);