 import { Router } from "express"; 
 import  *  as videoController from "./videos.controller";

 const router:Router = Router();

 router.get( '/videos', videoController.getVideos);

 router.post('/videos', videoController.createVideo)

 router.put('/videos/:id', videoController.updateVideo)

 router.get('/videos/:id', videoController.getVideo)

 router.delete('/videos/:id', videoController.deleteVideo)

 export default router;