function strMapToObj(strMap: Map<string, any>) {
  const obj = Object.create(null)
  for (const [k, v] of strMap)
    obj[k] = v
  return obj
}

function strMapToJson(strMap: Map<string, any>) {
  return JSON.stringify(strMapToObj(strMap))
}

function objToStrMap(obj: Record<string, any>) {
  const strMap = new Map()
  for (const k of Object.keys(obj))
    strMap.set(k, obj[k])
  return strMap
}

function jsonToStrMap(jsonStr: string) {
  return objToStrMap(JSON.parse(jsonStr))
}

export function usePiniaStorage() {
  const setItem = <T extends Record<string, any>>(key: string, val: T) => {
    const obj = Object.create(null)
    for (const [k, v] of Object.entries(val)) {
      if (v instanceof Map)
        obj[`__MAP__${k}`] = strMapToJson(v)
      else
        obj[k] = v
    }
    localStorage.setItem(key, JSON.stringify(obj))
  }
  const getItem = <T>(key: string, defaultVal?: T) => {
    const vl = localStorage.getItem(key)
    if (!vl)
      return defaultVal

    try {
      const pvl = JSON.parse(vl)
      for (const [k, v] of Object.entries(pvl)) {
        if (k.startsWith('__MAP__')) {
          const reallyKey = k.replace('__MAP__', '')
          pvl[reallyKey] = jsonToStrMap(v as string)
          delete pvl[k]
        }
      }
      return pvl as T
    }
    catch (e) {
      return defaultVal
    }
  }

  const delItem = (key: string) => {
    localStorage.removeItem(key)
  }

  return {
    delItem,
    getItem,
    setItem,
  }
}
