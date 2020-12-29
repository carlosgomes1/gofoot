import bcrypt from "bcrypt";

export const hashPassword = async (
  password: string,
  saltRounds = 10,
): Promise<string | null> => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);

    return await bcrypt.hash(password, salt);
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const compareHash = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (err) {
    console.log(err);
  }

  return false;
};
