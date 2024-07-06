import { nextAuthOptions } from '@/lib/next-auth.lib'
import NextAuth from 'next-auth/next'

const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST }
