import styled from "styled-components";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import Button from "../components/Button";

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid #ef9a9a;
`;

const SuccessMessage = styled.div`
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid #a5d6a7;
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #555;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const FormButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SaveButton = styled(FormButton)`
  background-color: #4a90e2;
  color: white;

  &:hover:not(:disabled) {
    background-color: #357abd;
  }
`;

const CancelButton = styled(FormButton)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;

  &:hover:not(:disabled) {
    background-color: #e8e8e8;
  }
`;

const UserInfo = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  margin-bottom: 2rem;
`;

const ProfileHeader = styled.div`
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.5rem;
    color: #2c3e50;
    margin: 0;
  }
`;

const InfoItem = styled.p`
  margin: 0.75rem 0;
  color: #495057;
  line-height: 1.6;

  strong {
    color: #2c3e50;
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 1.1rem;
  color: #666;
`;

const Profile = () => {
  const { userProfile, updateProfile, loading, error, setError } = useUser();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: userProfile?.firstName || "",
    lastName: userProfile?.lastName || "",
    email: userProfile?.email || "",
    address: userProfile?.address || "",
  });
  const [success, setSuccess] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData({
      firstName: userProfile?.firstName || "",
      lastName: userProfile?.lastName || "",
      email: userProfile?.email || "",
      address: userProfile?.address || "",
    });

    setIsEditing(false);
    setError(null);
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess("");

    try {
      await updateProfile(formData);
      setSuccess("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.log("Profile update failed " + error);
    }
  };

  if (isEditing) {
    return (
      <ProfileContainer>
        <Title>Edit Profile</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <EditForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label>First name:</Label>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              disabled={loading}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Last name:</Label>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              disabled={loading}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              disabled={loading}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Address:</Label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              disabled={loading}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormActions>
            <SaveButton type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save changes"}
            </SaveButton>

            <CancelButton
              type="button"
              onClick={handleCancel}
              disabled={loading}
            >
              Cancel
            </CancelButton>
          </FormActions>
        </EditForm>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <Title>Your Profile</Title>

      <UserInfo>
        <ProfileHeader>
          <h2>Account Information</h2>
        </ProfileHeader>

        <InfoItem>
          <strong>Username:</strong> {userProfile.username}
        </InfoItem>
        <InfoItem>
          <strong>Email: </strong> {userProfile.email}
        </InfoItem>
        <InfoItem>
          <strong>First name: </strong> {userProfile.firstName}
        </InfoItem>
        <InfoItem>
          <strong>Last name: </strong> {userProfile.lastName}
        </InfoItem>
        <InfoItem>
          <strong>Address: </strong> {userProfile.address}
        </InfoItem>
      </UserInfo>

      <Button
        variant="edit"
        onClick={handleEdit}
        text="Edit profile"
        disabled={loading}
      />
    </ProfileContainer>
  );
};

export default Profile;
