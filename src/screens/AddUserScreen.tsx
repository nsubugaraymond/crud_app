import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useAddUserMutation } from '../reducers/userSlice';
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

const AddUserScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [addUser, { isLoading }] = useAddUserMutation();

  const handleAddUser = () => {
    if (name.trim() !== '') {
      addUser({ name });
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
        title={isLoading ? 'Adding User...' : 'Add User'}
        onPress={handleAddUser}
        disabled={isLoading}
      />
    </Container>
  );
};

export default AddUserScreen;
