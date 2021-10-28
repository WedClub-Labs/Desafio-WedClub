export const insertDataConflict = {
  statusCode: 409,
  message: "User already exists!",
};

export const dataNotFound = {
  statusCode: 404,
  message: "User not found!",
};

export const serverError = {
  statusCode: 500,
  message: "Internal server error!",
};
