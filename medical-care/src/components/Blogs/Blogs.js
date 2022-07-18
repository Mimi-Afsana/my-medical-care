import React from "react";

const Blogs = () => {
  return (
    <div className="">
      <div className=" p-5 col-12">
        <h2 className="text-primary mb-4">
          <span>Q1:</span> Difference between authorization and authentication ?
        </h2>
        <h4 className="text-primary mb-4">Answer:</h4>
        <div className=" border border-danger p-4 pe-4 ps-3 rounded ">
          <p className=" pe-5 col-12 ">
            <span className="text-info h5">Authorization:</span>
            Authorization determines what resources a user can access.
            Authorization works through settings that are implemented and
            maintained by the organization. Authorization always takes place
            after authentication. Authorization isn’t visible to or changeable
            by the user. Example: Once their level of access is authorized,
            employees and HR managers can access different levels of data based
            on the permissions set by the organization.
          </p>
          <p className="col-12">
            <span className="text-info h5"> Authentication: </span>
            Authentication verifies who the user is. Authentication works
            through passwords, one-time pins, biometric information, and other
            information provided or entered by the user.Authentication is the
            first step of a good identity and access management process.
            Authentication is visible to and partially changeable by the user.
            Example: By verifying their identity, employees can gain access to
            an HR application that includes their personal pay information,
            vacation time, and 401K data.
          </p>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-primary mb-4">
          <span>Q2:</span> Why are you using firebase? What other options do you
          have to implement authentication?
        </h2>
        <h4 className="text-primary mb-4">Answer:</h4>
        <div className="border border-danger p-4 rounded">
          <p className=" col-12">
            <span className="text-info h5 ">
              Why are you using firebase? <br /> <span>Answer: </span>
            </span>
            <br />
            Firebase helps me to develop high-quality apps, grow user base, and
            earn more money. Each feature works independently, and they work
            even better together.Allow users to sign in to your app with their
            Facebook, Twitter, Google, Microsoft, Yahoo or GitHub account with
            less than 5 minutes of work. Also allow users to signin by using
            email and password.
          </p>
          <p className=" ">
            <span className="text-info h5 ">
              What other options do you have to implement authentication? <br />{" "}
              <span>Answer: </span>
            </span>
            <br />
            There are many option i have to implement authentication. They are:
            1. Multi-factor authentication. 2. Certificate-based authentication.
            3. Biometric authentication Biometrics authentication is a sec. 4.
            Password-based authentication
          </p>
        </div>
      </div>
      <div className="border-primary p-5">
        <h2 className="text-primary mb-4">
          <span>Q3:</span> What other services does firebase provide other than
          authentication ?
        </h2>
        <h4 className="text-primary mb-4">Answer:</h4>
        <p className="border border-danger p-4 pe-4 ps-3 rounded">
          <span className="text-info h5 ">
            There are many services which Firebase provides,other than
            authentication are:
          </span>{" "}
          <br />
          Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google
          Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
