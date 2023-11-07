import NextAuth, {getServerSession} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';

const adminEmails = ['jgossett73@gmail.com','aubreegossett@gmail.com'];


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

  ],
  adapter: MongoDBAdapter(clientPromise),
  
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({session,token,user}) => {
     if (adminEmails.includes(session?.user?.email)) {
      return session;
     } else {
      return false;
     }
    
  },
},
})