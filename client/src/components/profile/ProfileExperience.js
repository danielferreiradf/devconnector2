import React from "react";
import PropTypes from "prop-types";
import ProfileExperienceItem from "./ProfileExperienceItem";

const ProfileExperience = ({ profile: { experience } }) => {
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experience</h2>
      {experience.length > 0 ? (
        <>
          {experience.map(experience => (
            <ProfileExperienceItem
              key={experience._id}
              experience={experience}
            />
          ))}
        </>
      ) : (
        <h4>No experience credentials</h4>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileExperience;
