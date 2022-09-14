import locationsDatas from '../assets/locations.json'

const getLocationList = async () => {
  return locationsDatas
}

const getLocationDetails = async (id) => {
  let rep = locationsDatas.find((location) => {
    return location.id === id
  })
  if (!rep) rep = null
  return rep
}

const store = {
  getLocationList,
  getLocationDetails,
}

export default store
