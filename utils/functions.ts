const getFormattedDate = (isoDate: Date) => {
  const date = new Date(isoDate);

  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

const getVideoCover = (videoLink: string) => {
  const startId = videoLink.indexOf("v=") + 2;
  const videoId = videoLink.slice(startId);
  const imageUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return imageUrl;
};

export { getFormattedDate, getVideoCover };
