const HCStyles = `
    .hc-deepfake-sdk-modal{
    height:100vh;
    background:rgba(0,0,0,0.4);
    width: 100%;
    z-index: 999999;
    position: fixed;
    left:0;
    top:0;
    transition: 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
        font-family: "Exo 2", sans-serif;
    }

    h3{
        font-weight: 700;
        margin:0;
        font-size: 28px;
        color:white;
    }
}

#hc-deepfake-sdk-modal-content{
    background-color: black;
    border-radius: 16px;
    padding:20px;
    width:100%;
    max-width: 450px;
    margin:auto;
    box-shadow: 0px 2px 10px 10px rgba(0,0,0,0.04);

}

.hc-deepfake-sdk-checkbox{
    height:20px;
    width:20px;
    border:1px solid white;
    border-radius: 999px;
    flex-shrink: 0;
    position: relative;
}

.hc-deepfake-sdk-checkbox.active::before{
    content: "";
    position: absolute;
    left:2.5px;
    height:15px;
    width:15px;
    top:50%;
    transform: translateY(-50%);
    background: white;
    border-radius: 7.5px;
}

.hc-deepfake-sdk-option{
    color:white;
    display: flex;
    align-items: center;
    gap:5px;
    cursor: pointer;
    user-select: none;
    width: fit-content;
}

#hc-deepfake-sdk-detection-options{
    > h5 {
        font-size:18px;
        padding-bottom: 10px;
        border-bottom: 1px solid white;
        width: fit-content;
        color:white;
    }
}

#hc-deepfake-sdk-form{

    >.hc-deepfake-sdk-form-item{
        margin-top:20px;

        >label{
            font-size: 20px;
            font-weight: 500;
        }
    }

}

.hc-deepfake-sdk-video-model-options{
    height:105.72px;
    margin-top:30px;
    transition: all 0.4s ease;
    overflow:hidden;

    > h5 {
        font-size:16px;
        padding-bottom: 5px;
        border-bottom: 1px solid white;
        width: fit-content;
        color:white;
        margin:0;
        margin-bottom: 15px;
    }

    &.inactive{
        height:0;
    }

}

#hc-deepfake-sdk-file-input-mask{
    margin:20px 0;
    height:40px;
    border:1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    position: relative;

     > svg, >p {
        pointer-events: none;
     }
}

#hc-deepfake-sdk-file-input-mask-content{
    display:flex;
    justify-content: center;
    align-items: center;
    height:100%;
}

#hc-deepfake-sdk-file-input{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

#hc-deepfake-sdk-submit-btn{
    height:40px;
    border:1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    color:white;
    background:transparent;
    appearance: none;
    width: 200px;
    margin:auto;
    transition: 0.4s all ease;
    font-size:16px;
}

#hc-deepfake-sdk-submit-btn:hover{
    background:white;
    color:black;
}

.hc-animate-spin{
    animation: hc-spin 1s linear infinite;
}

#hc-deepfake-sdk-close-btn{
    cursor:pointer;
    height:30px;
    width:30px;
    border-radius:15px;
    background:white;
    display:flex;
    align-items:center;
    justify-content:center;

    > span {
        color:black;
        font-size:20px;
    }
}

@keyframes hc-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

#hc-result{
    font-size:16px;
    color:white;
    border-bottom: 1px solid green;
    margin-top:20px;
    display:block;
}
#hc-error{
   font-size:16px;
   color:red;
   margin-top:20px;
   display:block;
}
`;

const HCLoaderSVG = `
    <svg
        style="height: 24px; width: 24px"
        class="hc-animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
        cx="12"
        cy="12"
        r="10"
        stroke="white"
        stroke-width="4"
        ></circle>
        <path
        fill="black"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
    </svg>
`;

const HCFileInputSVG = `
     <svg
        style="height: 20px; width: 20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <path
            d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
            stroke="#f0f0f0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            ></path>
            <path
            d="M12 16V3M12 3L16 7.375M12 3L8 7.375"
            stroke="#f0f0f0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            ></path>
        </g>
        </svg>
`;

const HCCloseSVG = `
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg style="height:20px;width:20px;" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
</svg>
`;

const HCHtml = `
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <style>
    ${HCStyles}
    </style>
    <div class="hc-deepfake-sdk-modal">
      <form id="hc-deepfake-sdk-modal-content">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <h3>HumanChain</h3>
        <div id="hc-deepfake-sdk-close-btn">
            ${HCCloseSVG}
        </div>
        </div>
        <div id="hc-deepfake-sdk-detection-options">
          <h5>Detect</h5>
          <div style="display: flex; flex-wrap: wrap; gap: 10px">
            <div
              class="hc-deepfake-sdk-detection-option hc-deepfake-sdk-option"
              data-media-type="audio"
            >
              <div class="hc-deepfake-sdk-checkbox"></div>
              Audio
            </div>
            <div
              class="hc-deepfake-sdk-detection-option hc-deepfake-sdk-option"
              data-media-type="video"
            >
              <div class="hc-deepfake-sdk-checkbox active"></div>
              Video
            </div>
            <div
              class="hc-deepfake-sdk-detection-option hc-deepfake-sdk-option"
              data-media-type="image"
            >
              <div class="hc-deepfake-sdk-checkbox"></div>
              Image
            </div>
          </div>
          <div class="hc-deepfake-sdk-video-model-options">
            <h5>Model</h5>
            <div
              style="margin-bottom: 10px"
              class="hc-deepfake-sdk-video-model-option hc-deepfake-sdk-option"
              data-model="model1"
            >
              <div class="hc-deepfake-sdk-checkbox active"></div>
              Model 1
            </div>
            <div
              class="hc-deepfake-sdk-video-model-option hc-deepfake-sdk-option"
              data-model="model2"
            >
              <div class="hc-deepfake-sdk-checkbox"></div>
              Model 2
            </div>
          </div>
          <div id="hc-deepfake-sdk-file-input-mask">
            <div id="hc-deepfake-sdk-file-input-mask-content">
            ${HCFileInputSVG}
              <p style="color: white; margin-left: 5px">Upload file</p>
            </div>
            <input
              type="file"
              required
              name="file"
              accept="video/*"
              id="hc-deepfake-sdk-file-input"
            />
          </div>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
          "
        >
          <button type="submit" id="hc-deepfake-sdk-submit-btn">
            <span>Detect</span>
          </button>
        </div>
      </form>
    </div>
`;

class HumanChainDFSDK {
  constructor() {
    this.baseUrl = "https://humanchain.sparklehood.org/api/detect";
    this.container = null;
    this.closeBtnSelector = "#hc-deepfake-sdk-close-btn";
    this.HCDetectionOptions = {
      audio: "audio",
      video: "video",
      image: "image",
    };
  }

  async toggleLoad(value) {
    const btn = document.getElementById("hc-deepfake-sdk-submit-btn");
    if (value) {
      btn.innerHTML = HCLoaderSVG;
      btn.setAttribute("disabled", "true");
    } else {
      btn.innerHTML = `<span>Detect</span>`;
      btn.removeAttribute("disabled");
    }
  }

  removeSuccessOrError() {
    const container = document.getElementById("hc-deepfake-sdk-modal-content");
    const error = document.getElementById("hc-error");
    const result = document.getElementById("hc-result");
    if (result && container) {
      container.removeChild(result);
    }
    if (error && container) {
      container.removeChild(error);
    }
  }

  async submitData(formData, mediaType, fileName) {
    this.removeSuccessOrError();
    this.toggleLoad(true);
    let endpoint = "/audio";
    if (mediaType === this.HCDetectionOptions.image) {
      endpoint = "/image";
    } else if (mediaType === this.HCDetectionOptions.video) {
      endpoint = "/video";
    }
    const fullEndpoint = this.baseUrl + endpoint;
    try {
      const response = await fetch(fullEndpoint, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        this.toggleLoad(false);
        return;
      }
      const responseData = await response.json();
      this.toggleLoad(false);
      const { error, prediction } = responseData;
      const container = document.getElementById(
        "hc-deepfake-sdk-modal-content"
      );
      if (error) {
        const errorSpan = document.createElement("span");
        errorSpan.id = "hc-error";
        errorSpan.innerText = `${fileName} - ${error}`;
        container.appendChild(errorSpan);
      } else if (prediction) {
        const predictionSpan = document.createElement("span");
        predictionSpan.id = "hc-result";
        predictionSpan.innerText = `${fileName} - ${prediction}`;
        container.appendChild(predictionSpan);
      }
      const HCFileInputEl = document.getElementById(
        "hc-deepfake-sdk-file-input"
      );
      HCFileInputEl.value = "";
      const HCFileInputMaskContentEl = document.getElementById(
        "hc-deepfake-sdk-file-input-mask-content"
      );
      HCFileInputMaskContentEl.querySelector("svg").style.display = "block";
      HCFileInputMaskContentEl.querySelector("p").innerText = "Upload file";
      return responseData;
    } catch (error) {
      console.error("Error in submitData:", error);
      this.renderError(`Error submitting data: ${error.message}`);
    }
  }

  // Function to render a simple form interface
  renderForm() {
    if (!this.container) {
      this.createContainer();
    }
    this.container.innerHTML = HCHtml;
    let fileName = "";
    const HCVideoModels = {
      model1: "model1",
      model2: "model2",
    };
    const HCDetectionOptions = this.HCDetectionOptions;
    const acceptedFiles = {
      [HCDetectionOptions.audio]: `.wav,.mp3,.aac,.ogg,.flac,.m4a`,
      [HCDetectionOptions.image]: "image/*",
      [HCDetectionOptions.video]: "video/*",
    };

    let HCOptions = {
      detection: HCDetectionOptions.video,
      videoModel: HCVideoModels.model1,
    };

    const HCVideoModelOptionsEl = document.querySelector(
      ".hc-deepfake-sdk-video-model-options"
    );
    const HCForm = document.getElementById("hc-deepfake-sdk-modal-content");
    const HCFileInputEl = document.getElementById("hc-deepfake-sdk-file-input");
    const HCFileInputMaskContentEl = document.getElementById(
      "hc-deepfake-sdk-file-input-mask-content"
    );

    const HCSetupRadioButtons = ({
      trackingVarName,
      btnClassName,
      attrName,
    }) => {
      const buttons = document.querySelectorAll(`.${btnClassName}`);
      const checkboxes = [];
      buttons.forEach((btn) => {
        const checkbox = btn.querySelector(".hc-deepfake-sdk-checkbox");
        checkboxes.push(checkbox);
      });
      const isDetectionOption = trackingVarName === "detection";
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const trackingVarValue = HCOptions[trackingVarName];
          const checkbox = button.querySelector(".hc-deepfake-sdk-checkbox");
          const attrValue = button.getAttribute(attrName);
          if (trackingVarValue !== attrValue) {
            checkboxes.forEach((checkbox) =>
              checkbox.classList.remove("active")
            );
            checkbox.classList.add("active");
            HCOptions[trackingVarName] = attrValue;
            if (isDetectionOption) {
              HCFileInputMaskContentEl.querySelector("svg").style.display =
                "block";
              HCFileInputMaskContentEl.querySelector("p").innerText =
                "Upload file";
              HCFileInputEl.value = "";
              HCFileInputEl.accept = acceptedFiles[attrValue];
              if (attrValue !== HCDetectionOptions.video) {
                HCVideoModelOptionsEl.classList.add("inactive");
              } else {
                HCVideoModelOptionsEl.classList.remove("inactive");
              }
            }
          }
        });
      });
    };

    HCSetupRadioButtons({
      trackingVarName: "detection",
      btnClassName: "hc-deepfake-sdk-detection-option",
      attrName: "data-media-type",
    });
    HCSetupRadioButtons({
      trackingVarName: "videoModel",
      btnClassName: "hc-deepfake-sdk-video-model-option",
      attrName: "data-model",
    });
    HCFileInputEl.addEventListener("change", (e) => {
      const file = e.target?.files?.[0];
      if (file) {
        fileName = file.name;
        HCFileInputMaskContentEl.querySelector("svg").style.display = "none";
        HCFileInputMaskContentEl.querySelector("p").innerText = file.name;
      } else {
        file = "";
        HCFileInputMaskContentEl.querySelector("svg").style.display = "block";
        HCFileInputMaskContentEl.querySelector("p").innerText = "Upload File";
      }
    });
    HCForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(HCForm);
      formData.append("mediaType", HCOptions.detection);
      formData.append("model", HCOptions.videoModel);
      this.submitData(formData, HCOptions.detection, fileName);
    });
    document
      .querySelector(this.closeBtnSelector)
      .addEventListener("click", () => {
        document.body.removeChild(document.getElementById(this.container.id));
      });
  }

  renderError(errorMessage) {
    const errorHTML = `<p style="color: red;">${errorMessage}</p>`;
    this.container.innerHTML = errorHTML;
  }

  createContainer() {
    this.container = document.createElement("div");
    this.container.id = "humanchain-df-container";
    document.body.appendChild(this.container);
  }

  init() {
    this.renderForm();
  }
}
