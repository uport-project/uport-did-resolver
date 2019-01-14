interface UportLiteRegistry {
  (mnid: string, callback: (error?: any , doc?: any) => void) : void
}
declare module 'uport-lite' {
  export default function () : UportLiteRegistry
}
