function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  let favoriteNumber = "11";
  let instructor = {
      firstName: "colt",
      [favoriteNumber]: "that is my fave"
  }

 
  const instructor = {
    firstname: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName " + "says bye!";
    }
  }

function createAnimal(species, verb, noise){
    return{
        species,
        [verb](){
            return noise;
        }
    }
}