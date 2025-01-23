import bcrypt from "bcryptjs";

const SALT = 10;

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT);
};

export const comparePasswords = async (
  plain: string,
  hashed: string
): Promise<boolean> => {
  return await bcrypt.compare(plain, hashed);
};
