import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (localFilePath) => {
  try {
    // if not have the localFilePath or missed to upload.
    if (!localFilePath) console.log(`File NOT GIVEN`);
    // if found file then upload it on cloudinary
    const response = await cloudinary.uploader.uppload(localFilePath, {
      resource_type: "auto",
    });
    // Response
    console.log(response);

    console.log(`URL of PUBLIC FILE: ${response.url}`);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    // remove the file from server because something is failed at cloudinary
  }
};

export { uploadOnCloudinary };
