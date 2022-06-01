const Pet = require('../../schemas/Pet')

const getLastPetsAdopted = async (req, res) => {
    try {
        const Pets = await Pet.find(
            {
                status: 'Adopted',
            },
            'nickname image pet.adopt_by'
        ).populate({ path: 'shelter', select: 'name logo' })
        Pets ? res.json(Pets) : res.json({ msg: 'No pets was be adopted' })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}

module.exports = getLastPetsAdopted
