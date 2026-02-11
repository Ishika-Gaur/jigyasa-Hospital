import "./specialities.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Specialities = () => {
  return (
    <>
      <div className="human-body-wrapper">
        <h1 className="various-speciality">Various Specialities</h1>
        <div className="human-body-section">
          <img
            src="/human_body_manmap.webp"
            alt="human-body"
            className="map-image"
          />

          <div className="label-container left ear" style={{ top: "10%" }}>
            
            <Link to="/ear" className="label">
              Ear
            </Link>
            <div className="connector-line"></div>
          </div>

          <div
            className="label-container left eye"
            style={{
              top: "6%",
            }}
          >
            
            <Link to="/eye" className="label">
              Eye
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container left throat"
            style={{
              top: "17%",
            }}
          >
            
            <Link to="/throat" className="label">
              Throat
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container left liver"
            style={{
              top: "38%",
            }}
          >
            
            <Link to="/liver" className="label">
              Liver
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container left arm"
            style={{
              top: "24%",
            }}
          >
            
            <Link to="/arm" className="label">
              Arm
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container left kidney"
            style={{
              top: "43%",
            }}
          >
            
            <Link to="/kidney" className="label">
              Kidney
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container left lower-back"
            style={{
              top: "48%",
            }}
          >
            
            <Link to="/lowerback" className="label">
              Lower Back
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container left reproductive"
            style={{
              top: "55%",
            }}
          >
           
            <Link to="/reproductive" className="label">
              Reproductive System
            </Link>
             <div className="connector-line"></div>
          </div>
          <div
            className="label-container left thigh"
            style={{
              top: "61%",
            }}
          >
            
            <Link to="/thigh" className="label">
              Thigh
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container left varicose"
            style={{
              top: "72%",
            }}
          >
            
            <Link to="/varicose" className="label">
              Varicose Vein
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container left foot"
            style={{
              top: "90%",
            }}
          >
            
            <Link to="/foot" className="label">
              Foot
            </Link>
            <div className="connector-line"></div>
          </div>

          {/* RIGHT LABELS */}
          <div
            className="label-container right brain"
            style={{
              top: "6%",
            }}
          >
            <Link to="/brain" className="label">
              Brain
            </Link>
            <div className="connector-line"></div>
          </div>

          <div
            className="label-container right nose"
            style={{
              top: "11.5%",
            }}
          >
            
            <Link to="/nose" className="label">
              Nose
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container right heart"
            style={{
              top: "22%",
            }}
          >
            
            <Link to="/heart" className="label">
              Heart
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container right chest"
            style={{
              top: "27%",
            }}
          >
            
            <Link to="/chest" className="label">
              Chest
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container right elbow"
            style={{
              top: "35%",
            }}
          >
            
            <Link to="/elbow" className="label">
              Elbow
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container right stomach"
            style={{
              top: "45%",
            }}
          >
            
            <Link to="/stomach" className="label">
              Stomach
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container right hip"
            style={{
              top: "55%",
            }}
          >
           
            <Link to="/hip" className="label">
              Hip
            </Link>
             <div className="connector-line"></div>
          </div>
          <div
            className="label-container right knee"
            style={{
              top: "73%",
            }}
          >
            
            <Link to="/knee" className="label">
              Knee
            </Link>
            <div className="connector-line"></div>
          </div>
          <div
            className="label-container right ankle"
            style={{
              top: "88%",
            }}
          >
           
            <Link to="/ankle" className="label">
              Ankle
            </Link>
             <div className="connector-line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialities;
