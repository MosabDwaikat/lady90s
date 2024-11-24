import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import useStyles from "./index.styles";

const ImagesPreview = ({ imgs }: { imgs: string[] }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [panelHeight, setPanelHeight] = useState<number>(0);
  const viewedImgRef = useRef<HTMLImageElement>(null);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);
  const activeThumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);
  const { classes } = useStyles({ panelHeight });

  //set panel height to img height to make thumbnails overflow
  useEffect(() => {
    const updatePanelHeight = () => {
      if (viewedImgRef.current) {
        setPanelHeight(viewedImgRef.current.offsetHeight);
      }
    };
    updatePanelHeight();
    window.addEventListener("resize", updatePanelHeight);
    return () => {
      window.removeEventListener("resize", updatePanelHeight);
    };
  }, [viewedImgRef.current]);

  //center active thumbnail in the container
  useEffect(() => {
    const centerActiveThumbnail = () => {
      const activeThumb = activeThumbnailRefs.current[activeImg];
      const container = thumbnailsContainerRef.current;

      if (activeThumb && container) {
        const computedStyle = getComputedStyle(container);
        const isRow = computedStyle.flexDirection === "row";

        const containerSize = isRow ? container.clientWidth : container.clientHeight;
        const thumbOffset = isRow
          ? activeThumb.offsetLeft + activeThumb.offsetWidth / 2
          : activeThumb.offsetTop + activeThumb.offsetHeight / 2;

        const newScrollPosition = thumbOffset - containerSize / 2;

        if (isRow) {
          container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
        } else {
          container.scrollTo({ top: newScrollPosition, behavior: "smooth" });
        }
      }
    };

    centerActiveThumbnail();
  }, [activeImg]);

  return (
    <Box>
      <Box className={classes.panel}>
        <Box className={classes.viewedImgContainer}>
          <img className={classes.viewedImgBase} src={imgs[0]} ref={viewedImgRef} />
          {imgs.map((img, index) => (
            <Box key={index} zIndex={index === activeImg ? "2" : "0"}>
              <img className={classes.viewedImg} src={img} />
            </Box>
          ))}
        </Box>

        <Box className={classes.imgsContainer} ref={thumbnailsContainerRef}>
          {imgs.map((img, index) => (
            <img
              key={index}
              ref={(el) => (activeThumbnailRefs.current[index] = el)}
              className={classes.thumbImg + " " + (activeImg === index ? classes.active : "")}
              src={img}
              alt=""
              onClick={() => setActiveImg(index)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ImagesPreview;
