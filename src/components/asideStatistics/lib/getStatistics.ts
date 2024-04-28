import { UserType } from '@/services/userApi/user-api.types'

export function getStatistics(users: UserType[]) {
  const statistic = {
    age10to20: 0,
    age21to30: 0,
    age31to40: 0,
    age41to50: 0,
    count: 0,
    female: 0,
    male: 0,
    more51: 0,
  }

  users.forEach(el => {
    if (el.dob.age >= 10 && el.dob.age <= 20) {
      statistic.age10to20 += 1
    }
    if (el.dob.age >= 21 && el.dob.age <= 30) {
      statistic.age21to30 += 1
    }
    if (el.dob.age >= 31 && el.dob.age <= 40) {
      statistic.age31to40 += 1
    }
    if (el.dob.age >= 41 && el.dob.age <= 50) {
      statistic.age41to50 += 1
    }
    if (el.dob.age >= 51) {
      statistic.more51 += 1
    }
    if (el.gender === 'male') {
      statistic.male += 1
    }
    if (el.gender === 'female') {
      statistic.female += 1
    }
    statistic.count += 1
  })

  return statistic
}
