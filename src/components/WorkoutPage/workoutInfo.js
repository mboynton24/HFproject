import Container from "../components/container";
import Image from "next/image";
import fitnessPlaceholder from "../public/img/fitness-placeholder.png";

const WorkoutInfo = ({ workoutID }) => {
  // logic for retrieving information and/or parsing it for display
  // TODO request workout details from database
  const difficulty = 5;
  const description = "Lorem Ipsum";
  const workoutName = "Sample Workout";

  const requirements = [
    { number: 1, description: "First Requirement" },
    { number: 2, description: "Second Requirement" },
    { number: 3, description: "Third Requirement" },
  ];

  const steps = [
    { number: 1, description: "First Step" },
    { number: 2, description: "Second Step" },
    { number: 3, description: "Third Step" },
  ];

  // TODO replace placeholder image with workout image
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2 ">
          <div className="max-w-2xl mb-8">
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {workoutName}
            </h1>
            <h3 className="py-2 text-2xl font-bold leading-relaxed tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
              Difficulty: {"💪".repeat(difficulty)}
            </h3>
            <p className="py-2 text-l leading-normal text-gray-500 dark:text-gray-300">
              {description} (ID:{workoutID})
            </p>

            <h3 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
              Requirements:
            </h3>

            <div className="flex items-center p-4 space-x-4">
              {requirements.map((requirement) => (
                <div
                  key={requirement.number}
                  className={`flex items-center bg-gray-100 text-gray-800 rounded-lg p-4 dark:text-white dark:bg-gray-500`}
                >
                  <div>{requirement.description}</div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
              Instructions:
            </h3>

            <div className="flex-row items-center p-4 space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex items-center bg-gray-100 text-gray-800 rounded-lg p-4 dark:text-white dark:bg-gray-500`}
                >
                  <div>{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={fitnessPlaceholder}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Workout Image"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default WorkoutInfo;
