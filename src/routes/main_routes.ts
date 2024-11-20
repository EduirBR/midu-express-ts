import express from 'express' // ESModules
import diaryRouter from '../apps/diaries/routes'
// const express = require('express) -> commonjs

const router = express.Router()

router.use('/diaries', diaryRouter)

export default router
