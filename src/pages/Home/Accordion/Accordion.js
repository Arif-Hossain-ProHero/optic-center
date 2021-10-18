import React from "react";
import "./Accordion.css";

const Accordion = () => {
  return (
    <div className="accordion-container">
      <h2 className="text-center text-4xl font-semibold mb-12 pt-3">
        Frequently Ask Questions
      </h2>
      <div className="flex container mx-auto my-5">
        <div className="hidden md:block w-2/5">
          <img
            className="w-3/4"
            src="https://templates.hibootstrap.com/opnix/default/assets/images/faq-main.png"
            alt=""
          />
        </div>
        <div
          className="accordion w-full md:w-3/5 mt-12"
          id="accordionPanelsStayOpenExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button font-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                I have "spots" floating around in my eye. Should I be worried?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                Spots and floaters are usually harmless. Read our Spots &
                Floaters article for details about the causes and symptoms, and
                how to determine if you need to see your eye doctor
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed font-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                I'm interested in having LASIK done. What information do I need
                to know?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                We have a wealth of information in our LASIK & Vision Surgery
                section.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed font-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                My doctor refused to give me my contact lens prescription. Is
                this legal?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                Until recently, laws on this issue varied from state to state in
                the United States. Some eye doctors felt that if they gave out
                contact lens prescriptions, some of their patients would stop
                going in for regular eye exams. These check-ups are important,
                because they not only detect prescription changes, but they can
                also catch serious diseases in their early, more treatable
                stages.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button
                className="accordion-button collapsed font-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                WHAT DO I DO IF I FORGET TO TAKE MY MEDICATION?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div className="accordion-body">
                You should put your drops in at that time and then resume your
                original schedule.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
              <button
                className="accordion-button collapsed font-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                I'm looking for a specific type of contact lens. Do you know
                where I can find it?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div className="accordion-body">
                We get two different types of questions like this: some people
                describe the type of lens they're looking for and want to know
                if it exists; others know that the lens exists and want to know
                how to get it (usually, you're looking for special-effect
                contact lenses). If you want to know whether a lens exists, try
                our Contact Lens section and our What's New pages
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
              <button
                className="accordion-button collapsed font-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSix"
              >
                Is Lasik Painful?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingSix"
            >
              <div className="accordion-body">
                In general, LASIK should never be performed unless a numbing
                agent is used beforehand. This is typically in the form of
                drops, which are used to numb the eye. After a few minutes, the
                eye becomes numb and the surgeon can begin to work. We use the
                highest quality numbing drops for LASIK eye surgery in Dubai,
                and our doctors do not operate otherwise. Once it wears off, you
                will feel some discomfort, however it will be mild. Your doctor
                will prescribe some medication to take along with painkillers
                that should help reduce discomfort.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
