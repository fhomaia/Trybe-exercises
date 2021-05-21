function techList(techs, name) {
    if (techs.length > 0) {
    return techs.sort().map(tech => ({
        tech,
        name,
    }));
    }
    return 'Vazio!'
} 

module.exports = {
    techList,
}