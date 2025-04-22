import express from 'express';
import {
    createTable,
    getAllTables,
} from '../controllers/tableController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/createtable', authMiddleware, createTable);
router.get('/getall', getAllTables);


export default router;
