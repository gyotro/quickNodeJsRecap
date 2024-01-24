import { RequestHandler } from "express";
import Video from './videos'
import { json } from "stream/consumers";

export const getVideos: RequestHandler = (req, res) => {
    res.json('getting videos')

}

export const getVideo: RequestHandler = (req, res) => {
    res.json('getting videos')

}

export const createVideo: RequestHandler = async (req, res) => {
    const video = new Video(req.body)
    const savedVideo = await video.save()
    console.log(savedVideo)
    console.log(video)
    res.json(savedVideo)

}

export const updateVideo: RequestHandler = (req, res) => {
    res.json('getting videos')

}

export const deleteVideo: RequestHandler = (req, res) => {
    res.json('getting videos')

}