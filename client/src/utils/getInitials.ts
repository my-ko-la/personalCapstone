const getInitials = async (fname: string, lname: string) => {
  return fname && lname
    ? `${fname[0].toUpperCase()}${lname[0].toUpperCase()}`
    : undefined;
};

export default getInitials;
