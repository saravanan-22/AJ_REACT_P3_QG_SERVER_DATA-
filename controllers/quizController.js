import Quiz from "../models/Quiz.js";
import sportQ from "../models/sportQuiz.js";
import ComputerQuiz from "../models/computerQ.js";
import HistoryQuiz from "../models/historyQ.js";
import PoliticsQuiz from "../models/politicsQ.js";
import ArtQuiz from "../models/artQ.js";
import Science from "../models/scienceNatureQ.js";
import AnimalsQuiz from "../models/animalsQ.js";
import VehiclesQuiz from "../models/vehiclesQ.js";
import ComicsQuiz from "../models/comicsQ.js";


// postGKQuiz-----------------------------------------------------------------
export const postAllGkQuestions = (req, res) => {
  const newQuiz = new Quiz(req.body)
    .save()
    .then((gk) =>
      res.status(201).json({
        success: true,
        message: "Posted GK questions successfully",
        data: gk,
      })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

export const postAllSportQuestions = (req, res) => {
  const newQuiz = new sportQ(req.body)
    .save()
    .then((sports) =>
      res.status(201).json({
        success: true,
        message: "Posted Sports questions successfully",
        data: sports,
      })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

//getGkQuiz-------------------------------------------------------------------
export const getAllQuestions = (req, res) => {
  Quiz.find()
    .then((quiz) =>
      res
        .status(200)
        .json({ success: true, message: "user get successfully", data: quiz })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

//getAllSportsQuestions--------------------------------------------------------

export const getAllSportsQuestions = (req, res) => {
  sportQ
    .find()
    .then((sports) =>
      res.status(200).json({
        success: true,
        message: "sports questions get successfully",
        data: sports,
      })
    )
    .catch((err) => console.log(err));
};

// postGKQuiz-----------------------------------------------------------------
export const postAllComputerQuestions = (req, res) => {
  const newQuiz = new ComputerQuiz(req.body)
    .save()
    .then((gk) =>
      res.status(201).json({
        success: true,
        message: "Posted GK questions successfully",
        data: gk,
      })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

//getAllComputerQuestions-------------------------------------------------------

export const getAllComputerQuestions = (req, res) => {
  ComputerQuiz.find()
    .then((questions) =>
      res
        .status(200)
        .json({ success: true, message: "Received all data", data: questions })
    )
    .catch((err) => console.log(err));
};

//PostAllHistoryQuestions-------------------------------------------------------
export const postAllHistoryQuestions = (req, res) => {
  const newQuiz = new HistoryQuiz(req.body)
    .save()
    .then((history) =>
      res.status(201).json({
        success: true,
        message: "history data send successfully",
        data: history,
      })
    )
    .catch((err) => console.log(err));
};

//getAllHistoryQuestions----------------------------------------------------------

export const getAllHistoryQuestions = (req, res) => {
  HistoryQuiz.find()
    .then((historyQuiz) =>
      res.status(200).json({
        success: true,
        message: "data received successfully",
        data: historyQuiz,
      })
    )
    .catch((err) => console.log(err));
};

//postAllPoliticsQuestions --------------------------------------------------------

export const postAllPoliticsQuestions = (req, res) => {
  const newQuiz = new PoliticsQuiz(req.body)
    .save()
    .then((politics) =>
      res.status(201).json({
        success: true,
        message: "data send successfully",
        data: politics,
      })
    )
    .catch((err) => console.log(err));
};

//getAllPoliticsQuestions----------------------------------------------------------

export const getAllPoliticsQuestions = (req, res) => {
  PoliticsQuiz.find()
    .then((politicsQuiz) =>
      res.status(200).json({
        success: true,
        message: "data received successfully",
        data: politicsQuiz,
      })
    )
    .catch((err) => console.log(err));
};

//postAllArtQuestions --------------------------------------------------------

export const postAllArtQuestions = (req, res) => {
  const newQuiz = new ArtQuiz(req.body)
    .save()
    .then((Art) =>
      res.status(201).json({
        success: true,
        message: "data send successfully",
        data: Art,
      })
    )
    .catch((err) => console.log(err));
};

//getAllArtQuestions----------------------------------------------------------

export const getAllArtQuestions = (req, res) => {
  ArtQuiz.find()
    .then((artQuiz) =>
      res.status(200).json({
        success: true,
        message: "data received successfully",
        data: artQuiz,
      })
    )
    .catch((err) => console.log(err));
};


//postAllArtQuestions --------------------------------------------------------

export const postAllScienceQuestions = (req, res) => {
  const newQuiz = new Science(req.body)
    .save()
    .then((science) =>
      res.status(201).json({
        success: true,
        message: "data send successfully",
        data: science,
      })
    )
    .catch((err) => console.log(err));
};

//getAllArtQuestions----------------------------------------------------------

export const getAllScienceQuestions = (req, res) => {
  Science.find()
    .then((scienceQuiz) =>
      res.status(200).json({
        success: true,
        message: "data received successfully",
        data: scienceQuiz,
      })
    )
    .catch((err) => console.log(err));
};


//postAllAnimalsQuestions --------------------------------------------------------

export const postAllAnimalsQuestions = (req, res) => {
  const newQuiz = new AnimalsQuiz(req.body)
    .save()
    .then((animal) =>
      res.status(201).json({
        success: true,
        message: "data send successfully",
        data: animal,
      })
    )
    .catch((err) => console.log(err));
};

//getAllAnimalsQuestions----------------------------------------------------------

export const getAllAnimalsQuestions = (req, res) => {
  AnimalsQuiz.find()
    .then((animalsQuiz) =>
      res.status(200).json({
        success: true,
        message: "data received successfully",
        data: animalsQuiz,
      })
    )
    .catch((err) => console.log(err));
};


//postAllVehiclesQuestions --------------------------------------------------------

export const postAllVehiclesQuestions = (req, res) => {
  const newQuiz = new VehiclesQuiz(req.body)
    .save()
    .then((vehicles) =>
      res.status(201).json({
        success: true,
        message: "data send successfully",
        data: vehicles,
      })
    )
    .catch((err) => console.log(err));
};

//getAllAnimalsQuestions----------------------------------------------------------

export const getAllVehiclesQuestions = (req, res) => {
  VehiclesQuiz.find()
    .then((vehiclesQuiz) =>
      res.status(200).json({
        success: true,
        message: "data received successfully",
        data: vehiclesQuiz,
      })
    )
    .catch((err) => console.log(err));
};


//postAllComicsQuestions --------------------------------------------------------

export const postAllComicsQuestions = (req, res) => {
  const newQuiz = new ComicsQuiz(req.body)
    .save()
    .then((comics) =>
      res.status(201).json({
        success: true,
        message: "data send successfully",
        data: comics,
      })
    )
    .catch((err) => console.log(err));
};

//getAllComicsQuestions----------------------------------------------------------

export const getAllComicsQuestions = (req, res) => {
  ComicsQuiz.find()
    .then((comicsQuiz) =>
      res.status(200).json({
        success: true,
        message: "data received successfully",
        data: comicsQuiz,
      })
    )
    .catch((err) => console.log(err));
};