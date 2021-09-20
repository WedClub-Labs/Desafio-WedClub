export type UserDoc = {
  first: string;
  last: string;
  birthday: Date;
  email: string;
  phone: string;
};

export type UserDocWithID = WithId<UserDoc>;

export type WithId<T> = T & {
  id: string;
};
