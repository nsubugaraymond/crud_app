import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useEditUserMutation } from '../reducers/userSlice';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 16px;
`;

const EditUserScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [editUser, { isLoading }] = useEditUserMutation();

  const handleEditUser = () => {
    // Assuming you have the user ID available in props or state
    const userId = 1; // Replace with actual user ID
    if (name.trim() !== '') {
      editUser({ id: userId, name });
      setName('');
    }
  };

  return (
    <Container>
      <Input
        placeholder="Enter name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button
        title={isLoading ? 'Editing User...' : 'Edit User'}
        onPress={handleEditUser}
        disabled={isLoading}
      />
    </Container>
  );
};

export default EditUserScreen;
