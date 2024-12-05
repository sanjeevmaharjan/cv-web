'use client'

import {mgr} from '@/service/OidcManager'
import Button from '@mui/material/Button'
import {User, UserProfile} from 'oidc-client-ts'
import React, {useEffect, useState} from 'react'

export default function LoginGuard({children}: {children: React.ReactNode}) {
  const [user, setUser] = useState<UserProfile | null | 'nologin'>(null)

  useEffect(() => {
    const loadedHandler = (u: User) => {
      setUser(!!u?.profile ? u.profile : 'nologin')
    }
    const unloadedHandler = () => {
      setUser(null)
    }
    mgr.events.addUserLoaded(loadedHandler)
    mgr.events.addUserUnloaded(unloadedHandler)

    return () => {
      mgr.events.removeUserLoaded(loadedHandler)
      mgr.events.removeUserUnloaded(unloadedHandler)
    }
  }, [])

  useEffect(() => {
    mgr
      .getUser()
      .then((u) => {
        setUser(!!u?.profile ? u.profile : 'nologin')
      })
      .catch(() => {
        setUser('nologin')
      })
  }, [])

  return (
    <React.Fragment>
      {typeof user === 'undefined' && '...'}
      {user === 'nologin' ? (
        <Button>Login into App</Button>
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
    </React.Fragment>
  )
}
