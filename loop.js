const players = [
  {
    name: "Paul",
    position: "Guard",
  },
  {
    name: "Jerry",
    position: "Guard",
  },
  {
    name: "Zach",
    position: "Forward",
  },
  {
    name: "Bob",
    position: "Forward",
  },
];

const positions = ["Guard", "Center", "Forward"];


positions.forEach((position) => {
     console.log(`----${position}----`)


      const playersByPosition = players.filter((player) => {
        if (position === player.position) {
            return(player);
        }
     })
     console.log(playersByPosition)
})

// const people = ["Paul", "Zach", "Bella"];

// console.log(people)

// const onlyPaul = people.filter((person) => {
//     if(person === "Paul") return(person);
// })

// console.log(onlyPaul);





















// positions.forEach((position) => {
    
//     console.log("------",position,"-------");
    
//     const playersByPosition = players.filter((player) => {
//         if(player.position === position) return player;
//     })

//     console.log(playersByPosition);

// });