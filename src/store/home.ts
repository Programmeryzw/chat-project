import { defineStore } from "pinia";

export const useHomeStore = defineStore('home', {
  state: () => {
    return {
      chatInfo: {
        type: 'gpto1'
      }
    }
  },

  actions: {
    updateChatInfo(info: IchatInfo) {
      this.chatInfo = info;
    }
  }
})
