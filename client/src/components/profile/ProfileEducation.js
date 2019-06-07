import React from "react";
import PropTypes from "prop-types";
import ProfileEducationItem from "./ProfileEducationItem";

const ProfileExperience = ({ profile: { education } }) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>
      {education.length > 0 ? (
        <>
          {education.map(education => (
            <ProfileEducationItem key={education._id} education={education} />
          ))}
        </>
      ) : (
        <h4>No education credentials</h4>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileExperience;
