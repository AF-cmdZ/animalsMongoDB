import client from "./loader.js";

// [sortBy] is dynamic in insomnia ?sort=
export default {
   async index(sortBy = "name") {
    const animals = await client.db("zoo")
    .collection("animals")
    .find()
    .sort({[sortBy]: 1})
    .toArray();
    return animals;
    }
}