import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"


console.log("server render check True ")

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
})