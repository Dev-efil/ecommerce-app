router.get('/patients/:patientId', (req, res) => {
    try {
        patient = await Patients.findOne(req.params.patientId)
        if (!patient) {
            res.status(404).json({message: 'Cannot Find Patient'})
        }    
        else {
            res.status(200).json({patient})
        }
    } catch (error) {
        res.status(500).send({Error: error});
    }
 })