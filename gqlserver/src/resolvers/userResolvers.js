import bcrypt from 'bcrypt'

export const users = [
  {
    id: '1',
    userName: 'weraa',
    password: 'passw0rd',
    email: 'wer@email.com',
    firstName: 'Wera',
    lastName: 'Andersen',
    address: '123 Maple St.',
    address2: 'Unit 320',
    city: 'Maperville',
    state: 'IL',
    zip: '22902',
    userType: 'caregiver',
  },
  {
    id: '2',
    userName: 'weraa2',
    password: 'passw0rd',
    email: 'weraa@email.com',
    firstName: 'Smith',
    lastName: 'Johnson',
    address: '123 Maple St.',
    address2: 'Unit 320',
    city: 'Maperville',
    state: 'IL',
    zip: '22902',
    userType: 'caregiver',
  },
  {
    id: '3',
    userName: 'angel23',
    password: 'passw0rd',
    email: 'weraa@email.com',
    firstName: 'Angle',
    lastName: 'Lamar',
    address: '123 Maple St.',
    address2: 'Unit 320',
    city: 'Maperville',
    state: 'IL',
    zip: '22902',
    userType: 'caregiver',
  },
  {
    id: '4',
    userName: 'wera44',
    password: 'passw0rd',
    email: 'weraa@email.com',
    firstName: 'Wera',
    lastName: 'Jeromski',
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
    getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
  },

  Mutation: {
    registerUser: (parent, { password, ...otherArgs }, { models }) => {
      try {
        const hashedPassword = bcrypt.hashSync(password, 12)
        return models.User.create({ ...otherArgs, password: hashedPassword })
      } catch (error) {
        console.log(error) //eslint-disable-line
        return {}
      }
    },
  },
}

export default resolvers
