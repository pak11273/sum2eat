export interface MyStore {
  language: string
  country: string
  auth: {
    authenticated: boolean
    username?: string
  }
}
