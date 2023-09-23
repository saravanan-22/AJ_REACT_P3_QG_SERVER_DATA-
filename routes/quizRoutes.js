import express from "express";
import {
  postAllGkQuestions,
  getAllQuestions,
  postAllSportQuestions,
  getAllSportsQuestions,
  postAllComputerQuestions,
  getAllComputerQuestions,
  postAllHistoryQuestions,
  getAllHistoryQuestions,
  postAllPoliticsQuestions,
  getAllPoliticsQuestions,
  postAllArtQuestions,
  getAllArtQuestions,
  postAllScienceQuestions,
  getAllScienceQuestions,
  postAllAnimalsQuestions,
  getAllAnimalsQuestions,
  postAllVehiclesQuestions,
  getAllVehiclesQuestions,
  postAllComicsQuestions,
  getAllComicsQuestions,
} from "../controllers/quizController.js";
const router = express.Router();

// POST-allGkQuestion -http://localhost:5000/api/v1/questions/create/
router.post("/create/gkQuestions", postAllGkQuestions);

// POST -allSportsQuestion http://localhost:5000/api/v1/questions/create/sportsQuestions
router.post("/create/sportsQuestions", postAllSportQuestions);

// GET - allGKQuestion -http://localhost:5000/api/v1/questions/Generalknowledge
router.get("/Gk", getAllQuestions);

// GET - allSportsQuestions -http://localhost:5000/api/v1/questions/sports

router.get("/sports", getAllSportsQuestions);

// POST-allGkQuestion -http://localhost:5000/api/v1/questions/create/
router.post("/create/computerQuizQuestions", postAllComputerQuestions);

// GET -allComputerQuestions
router.get("/Computers", getAllComputerQuestions);

// POST-allHistoryQuestion -http://localhost:5000/api/v1/questions/create/
router.post("/create/historyQuizQuestions", postAllHistoryQuestions);

// GET -allComputerQuestions
router.get("/History", getAllHistoryQuestions);

// POST-allPoliticsQuestion -http://localhost:5000/api/v1/questions/create/
router.post("/create/PoliticsQuizQuestions", postAllPoliticsQuestions);

// GET -allPoliticsQuestion
router.get("/Politics", getAllPoliticsQuestions);

// POST-allArtQuestion -http://localhost:5000/api/v1/questions/create/
router.post("/create/ArtQuizQuestions", postAllArtQuestions);

// GET -allArtQuestion
router.get("/Art", getAllArtQuestions);

// POST-allScienceQuestion -http://localhost:5000/api/v1/questions/create/
router.post("/create/Science&NatureQuizQuestions", postAllScienceQuestions);

// GET -allScienceQuestion
router.get("/Science&Nature", getAllScienceQuestions);


// POST-AllAnimalsQuestions -http://localhost:5000/api/v1/questions/create/
router.post("/create/AnimalsQuizQuestions", postAllAnimalsQuestions);

// GET -allAnimalsQuestion
router.get("/Animals", getAllAnimalsQuestions);


// POST-AllVehiclesQuestions -http://localhost:5000/api/v1/questions/create/
router.post("/create/VehiclesQuizQuestions", postAllVehiclesQuestions);

// GET -allVehiclesQuestion
router.get("/Vehicles", getAllVehiclesQuestions);


// POST-AllComicsQuestions -http://localhost:5000/api/v1/questions/create/
router.post("/create/ComicsQuizQuestions", postAllComicsQuestions);

// GET -allComicsQuestion
router.get("/Comics", getAllComicsQuestions);

export default router;
