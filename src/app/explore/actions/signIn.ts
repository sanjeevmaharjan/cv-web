'use server'

import {signIn} from '@/auth'

export async function appSignIn() {
  await signIn('app-auth', {
    redirectTo: '/search',
  })
}
