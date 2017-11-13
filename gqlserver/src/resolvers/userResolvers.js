export const users = [
  {
    id: '1',
    password: 'passw0rd',
    email: 'wer@email.com',
    fullName: 'Wera George',
    address: '123 Maple St.',
    address2: 'Unit 320',
    city: 'Maperville',
    state: 'IL',
    zip: '22902',
    userType: 'caregiver',
  },
  {
    id: '2',
    password: 'passw0rd',
    email: 'weraa@email.com',
    fullName: 'Smit Georgeh',
    address: '123 Maple St.',
    address2: 'Unit 320',
    city: 'Maperville',
    state: 'IL',
    zip: '22902',
    userType: 'caregiver',
  },
  {
    id: '3',
    password: 'passw0rd',
    email: 'weraa@email.com',
    fullName: 'Angl Georgee',
    address: '123 Maple St.',
    address2: 'Unit 320',
    city: 'Maperville',
    state: 'IL',
    zip: '22902',
    userType: 'caregiver',
  },
  {
    id: '4',
    password: 'passw0rd',
    email: 'weraa@email.com',
    fullName: 'Wera George',
    address: '123 Maple St.',
    address2: 'Unit 320',
    city: 'Maperville',
    state: 'IL',
    zip: '22902',
    userType: 'caregiver',
  },
]
// Resolvers
const resolvers = {
  Query: {
    users: () => users,
    getUsers: (parent, args, { models }) => models.User.find({}),
    getUser: (parent, { id }, { models }) => models.User.findOne({ id }),
    findUserByEmail: (parent, { email }, { models }) => models.User.findOne({ email }),
  },

  Mutation: {
    registerUser: (parent, args, { models }) => {
      try {
        return models.User.create(args)
      } catch (error) {
        console.log(error) //eslint-disable-line
        return {}
      }
    },
    deleteUser: (parent, { id }, { models }) => models.User.findByIdAndRemove(id),
  },
}

export default resolvers
