document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#mytextarea").innerHTML = "Cargando datos";
  loadData();
});

async function loadData() {
  let textarea = document.querySelector("#mytextarea");
  let data = await (
    await fetch("https://mocki.io/v1/02829414-c709-4729-af75-c759f2085674")
  ).json();

  document.querySelector("#mytextarea").innerHTML ="";
  data.forEach((course) => {
    textarea.innerHTML += course.id + ": "+course.name+"\n";
  });
}
