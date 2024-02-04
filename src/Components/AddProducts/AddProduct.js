import Wrapped from "./AddPrdStyle";
import ImageUploader from "../ImageUploader/index";
function AddProduct() {
  return (
    <Wrapped>
      <div className="container-fluid">
        <header>Add Product</header>
        <div className="row">
          <div class="col-md-4 mb-4">
            <label for="productName" class="form-label">
              Product Name
            </label>
            <input type="text" class="form-control" id="productName" />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4 mb-4">
            <label for="Category" class="form-label">
              Category
            </label>
            <input type="text" class="form-control" id="Category" />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4 mb-4">
            <label for="subCategory" class="form-label">
              Sub Category
            </label>
            <input type="text" class="form-control" id="subCategory" />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4 mb-4">
            <label for="cost" class="form-label">
              Cost
            </label>
            <input type="text" class="form-control" id="cost" />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4 mb-4">
            <label for="productType" class="form-label">
              Product Type
            </label>
            <input type="text" class="form-control" id="productType" />
            <div class="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="row ">
          <div className="col-4 mb-4">
            <label>Product Image</label>
            <div>
              <ImageUploader
                handleChange={(e) => console.log("handleChange", e)}
              />
            </div>
          </div>
          <div className="col-8 mb-4">
            <label>Product Sub-Image</label>
            <div className="ProductsImgUploader">
              <ImageUploader
                handleChange={(e) => console.log("handleChange", e)}
              />
              &nbsp;&nbsp;&nbsp;
              <ImageUploader
                handleChange={(e) => console.log("handleChange", e)}
              />
              &nbsp;&nbsp;&nbsp;
              <ImageUploader
                handleChange={(e) => console.log("handleChange", e)}
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div
            className="col-4"
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
