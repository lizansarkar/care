
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "enter your name",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
        secretCode: {
          label: "Secret code",
          type: "number",
          placeholder: "enter your code",
        },
      },
      async authorize(credentials) {
        const { username, password, secretCode } = credentials;
        const user = userList.find(u => u.name == username)
        // এখানে আপনার ব্যাকএন্ড বা ডাটাবেস লজিক থাকবে

        if(!user) return null;
        
        const isPassword = user.password == password;

        if(isPassword) {
          return user;
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};