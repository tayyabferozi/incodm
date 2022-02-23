import React, { useState } from "react";
import clsx from "clsx";

import CreationLayout from "../layouts/CreationLayout";
import { useEffect } from "react";
import ProjectDetails from "../Partials/ProjectDetails";
import Tools from "../Partials/Tools";
import Directory from "../Partials/Directory";

const CreateProject = () => {
  const [stepState, setStepState] = useState(0);
  const [stepsCompleteState, setStepsCompleteState] = useState(false);
  const [sideInfoState, setSideInfoState] = useState({
    title: "Project Tip",
    desc: "Selecting a project template will automatically populate the project tools assigned to that template by your Admin. While the step will be skipped, you can click on Tools to make adjustments.",
  });

  const decrementStep = () => {
    setStepState((prevState) => {
      setStepsCompleteState(false);
      return prevState - 1;
    });
  };

  const incrementStep = () => {
    setStepState((prevState) => {
      if (prevState === 2) {
        setStepsCompleteState(true);
        return prevState;
      } else {
        return prevState + 1;
      }
    });
  };

  useEffect(() => {
    if (stepState >= 1) {
      setSideInfoState({
        title: "Tool Order",
        desc: "You can change the viewing order of the Project Tools in the menu by dragging them up or down within their group. However, tools cannot be moved across groups.",
      });
    }
    if (stepState >= 2) {
      setSideInfoState({
        title: "Set Project Roles",
        desc: "For security reasons, many of your users do not have access to your Company or Project level Directory. Assigning Project Roles creates a list of key project team members on the Project Home page. You can create custom project roles in the Company level Admin tool.",
      });
    }
  }, [stepState]);

  return (
    <CreationLayout>
      <div className="main">
        <div className="left">
          <div className="steps">
            {[
              {
                img: "./assets/vectors/create-project-1.svg",
                text: "Project Details",
              },
              {
                img: "./assets/vectors/create-project-2.svg",
                text: "Tools",
              },
              {
                img: "./assets/vectors/create-project-3.svg",
                text: "Directory",
              },
              {
                img: "./assets/vectors/create-project-4.svg",
                text: "Drawings",
                firstStep: true,
              },
              {
                img: "./assets/vectors/create-project-5.svg",
                text: "Specifications",
                firstStep: true,
              },
              {
                img: "./assets/vectors/create-project-6.svg",
                text: "Schedule",
                firstStep: true,
              },
            ].map((el, idx) => {
              const { img, text, firstStep } = el;

              let active;
              let done;

              if (stepState === idx) {
                active = true;
              } else if (stepState > idx) {
                done = true;
              }

              if (firstStep && stepState > 0) {
                return;
              }

              return (
                <div
                  key={"step" + idx}
                  className={clsx("step", { active, done })}
                >
                  <div className="img">
                    <img
                      src={
                        done
                          ? "./assets/vectors/create-project-step-complete.svg"
                          : img
                      }
                      alt="vector"
                    />
                  </div>
                  <div className="text">{text}</div>
                </div>
              );
            })}
          </div>
          <div className="tip">
            <h4>{sideInfoState.title}</h4>
            <p className="fs-12 text-light-1 mt-3 lh-15">
              {sideInfoState.desc}
            </p>
            <a className="fs-12 d-block" href="#0">
              Learn More
            </a>
          </div>
        </div>
        <div className="right">
          {stepState === 0 && <ProjectDetails />}
          {stepState === 1 && <Tools />}
          {stepState === 2 && <Directory stepsComplete={stepsCompleteState} />}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button className="btn btn-primary-text" onClick={decrementStep}>
                {stepState > 0 ? "BACK" : ""}
              </button>
            </div>
            <div>
              {stepsCompleteState && (
                <button className="btn btn-primary-outlined no-min-width me-5">
                  SKIP
                </button>
              )}
              <button className="btn btn-primary" onClick={incrementStep}>
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </CreationLayout>
  );
};

export default CreateProject;
