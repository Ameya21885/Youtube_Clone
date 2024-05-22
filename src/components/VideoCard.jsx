import { Link } from "react-router-dom";
// import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CardMedia from '@mui/material/CardMedia';

// import {
//   demoThumbnailUrl,
//   demoVideoUrl,
//   demoVideoTitle,
//   demoChannelUrl,
//   demoChannelTitle,
// } from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
  const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
  const demoVideoUrl = "/video/GDa8kZLNhJ4";
  const demoChannelTitle = "JavaScript Mastery";
  const demoVideoTitle =
    "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
  const demoProfilePicture =
    "http://dergipark.org.tr/assets/app/images/buddy_sample.png";

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
