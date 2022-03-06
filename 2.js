/*2.	Write a function which filter users who has  scoresGreaterThan85,  
Write a function which addUser  to the user array only if the user does not exist.   
Write a function which addUserSkill which can add skill to a user only if the user exist.   
Write a function which editUser if the user exist in the users array.  
```js
*/

var users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// const scoresGreaterThan85 = () => {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].scores > 85) {
//       //  console.log(users[i]);
//     }
//   }
// };

// scoresGreaterThan85(users);

// 	Write a function which addUser  to the user array only if the user does not exist.

const addUser = (users, user) => {
  let exists = false;
  //   users.forEach((element) => {
  //     console.log(element.name,);
  //   });

  for (let i = 0; i < users.length; i++) {
    // console.log(user.name);
    if (users[i].name == user.name) {
      exists = true;
      console.log("User exists");
    }
  }
  if (!exists) {
    console.log("False");
    users.push(user);
    console.log(users);
  }
};

const user = {
  name: "Ram",
  scores: 90,
  skills: ["HTM", "CSS", "JS"],
  age: 20,
};

addUser(users, user);
