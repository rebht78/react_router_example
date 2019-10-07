const showUsers = (users, filters) => {
  return users.filter(user => user.name.includes(filters.text));
};

export default showUsers;
