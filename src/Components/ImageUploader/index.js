import ImageUploading from "react-images-uploading";
import Wrapped from "./imgUploaderStyle";
import { MdDelete, MdCloudUpload } from "react-icons/md";

import { useState } from "react";
function Index(props) {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    props.handleChange({ imageList, addUpdateIndex });
    setImages(imageList);
  };
  return (
    <Wrapped>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <>
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {!imageList.length ? (
              <div
                style={isDragging ? { color: "red" } : null}
                className="UploaderImage"
                onClick={onImageUpload}
                onDrag={onImageUpload}
                {...dragProps}
              >
                <MdCloudUpload />
              </div>
            ) : (
              imageList.map((image, index) => (
                <div key={index} className="UploaderImage">
                  <img src={image.data_url} alt="" height="100%" width="100%" />
                  {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                  <span
                    onClick={() => onImageRemove(index)}
                    className="deleteIcon"
                  >
                    <MdDelete />
                  </span>
                </div>
              ))
            )}
          </>
        )}
      </ImageUploading>
    </Wrapped>
  );
}
export default Index;
