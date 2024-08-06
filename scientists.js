const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

function displayScientists(scientists) {
  const container = document.querySelector(".scientists__card-box");
  container.innerHTML = "";

  scientists.forEach(scientist => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="scientists__card">
        <h2 class="scientists__card-title">${scientist.name} ${scientist.surname}</h2>
        <p>${scientist.born}-${scientist.dead}</p>
      </div>`
    );
  });
}

document
  .getElementById("scientists-19th-century")
  .addEventListener("click", () => {
    const filteredScientists = scientists.filter(
      scientist => scientist.born > 1801 && scientist.born < 1900
    );

    displayScientists(filteredScientists);
  });

document
  .getElementById("scientists-alphabet-order")
  .addEventListener("click", () => {
    const sortedScientists = scientists.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    displayScientists(sortedScientists);
  });

document
  .getElementById("scientists-years-lived")
  .addEventListener("click", () => {
    const sortedScientists = scientists.sort((a, b) => {
      const live1 = a.dead - a.born;
      const live2 = b.dead - b.born;
      return live1 - live2;
    });

    displayScientists(sortedScientists);
  });

document
  .getElementById("scientists-latest-born")
  .addEventListener("click", () => {
    let latestScientist = scientists[0];

    scientists.forEach(scientist => {
      if (scientist.born > latestScientist.born) {
        latestScientist = scientist;
      }
    });

    displayScientists([latestScientist]);
  });

document
  .getElementById("scientists-yearOfEinstein")
  .addEventListener("click", () => {
    const searchedScientist = scientists.filter(
      ({ name, surname }) => name === "Albert" && surname === "Einstein"
    );
    displayScientists(searchedScientist);
  });

document
  .getElementById("scientists-surnameStartsWithC")
  .addEventListener("click", () => {
    const filteredScientists = scientists.filter(({ surname }) =>
      surname.startsWith("C")
    );

    displayScientists(filteredScientists);
  });

document
  .getElementById("scientists-nameStartsWithA")
  .addEventListener("click", () => {
    const filteredScientists = scientists.filter(
      ({ name }) => !name.startsWith("A")
    );

    displayScientists(filteredScientists);
  });

document.getElementById("scientists-live").addEventListener("click", () => {
  const sortedScientists = scientists.sort((a, b) => {
    const live1 = a.dead - a.born;
    const live2 = b.dead - b.born;
    return live1 - live2;
  });

  const youngestScientist = sortedScientists[0];
  const oldestScientist = sortedScientists[sortedScientists.length - 1];

  displayScientists([youngestScientist, oldestScientist]);
});

// теж саме через forEach

// document.getElementById("scientists-live").addEventListener("click", () => {
//   let youngestScientist = scientists[0];
//   let oldestScientist = scientists[0];

//   scientists.forEach(scientist => {
//     const yearsOld = scientist.dead - scientist.born;

//     if (youngestScientist.dead - youngestScientist.born > yearsOld) {
//       youngestScientist = scientist;
//     }

//     if (oldestScientist.dead - oldestScientist.born < yearsOld) {
//       oldestScientist = scientist;
//     }
//   });

//   displayScientists([youngestScientist, oldestScientist]);
// });

document
  .getElementById("scientists-sameNameSurname")
  .addEventListener("click", () => {
    const filteredScientists = scientists.filter(scientist => {
      if (scientist.name[0] === scientist.surname[0]) {
        return scientist;
      }
    });
    displayScientists(filteredScientists);
  });

displayScientists(scientists);
