const router = require('express').Router();
const OngController = require('./controllers/ong.controller');
const IncidentController = require('./controllers/incident.controller');
const ProfileController = require('./controllers/profile.controller');
const sessionController = require('./controllers/SessionController');

router.post('/session', sessionController.create);

router.get('/ongs', OngController.index );
router.post('/ongs', OngController.create);

router.get('/profile', ProfileController.index);

router.post('/incidents', IncidentController.create);
router.get('/incidents', IncidentController.index);
router.delete('/incidents/:id', IncidentController.delete);

module.exports = router;