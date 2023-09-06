const MessageBox = defineComponent({
  props: {
    message: {
      type: String,
      required: true
    }
  },
  render(ctx: any) {
    const { $props, $emit } = ctx

    return <div class={`w-full h-full bg-black/70 fixed left-0 top-0`}>
      <div class={`bg-brand-primary absolute top-50% left-50% translate--1/2 flex flex-c gap-4 px-4 py-2 rounded text-white`}>
        <div>{$props.message}</div>
        <button onClick={() => $emit('close')}>
          <div class='i-carbon-close' />
        </button>
      </div>
    </div>
  }
})

export function showMessage(message: string) {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp(MessageBox, {
    message,
    onClose() {
      app.unmount()
      div.remove()
    }
  })
  app.mount(div)
}
