import locationsDatas from '../assets/locations.json'

const getLocationList = async () => {
  return locationsDatas
}

const store = {
  getLocationList,
}

export default store
