import {UserManager} from 'oidc-client-ts'

export const mgr = new UserManager({
  authority: 'http://localhost:8080',
  client_id: 'web-client',
  redirect_uri: 'http://localhost:3000/auth/callback',
})

mgr.startSilentRenew()
