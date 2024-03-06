import Wrapped from "./AddPrdStyle";
import ImageUploader from "../ImageUploader/index";
import axios from "axios";
import AsyncSelect from "react-select/async";
import { useEffect, useState } from "react";
import Uploader from "../../utils/uploader";

function AddProduct() {
  const [parentCat, setParentCat] = useState([]);
  const [allSubCat, setAllSubCat] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [Nodata, setNodata] = useState(null);
  const [selectedParentCat, setSelectedParentCat] = useState({});
  const [selectedSubCat, setSelectedSubCat] = useState({});

  useEffect(() => {
    CallCategoriesList();
  }, []);
  useEffect(() => {
    console.log("setAllSubCat", allSubCat, selectedParentCat);
    for (let data of allSubCat) {
      if (data.categoryId == selectedParentCat.categoryId) {
        setSubCat(data.list);
      }
    }
  }, [selectedParentCat]);
  const CallCategoriesList = async () => {
    const res = await axios.get("/product/get-category-master");
    const data = res.data.content;
    setParentCat(data.categoryMasterList);
    setAllSubCat(data.subCategoryList);
  };
  const ParentCatOptions = async (string, callback) => {
    return parentCat;
  };
  const handleInputChange = (value) => {
    if (value.length > 2) {
      setNodata("No results found");
    } else {
      setNodata(null);
    }
  };
  const handleUploadImg = async (e, type) => {
    if (e?.imageList[0]?.file) {
      console.log("file", e?.imageList[0]?.file);
      let data = await Uploader(e.imageList[0].file, "product");
      if (type == "product") {
        console.log("data1", data);
      } else {
        console.log("data2", data);
      }
    }
  };
  return (
    <Wrapped>
      <div className="container-fluid">
        <header>Add Product</header>
        <div className="row">
          <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <label for="productName" class="form-label">
              Product Name
            </label>
            <input type="text" class="form-control" id="productName" />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <label for="Category" class="form-label">
              Category
            </label>
            <input type="hidden" class="form-control" id="Category" />
            <AsyncSelect
              loadOptions={ParentCatOptions}
              value={selectedParentCat}
              getOptionLabel={(e) => e.categoryName}
              getOptionValue={(e) => e.categoryId}
              defaultOptions={parentCat}
              onChange={(e) => setSelectedParentCat(e)}
              noOptionsMessage={() => Nodata}
              onInputChange={handleInputChange}
              placeholder="Category"
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <label for="subCategory" class="form-label">
              Sub Category
            </label>
            <input type="hidden" class="form-control" id="subCategory" />
            <AsyncSelect
              loadOptions={subCat}
              value={selectedSubCat}
              getOptionLabel={(e) => e.subCategoryName}
              getOptionValue={(e) => e.subCategoryId}
              defaultOptions={subCat}
              onChange={(e) => setSelectedSubCat(e)}
              // noOptionsMessage={() => Nodata}
              // onInputChange={handleInputChange}
              placeholder="Category"
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <label for="cost" class="form-label">
              Cost
            </label>
            <input type="text" class="form-control" id="cost" />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <label for="productType" class="form-label">
              Product Type
            </label>
            <input type="text" class="form-control" id="productType" />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <label for="productDesc" class="form-label">
              Product Description
            </label>
            <input type="text" class="form-control" id="productDesc" />
            <div class="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-lg-4 mb-4">
            <label>Product Image</label>
            <div>
              <ImageUploader
                handleChange={(e) => handleUploadImg(e, "product")}
              />
            </div>
          </div>
          <div className="col-12 col-lg-8 mb-4">
            <label>Product Sub-Image</label>
            <div className="ProductsImgUploader">
              <ImageUploader
                handleChange={(e) => handleUploadImg(e, "subProduct")}
              />
              <ImageUploader
                handleChange={(e) => handleUploadImg(e, "subProduct")}
              />
              <ImageUploader
                handleChange={(e) => handleUploadImg(e, "subProduct")}
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div
            className="col-12 col-sm-6 col-lg-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button className="btn clear">Clear</button>
            <button className="btn upload">Upload</button>
          </div>
        </div>
      </div>
    </Wrapped>
  );
}
export default AddProduct;
