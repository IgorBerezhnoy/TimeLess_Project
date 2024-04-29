export type Result = {
  info: ResultInfo
  results: UserType[]
}
export type UserName = {
  first: string
  last: string
  title: string
}
export type ResultResultsLocationStreet = {
  name: string
  number: number
}
export type ResultResultsLocationCoordinates = {
  latitude: string
  longitude: string
}
export type ResultResultsLocationTimezone = {
  description: string
  offset: string
}
export type UserLocation = {
  city: string
  coordinates: ResultResultsLocationCoordinates
  country: string
  postcode: number
  state: string
  street: ResultResultsLocationStreet
  timezone: ResultResultsLocationTimezone
}
export type UserLogin = {
  md5: string
  password: string
  salt: string
  sha1: string
  sha256: string
  username: string
  uuid: string
}
export type UserDob = {
  age: number
  date: string
}
export type UserRegistered = {
  age: number
  date: string
}
export type UserId = {
  name: string
  value: string
}
export type UserPicture = {
  large: string
  medium: string
  thumbnail: string
}
export type UserType = {
  cell: string
  dob: UserDob
  email: string
  gender: string
  id: UserId
  location: UserLocation
  login: UserLogin
  name: UserName
  nat: string
  phone: string
  picture: UserPicture
  registered: UserRegistered
}
export type ResultInfo = {
  page: number
  results: number
  seed: string
  version: string
}
