export default (person) => {
  return {
    id: person.id,
    name: `${person.first_name} ${person.last_name}`,
    detail: `${person.email_address} - ${person.title}`,
  };
};
