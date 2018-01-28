export const convertToEntity = (arr) => {
    return arr.reduce((acc, curr) => {
        return { ...acc, [curr.id]: curr }
    }, {})
}

export const convertFromEntity = (entity) => {
    return Object.keys(entity).map(key => entity[key])
}