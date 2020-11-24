const resolvers = {
  Query: {
    async getLinks(root, args, { models }) {
      return models.Link.findAll();
    },
    async getLink(root, { id }, { models }) {
      return models.Link.findByPk(id);
    }
  },
  Mutation: {
    async createLink(root, { name, url, slug }, { models }) {
      return models.Link.create({
        name,
        url,
        slug
      });
    }
  }
};

module.exports = resolvers;
