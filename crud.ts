import { prisma } from "./lib/prisma";

async function run(){
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Rifat",
    //         email: "rifat@gmail.com"
    //     }
    // })
    // console.log(createUser);

//         const createProfile = await prisma.profile.create({
//         data: {
//             bio: "web dev level 2",
//             userId: 3
//         }
//     })
// console.log(createProfile);

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "This is title",
    //         content: "this is content",
    //         authorId: 1
    //     }
    // })
    // console.log("post", createPost);
// const users = await prisma.user.findMany({
//     include: {
//         posts: true,
//         profile: true
//     }
// });
// console.dir(users, {depth: Infinity});

// const user = await prisma.user.findUnique({
//   where: {
//     id: 3,
//   },
// })

// console.log(user);

// const updateUser = await prisma.user.update({
//   where: {
//     id: 1,
//   },
//   data: {
//     name: 'Alice 2',
//   },
// })

// console.log(updateUser);

// const deleteUser = await prisma.user.delete({
//   where: {
//     id: 5
//   },
// })
// console.log(deleteUser);


const upsertUser = await prisma.user.upsert({
  where: {
   id: 5
  },
  update: {
    name: 'Alice',
  },
  create: {
    email: 'alic@prisma.io',
    name: 'Alice Al',
  },
})

console.log(upsertUser);
}
run();
