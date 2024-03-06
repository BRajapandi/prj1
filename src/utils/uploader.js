import axios from "axios";

const Uploader = (file, type_path) => {
  let formData = new FormData();
  formData.append("file", file);
  return axios.post(
    `http://ns6887.cms504.com:9090/images/${type_path}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
export default Uploader;
