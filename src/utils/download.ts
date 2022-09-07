export function downloadBlobFile(blob: Blob, fileName: string) {
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', fileName)
  link.click()
}
