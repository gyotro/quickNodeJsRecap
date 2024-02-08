import { RequestHandler } from "express";
import Video from './videos'
import { json } from "stream/consumers";

export const getVideos: RequestHandler = async (req, res) => {
    console.log('getting videos')
    const allVid = await Video.find()
    return res.json(allVid)
}

export const getVideo: RequestHandler = async (req, res) => {
    // Here it's possible to handle the case of no video found
    console.log('getting videos')
    const id: String = req.params.id
    console.log(id)
    const video = await Video.findById(id)
    return res.json(video)
}

export const createVideo: RequestHandler = async (req, res) => {
    try {
        const video = new Video(req.body)
        const savedVideo = await video.save()
        console.log(savedVideo)
        console.log(video)
        res.json(savedVideo)
    }
    catch (error: any) {
        return res.status(404).json(error.message)
    }

}

export const updateVideo: RequestHandler = async (req, res) => {
    try {
            await Video.findByIdAndUpdate(req.params.id, req.body)
            const updatedVideo  = await Video.findById(req.params.id)
            return res.status(204).json(updatedVideo)

    } catch(error: any) {
        return res.status(404).json(error.message)
    }

}

export const deleteVideo: RequestHandler = async (req, res) => {
    // Here it's possible to handle the case of no video found
    console.log('deleting videos')
    const id: String = req.params.id
    console.log(id)
    const video = await Video.findByIdAndDelete(id)
    return res.json(video)

}