import { defineStore } from 'pinia'

export interface IUserInfo {
  token: string
  name: string
  id: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserInfo => {
    return {
      token: '',
      name: '',
      id: '',
    }
  },
  getters: {
    isLogin(): boolean {
      return this.token !== ''
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setId(id: string) {
      this.id = id
    },
    login(user: Partial<IUserInfo>) {
      this.$patch({
        ...user,
      })
    },
    logout() {
      this.$reset()
      localStorage.removeItem('user')
    },
  },
})
