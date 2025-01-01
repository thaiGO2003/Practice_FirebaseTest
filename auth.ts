// auth.ts
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "./firebaseConfig";

const auth = getAuth(firebaseApp);

// Đăng nhập người dùng
export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error: ", error);
    throw error;
  }
};

// Đăng ký người dùng mới
export const signup = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Signup error: ", error);
    throw error;
  }
};
