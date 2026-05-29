export function getPopulation (req, res) {
    const population = [
        { id: 1, name: "Abiodun Joshua", age: 30, gender: "Male", country: "Nigeria",  },
        { id: 2, name: "Jane Smith", age: 25, gender: "Female", country: "Canada",  },
        { id: 3, name: "Alice Johnson", age: 28, gender: "Female", country: "USA",  },
        { id: 4, name: "Bob Brown", age: 35, gender: "Male", country: "UK",  },
        { id: 5, name: "Charlie Davis", age: 22, gender: "Male", country: "Australia",  },
        { id: 6, name: "Emily Wilson", age: 27, gender: "Female", country: "Germany",  },
        { id: 7, name: "David Lee", age: 31, gender: "Male", country: "France",  },
        { id: 8, name: "Sophia Taylor", age: 29, gender: "Female", country: "Italy",  },
        { id: 9, name: "Michael Anderson", age: 33, gender: "Male", country: "Spain",  },
        { id: 10, name: "Olivia Martinez", age: 26, gender: "Female", country: "Mexico",  },
        { id: 11, name: "Fumi Adeleke", age: 27, gender: "Female", country: "Nigeria",  },
        { id: 12, name: "Adebayo Segun", age: 37, gender: "Male", country: "Nigeria",  }, 
        { id: 13, name: "Esther Fumilayo", age: 22, gender: "Female", country: "Nigeria",  }
    ];

const { id, name, age, country, gender } = req.query;

let result = population;
if (id) {
  result = result.filter(item => item.id === Number(id));
}
if (name) {
  result = result.filter(item => item.name === name);
}
if (age) {
  result = result.filter(item => item.age === Number(age));
}
if (country) {
  result = result.filter(item => item.country === country);
}
if (gender) {
  result = result.filter(item => item.gender === gender);
}
res.json(result);
}