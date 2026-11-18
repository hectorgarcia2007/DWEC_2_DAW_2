class FilterStrategy {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  filter(array, data) {
    return this.strategy.filter(array, data);
  }
}
class FilterTaskById {
  filter(array, data) {
    return array.filter((x) => x.id === data);
  }
}
class FilterTaskByNombre {
  filter(array, data) {
    return array.filter((x) => x.nombre === data);
  }
}
class FilterTaskByTitle {
  filter(array, data) {
    return array.filter((x) => x.title === data);
  }
}
class FilterTaskByDescription {
  filter(array, data) {
    return array.filter((x) => x.description === data);
  }
}
class FilterTaskByPriority {
  filter(array, data) {
    return array.filter((x) => x.priority === data);
  }
}
class FilterTaskByDone {
  filter(array, data) {
    return array.filter((x) => x.done === data);
  }
}

function filterArray() {
  const idValue = document.getElementById("idInpId").value;
  const nombreValue = document.getElementById("idInpNombre").value;
  const titleValue = document.getElementById("idInpTitle").value;
  const descripctionValue = document.getElementById("idInpDescription").value;
  const priorityValue = document.getElementById("idInpPriority").value;
  const doneValue = document.getElementById("idInpDone").value;
  taskArrayFiltered = [...taskArrayFull];

  if (idValue !== undefined && idValue.trim().length !== 0) {
    filterStrategy.setStrategy(new FilterTaskById());
    taskArrayFiltered = filterStrategy.filter(taskArrayFiltered, idValue);
  }

  if (nombreValue !== undefined && nombreValue.trim().length !== 0) {
    filterStrategy.setStrategy(new FilterTaskByNombre());
    taskArrayFiltered = filterStrategy.filter(taskArrayFiltered, nombreValue);
  }

  if (titleValue !== undefined && titleValue.trim().length !== 0) {
    filterStrategy.setStrategy(new FilterTaskByTitle());
    taskArrayFiltered = filterStrategy.filter(taskArrayFiltered, titleValue);
  }

  if (
    descripctionValue !== undefined &&
    descripctionValue.trim().length !== 0
  ) {
    filterStrategy.setStrategy(new FilterTaskByDescription());
    taskArrayFiltered = filterStrategy.filter(
      taskArrayFiltered,
      descripctionValue,
    );
  }
  if (priorityValue !== undefined && priorityValue.trim().length !== 0) {
    filterStrategy.setStrategy(new FilterTaskByPriority());
    taskArrayFiltered = filterStrategy.filter(taskArrayFiltered, priorityValue);
  }
  if (doneValue !== undefined && doneValue.trim().length !== 0) {
    filterStrategy.setStrategy(new FilterTaskByDone());
    taskArrayFiltered = filterStrategy.filter(taskArrayFiltered, doneValue);
  }
  return taskArrayFiltered;
}

/*
setInterval(printObject, 200);

function printObject() {
  let dataString = "";
  taskArrayFiltered.forEach(
    (x) =>
      (dataString += `<p>Nombre: ${x.nombre} Prioridad: ${x.priority}</p>`),
  );
  document.getElementById("idDataSection").innerHTML = `<p> ${dataString}</p>`;
}
*/
