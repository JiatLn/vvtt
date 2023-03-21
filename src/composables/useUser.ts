import { storeToRefs } from 'pinia'
import type { IUserInfo } from '@/store'

const userStore = useUserStore()
const userStoreRef = storeToRefs(userStore)

export const isLogin = userStoreRef.isLogin
export const userToken = userStoreRef.token
export const logout = () => userStore.logout()
export const login = (userInfo: Partial<IUserInfo>) => userStore.login(userInfo)
