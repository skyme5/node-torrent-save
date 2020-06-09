const Magnets = require('../schemas/torrents.magnet');

const resolvers = {
  Query: {
    getMagnets: async () => {
      return await Magnets.find({}).limit(10);
    },
  },

  Mutation: {
    addMagnet: async (root, { input }) => {
      return await Magnets.findOneAndUpdate({ xt: input.xt }, input, { upsert: true, new: true });
    },

    removeMagnet: async (root, { xt }) => {
      return await Magnets.findOneAndRemove({ xt });
    },
  },
};

module.exports = resolvers;
