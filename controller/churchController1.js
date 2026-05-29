export function getCongregation(request, response) {
  const congregation = [
    { id: 1, name: "John Doe", department: "Media", age: 20, country: NIgeria },
    { id: 2, name: "Jane Smith", department: "Ushering", age: 22, country: Canada },
    { id: 3, name: "Esther Fumilayo", department: "Media", age: 22, country: NIgeria },
    { id: 4, name: "Alice Johnson", department: "Protocol", age: 29 },
    { id: 5, name: "Mrs Okafor", department: "Ushering", age: 37 },
    { id: 6, name: "Adebayo Segun", department: "Protocol", age: 37 },
    { id: 7, name: "Bob Brown", department: "Music", age: 29 },
    { id: 8, name: "Charlie Davis", department: "Evangelism", age: 23 },
    { id: 9, name: "John Paul", department: "Music", age: 28 },
    { id: 10, name: "Mr Johnson", department: "Evangelism", age: 30 },
    { id: 11, name: "Emily Wilson", department: "Intercessory", age: 20 },
    { id: 12, name: "David Lee", department: "Sanctuary Keeping", age: 22 },
    { id: 13, name: "Sophia Taylor", department: "Youth Ministry", age: 19 },
    { id: 14, name: "Success Afolabi", department: "Sanctuary Keeping", age: 23 },
    { id: 15, name: "Michael Anderson", department: "Welfare", age: 21 },
    { id: 16, name: "Olivia Martinez", department: "Treasury", age: 23 },
    { id: 17, name: "Mary Johnson", department: "Welfare", age: 25 },
    { id: 18, name: "Fumi Adeleke", department: "Treasury", age: 27 }
  ];

const {id, name, age, department} = request.query;

let result = congregation;

if (id) {
  result = result.filter(item => item.id === Number(id));
}

if (name) {
  result = result.filter(item => item.name.toLowerCase() === name.toLowerCase()
);
}

if (age) {
  result = result.filter(item => item.age === Number(age));
}

if (department) {
  result = result.filter(item => item.department.toLowerCase() === department.toLowerCase());
}

  response.json(result);
}